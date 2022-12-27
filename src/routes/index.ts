import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specification.routes';
import { usersRoutes } from './urses.routes';

const router = Router();

router.use(authenticateRoutes);
router.use('/categories', categoriesRoutes);
router.use('/specification', specificationsRoutes);
router.use('/users', usersRoutes);

export { router };
