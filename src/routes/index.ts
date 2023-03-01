import { Router } from 'express';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';
import '../database';
import '../shared/container';

import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';
import swaggerDocument from './swagger.json';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRoutes);

export { router };
