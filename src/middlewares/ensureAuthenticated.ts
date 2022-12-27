import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/AppError';
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
		throw new AppError('Token missing in authorization header', 401);
	}

	const [, token] = tokenInHeaders.split(' ');

	try {
		const { sub: user_id } = verify(
			token,
			'b76f2ce51925297753631558bd317131',
		) as IPayload;

		const usersRepository = new UsersRepository();
		const userAlreadyExists = await usersRepository.findById(user_id);
		if (!userAlreadyExists) {
			throw new AppError('User not found', 401);
		}

		request.user = {
			id: user_id,
		};

		next();
	} catch (err) {
		throw new AppError('Token is not valid', 401);
	}
}
