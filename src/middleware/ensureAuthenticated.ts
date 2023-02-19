import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '../modules/account/repositories/implementations/UsersRepository';

interface IPayload {
	sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
	const authHeaders = request.headers.authorization;

	if (!authHeaders) {
		throw new Error(`Invalid authorization header or Token missing`);
	}

	const [, token] = authHeaders.split(' ');

	try {
		const { sub: user_id } = verify(token, 'supersecret123') as IPayload;

		const userRepository = new UsersRepository();
		const user = userRepository.findById(user_id);
		if (!user) {
			throw new Error(`User ${user_id} does not exists!`);
		}

		next();
	} catch {
		throw new Error(`Invalid token`);
	}
}
