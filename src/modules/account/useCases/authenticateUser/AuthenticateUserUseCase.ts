import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { UsersRepository } from '../../repositories/implementations/UsersRepository';

interface IRequest {
	email: string;
	password: string;
}

interface IResponse {
	user: {
		name: string;
		email: string;
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
		// Usuário existir?
		const user = await this.usersRepository.findByEmail(email);
		if (!user) {
			throw new Error('Email or password incorrect!');
		}

		// Senha correta?
		const passwordMatch = await compare(password, user.password);
		if (!passwordMatch) {
			throw new Error('Email or password incorrect!');
		}

		// Gerar token
		const token = sign({}, 'supersecret123', {
			subject: user.id,
			expiresIn: '1d',
		});

		return {
			user,
			token,
		};
	}
}

export { AuthenticateUserUseCase };
