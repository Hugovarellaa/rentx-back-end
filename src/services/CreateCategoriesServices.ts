import { CategoriesRepository } from "../Repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoriesServices {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExistis = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExistis) {
      throw new Error("Category already exists!!!");
    }

    this.categoriesRepository.create({ name, description });
  }
}
export { CreateCategoriesServices };
