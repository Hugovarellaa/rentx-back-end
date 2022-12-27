import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
	sub: string;
}

export async function ensureAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	const tokenInHeaders = request.headers.authorization;

	if (!tokenInHeaders) {
		throw new Error('Token missing in authorization header');
	}

	const [, token] = tokenInHeaders.split(' ');

	try {
		const { sub: user_id } = verify(
			token,
			'b76f2ce51925297753631558bd317131',
		) as IPayload;

		const usersRepository = new UsersRepository();
		const userAlreadyExists = usersRepository.findById(user_id);
		if (!userAlreadyExists) {
			throw new Error('User not found');
		}

		next();
	} catch (err) {
		throw new Error('Token is not valid');
	}
}
