import { Router } from 'express';

const authenticatesRoutes = Router();
const authenticateController = new AuthenticateController();

authenticatesRoutes.post('/session', authenticateController.handle);

export { authenticatesRoutes };
