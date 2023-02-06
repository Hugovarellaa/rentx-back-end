interface ICategoriesRepository {
	create(): void;
	getAll(): void;
	findByName(): void;
}

export { ICategoriesRepository };
