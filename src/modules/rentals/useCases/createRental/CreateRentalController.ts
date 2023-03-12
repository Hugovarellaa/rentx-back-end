import { Request, Response } from 'express';

class CreateRentalController {
	async handle(request: Request, response: Response) {
		console.log('Controller');
	}
}

export { CreateRentalController };
