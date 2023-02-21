import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '@modules/account/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IPayload {
	sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
	const authHeaders = request.headers.authorization;

	if (!authHeaders) {
		throw new AppError(`Invalid authorization header or Token missing`, 401);
	}

	const [, token] = authHeaders.split(' ');

	try {
		const { sub: user_id } = verify(token, 'supersecret123') as IPayload;

		const userRepository = new UsersRepository();
		const user = userRepository.findById(user_id);
		if (!user) {
			throw new AppError(`User ${user_id} does not exists!`, 401);
		}

		request.user = {
			id: user_id,
		};

		next();
	} catch {
		throw new AppError(`Invalid token`, 401);
	}
}