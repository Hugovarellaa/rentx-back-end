import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

class UpdateUserAvatarController {
	async handle(request: Request, response: Response): Promise<Response> {
		const avatar = request.file.filename;
		const { id } = request.user;

		const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);
		await updateUserAvatarUseCase.execute({ user_id: id, avatar });

		return response.status(204).send();
	}
}

export { UpdateUserAvatarController };
