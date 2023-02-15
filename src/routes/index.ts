import { Router } from 'express';

import { categoriesRoutes } from './categoriesRoutes.routes';

const router = Router();

router.use('/categories', categoriesRoutes);

export { router };
