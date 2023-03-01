import { Router } from 'express';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';
import '../database';
import '../shared/container';

import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';
import swaggerDocument from './swagger.json';

const router = Router();

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);

export { router };
