import { injectable } from 'tsyringe';

interface IRequest {
	name: string;
	description: string;
	daily_rato: number;
	license_plate: string;
	fine_amount: number;
	brand: string;
	category_id: string;
}

@injectable()
class CreateCarUseCase {
	constructor() {}
	async execute(data: IRequest) {
		const { name, description, daily_rato, license_plate, fine_amount, brand, category_id } = data;
	}
}

export { CreateCarUseCase };
