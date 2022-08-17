import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
	sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		throw new Error(`Token missing authorization`);
	}

	const [, token] = authHeader.split(' ');

	try {
		const { sub: user_id } = verify(token, 'supersecret123') as IPayload;

		const usersRepository = new UsersRepository();
		const user = await usersRepository.findById(user_id);
		if (!user) {
			throw new Error(`User ${user_id} does not exist`);
		}

		return next();
	} catch {
		throw new Error(`Invalid token authorization`);
	}
}
