import { Specification } from "../model/Specification";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateCategoryDTO };
