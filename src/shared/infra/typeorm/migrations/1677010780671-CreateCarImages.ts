import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCarImages1677010780671 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'cars_image',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'car_id',
						type: 'uuid',
					},
					{
						name: 'image_name',
						type: 'varchar',
					},
					{
						name: 'category_id',
						type: 'uuid',
						isNullable: true,
					},
				],
				foreignKeys: [
					{
						name: 'FKCarImage',
						referencedTableName: 'cars',
						referencedColumnNames: ['id'],
						columnNames: ['car_id'],
						onDelete: 'SET NULL',
						onUpdate: 'SET NULL',
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('cars_image');
	}
}
