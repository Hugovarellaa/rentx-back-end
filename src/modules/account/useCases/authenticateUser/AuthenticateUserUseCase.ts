import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@errors/AppError';
import { IUsersRepository } from '@modules/account/repositories/IUsersRepository';

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
		private userRepository: IUsersRepository,
	) {}
	async execute({ email, password }: IRequest): Promise<IResponse> {
		const user = await this.userRepository.findByEmail(email);

		// Usuário existir
		if (!user) {
			throw new AppError(`Email or password incorrect`);
		}

		// Senhas esta correta
		const passwordMatch = await compare(password, user.password);
		if (!passwordMatch) {
			throw new AppError(`Email or password incorrect`);
		}

		// Gerar o Web-token
		const token = sign({}, 'supersecret123', {
			subject: user.id,
			expiresIn: '1d',
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
