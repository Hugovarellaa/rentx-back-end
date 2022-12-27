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
		// Usuário existir
		const user = await this.usersRepository.findByEmail(email);
		if (!user) {
			throw new Error('Email or password incorrect');
		}

		// A senha esta corretar?
		const passwordValid = await compare(password, user.password);
		if (!passwordValid) {
			throw new Error('Email or password incorrect');
		}

		// Gerar jsonwebtoken
		const token = sign({}, 'b76f2ce51925297753631558bd317131', {
			subject: user.id,
			expiresIn: '1d',
		});

		const tokenReturn: IResponse = {
			token,
			user: {
				name: user.name,
				email: user.email,
			},
		};

		return tokenReturn;
	}
}

export { AuthenticateUserUseCase };
