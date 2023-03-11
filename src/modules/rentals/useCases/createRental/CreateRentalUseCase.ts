import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { Rental } from '@modules/rentals/infra/entities/Rental';
import { IRentalRepository } from '@modules/rentals/repositories/IRentaRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
	user_id: string;
	car_id: string;
	expected_return_date: Date;
}

dayjs.extend(utc);

class CreateRentalUseCase {
	constructor(private rentalsRepository: IRentalRepository) {}
	async execute({ car_id, user_id, expected_return_date }: IRequest): Promise<Rental> {
		const compareHours = 24;

		// - Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo carro
		const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(car_id);

		if (carUnavailable) {
			throw new AppError(`Car not available!`);
		}

		// - Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo usuário
		const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(user_id);
		if (rentalOpenToUser) {
			throw new AppError(`there's a rental in progress for user!`);
		}

		// - O aluguel deve ter duração mínima de 24 horas.

		const expectedReturnDateFormat = dayjs(expected_return_date).utc().local().format();
		const dateNow = dayjs().utc().local().format();
		const compare = dayjs(expectedReturnDateFormat).diff(dateNow, 'hours');

		if (compare < compareHours) {
			throw new AppError('Invalid return time!');
		}

		const rental = await this.rentalsRepository.create({
			user_id,
			car_id,
			expected_return_date,
		});

		return rental;
	}
}

export { CreateRentalUseCase };

// - [x] - O usuário deve estar logado na aplicação
// - [x] - Ao realizar um aluguel, o status do carro deverá ser - alterado para indisponível
