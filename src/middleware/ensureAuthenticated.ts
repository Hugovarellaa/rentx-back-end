import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/AppError';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
	sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
	const authHeaders = request.headers.authorization;

	if (!authHeaders) {
		throw new AppError(`Token missing`, 401);
	}

	const [, token] = authHeaders.split(' ');

	try {
		const { sub: user_id } = verify(token, 'supersecret123') as IPayload;

		const usersRepository = new UsersRepository();
		const user = await usersRepository.findById(user_id);

		if (!user) {
			throw new AppError(`User not found`, 401);
		}

		request.user = {
			id: user_id,
		};
	} catch {
		throw new AppError(`Invalid token: ${token}`, 401);
	}
	return next();
}
