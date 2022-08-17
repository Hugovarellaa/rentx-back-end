import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

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
		const { sub } = verify(token, 'supersecret123') as IPayload;
		console.log(sub);
	} catch {
		throw new Error(`Invalid token authorization`);
	}
	return next();
}
