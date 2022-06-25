import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;

describe('Create Car', () => {
	beforeEach(() => {
		createCarUseCase = new CreateCarUseCase();
	});

	it('should be able to create a new car', async () => {
		await createCarUseCase.execute({
			name: 'Name Car',
			description: 'Description Car',
			daily_rato: 100,
			license_plate: 'ABC-123',
			fine_amount: 22,
			brand: 'Brand',
			category_id: 'category',
		});
	});
});
