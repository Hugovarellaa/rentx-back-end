import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../../repositories/IUsersRepository';

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
		private usersRepository: IUsersRepository,
	) {}

	async execute({ email, password }: IRequest): Promise<IResponse> {
		// Verificar se o usuário existir
		const user = await this.usersRepository.findByEmail(email);
		if (!user) {
			throw new Error(`Email or Password incorrect`);
		}

		// Senhas sao iguais
		const passwordMatch = await compare(password, user.password);
		if (!passwordMatch) {
			throw new Error(`Email or Password incorrect`);
		}

		// Gerando o token
		const token = sign({}, 'supersecret123', {
			subject: user.id,
			expiresIn: '5d',
		});

		const tokenReturn: IResponse = {
			user: {
				name: user.name,
				email: user.email,
			},
			token,
		};

		return tokenReturn;
	}
}

export { AuthenticateUserUseCase };
