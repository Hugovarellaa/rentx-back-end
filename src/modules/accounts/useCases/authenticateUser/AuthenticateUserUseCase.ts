import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';

interface IRequest {
	email: string;
	password: string;
}

interface IResponse {
	user: {
		email: string;
		name: string;
	};
	token: string;
}

@injectable()
class AuthenticateUserUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: UsersRepository,
	) {}
	async execute({ email, password }: IRequest): Promise<IResponse> {
		const user = await this.usersRepository.findByEmail(email);
		if (!user) {
			throw new AppError('Email or Password incorrect');
		}

		const passwordMatch = compare(password, user.password);
		if (!passwordMatch) {
			throw new AppError('Email or Password incorrect');
		}

		const token = sign({}, 'supersecret123', {
			subject: user.id,
			expiresIn: '1d',
		});

		const returnToken: IResponse = {
			user: {
				email: user.email,
				name: user.name,
			},
			token,
		};

		return returnToken;
	}
}

export { AuthenticateUserUseCase };
