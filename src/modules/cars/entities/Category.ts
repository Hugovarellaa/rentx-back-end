import { v4 as uuidV4 } from 'uuid';

class Category {
	id?: string;
	name: string;
	description: string;
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
