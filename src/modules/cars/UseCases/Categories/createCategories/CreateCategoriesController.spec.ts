import { hash } from 'bcryptjs';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('Create Category Controller', () => {
	beforeAll(async () => {
		connection = await createConnection();
		await connection.runMigrations();

		const id = uuidV4();
		const password = await hash('admin', 8);
		await connection.query(
			`INSERT INTO USERS(id, name, email, password, driver_license, "isAdmin", created_at)
    values('${id}', 'admin' ,'admin@rentx.com.br', '${password}', 'DF-123456789', true, 'now()')
    `,
		);
	});

	afterAll(async () => {
		await connection.dropDatabase();
		await connection.close();
	});

	it('should be able to create a new Category', async () => {
		const responseToken = await request(app).post('/session').send({
			email: 'admin@rentx.com.br',
			password: 'admin',
		});

		const { token } = responseToken.body;

		const response = await request(app)
			.post('/categories')
			.send({
				name: 'Categories Super teste',
				description: 'Categories Super teste',
			})
			.set({
				Authorization: `Bearer ${token}`,
			});
		expect(response.status).toBe(201);
	});

	it('should not be able to create a new category with name exists', async () => {
		const responseToken = await request(app).post('/session').send({
			email: 'admin@rentx.com.br',
			password: 'admin',
		});

		const { token } = responseToken.body;

		const response = await request(app)
			.post('/categories')
			.send({
				name: 'Categories Super teste',
				description: 'Categories Super teste',
			})
			.set({
				Authorization: `Bearer ${token}`,
			});

		expect(response.status).toBe(400);
	});
});
