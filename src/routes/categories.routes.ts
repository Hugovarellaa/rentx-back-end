import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/Repositories/CategoriesRepository";
import { CreateCategoriesServices } from "../modules/cars/services/CreateCategoriesServices";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoriesServices(
    categoriesRepository
  );

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRoutes };
