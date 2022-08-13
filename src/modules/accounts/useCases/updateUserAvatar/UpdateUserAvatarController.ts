import { Request, Response } from 'express';

class UpdateUserAvatarController {
	async handle(request: Request, response: Response) {
		const avatar = request.file.filename;
		const {} = request.user;
	}
}

export { UpdateUserAvatarController };
