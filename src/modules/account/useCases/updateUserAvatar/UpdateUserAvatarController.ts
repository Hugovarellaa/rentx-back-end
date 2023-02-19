import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

class UpdateUserAvatarController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.user;
		const avatar_file = request.file.filename;

		const avatar = avatar_file;

		const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

		await updateUserAvatarUseCase.execute({ user_id: id, avatar });

		return response.status(204).send();
	}
}

export { UpdateUserAvatarController };
