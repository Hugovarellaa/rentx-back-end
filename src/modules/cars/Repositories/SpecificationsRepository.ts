import { Specification } from "../model/Specification";
import {
  ICreateCategoryDTO,
  ISpecificationsRepository,
} from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specification: Specification[];
  constructor() {
    this.specification = [];
  }
  create({ name, description }: ICreateCategoryDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specification.push(specification);
  }
}

export { SpecificationsRepository };
