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

const secret = 'b76f2ce51925297753631558bd317131';
const JWT_SECRET = process.env.JWT_SECRET || secret;

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
		const token = sign({}, JWT_SECRET, {
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
