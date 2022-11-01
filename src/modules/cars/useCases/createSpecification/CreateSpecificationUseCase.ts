import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../Repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository
  ) {}
  execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`);
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
