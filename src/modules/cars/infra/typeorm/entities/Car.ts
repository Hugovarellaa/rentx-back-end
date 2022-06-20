import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('cars')
class Car {
	@PrimaryColumn()
	id?: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	daily_rate: number;

	@Column()
	available: boolean;

	@Column()
	license_plate: string;
	fine_amount: number;
	brand: string;
	category_id: string;
	created_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuidV4();
			this.available = true;
			this.created_at = new Date();
		}
	}
}

export { Car };
