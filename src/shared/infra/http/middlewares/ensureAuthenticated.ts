import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '@errors/AppError';

interface IPayload {
	sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		throw new AppError(`Token missing authorization`, 401);
	}

	const [, token] = authHeader.split(' ');

	try {
		const { sub: user_id } = verify(token, 'supersecret123') as IPayload;

		const usersRepository = new UsersRepository();
		const user = await usersRepository.findById(user_id);
		if (!user) {
			throw new AppError(`User ${user_id} does not exist`, 401);
		}

		request.user = {
			id: user_id,
		};

		return next();
	} catch {
		throw new AppError(`Invalid token authorization`, 401);
	}
}
