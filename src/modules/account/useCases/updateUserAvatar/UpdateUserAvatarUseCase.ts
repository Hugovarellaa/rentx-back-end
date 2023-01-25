import { inject, injectable } from 'tsyringe';

import { UsersRepository } from '../../repositories/implementations/UsersRepository';

interface IRequest {
	user_id: string;
	avatar: string;
}

@injectable()
class UpdateUserAvatarUseCase {
	constructor(
		@inject('UsersRepository')
		private usersRepository: UsersRepository,
	) {}

	async execute({ user_id, avatar }: IRequest): Promise<void> {
		const user = await this.usersRepository.findById(user_id);

		user.avatar = avatar;

		await this.usersRepository.create(user);
	}
}

export { UpdateUserAvatarUseCase };
