interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ISpecificationsRepository, ICreateCategoryDTO };
