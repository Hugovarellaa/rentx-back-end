import { Router } from 'express';

import { CreateUsersController } from '../modules/account/useCases/createUsers/CreateUsersController';

const usersRoutes = Router();
const createUsersController = new CreateUsersController();

usersRoutes.post('/', createUsersController.handle);

export { usersRoutes };
