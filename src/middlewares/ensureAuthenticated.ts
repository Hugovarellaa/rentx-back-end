import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		throw new Error(`Token missing authorization`);
	}

	const [, token] = authHeader.split(' ');

	try {
		const decoded = verify(token, 'supersecret123');
		console.log(decoded);
	} catch {
		throw new Error(`Invalid token authorization`);
	}
	return next();
}
