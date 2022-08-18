import { Router } from 'express';

import { AuthenticateController } from '../modules/accounts/useCases/authenticateUser/AuthenticateController';

const authenticatesRoutes = Router();
const authenticateController = new AuthenticateController();

authenticatesRoutes.post('/', authenticateController.handle);

export { authenticatesRoutes };
