import { inject, injectable } from 'tsyringe';

import { deleteFile } from '../../../../utils/file';
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

		if (user.avatar) {
			await deleteFile(`./uploads/avatar/${user.avatar}`);
		}

		user.avatar = avatar;

		await this.usersRepository.create(user);
	}
}

export { UpdateUserAvatarUseCase };
