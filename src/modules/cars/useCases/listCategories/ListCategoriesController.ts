import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private categoriesRepository: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.categoriesRepository.execute();
    return response.json(all);
  }
}

export { ListCategoriesController };
