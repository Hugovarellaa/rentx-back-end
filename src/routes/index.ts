import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';

const router = Router();
router.use('/', categoriesRoutes);

export { router };
