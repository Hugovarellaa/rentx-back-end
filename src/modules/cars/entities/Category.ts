import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('categories')
class Category {
	@PrimaryColumn()
	id?: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@CreateDateColumn()
	created_at?: string;

	constructor() {
		if (!this.id) {
			this.id = uuidV4();
		}
		if (!this.created_at) {
			this.created_at = new Date().toISOString();
		}
	}
}

export { Category };
