import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTableSpecificationCars1678478658877 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'specifications_cars',
				columns: [
					{
						name: 'car_id',
						type: 'uuid',
					},
					{
						name: 'specification_id',
						type: 'uuid',
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
			}),
		);
		await queryRunner.createForeignKey(
			'specifications_cars',
			new TableForeignKey({
				name: 'FKCSpecificationCar',
				referencedTableName: 'specifications',
				referencedColumnNames: ['id'],
				columnNames: ['specification_id'],
				onUpdate: 'SET NULL',
				onDelete: 'SET NULL',
			}),
		);

		await queryRunner.createForeignKey(
			'specifications_cars',
			new TableForeignKey({
				name: 'FKCCarSpecification',
				referencedTableName: 'cars',
				referencedColumnNames: ['id'],
				columnNames: ['car_id'],
				onUpdate: 'SET NULL',
				onDelete: 'SET NULL',
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('specifications_cars', 'FKCSpecificationCar');
		await queryRunner.dropForeignKey('specifications_cars', 'FKCCarSpecification');
		await queryRunner.dropTable('specifications_cars');
	}
}
