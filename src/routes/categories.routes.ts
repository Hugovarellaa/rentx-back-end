import { Router } from "express";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  console.log(name, description);

  return response.status(201).send();
});

export { categoriesRoutes };
