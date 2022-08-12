import { Router } from 'express';

import { CreateUsersController } from '../modules/accounts/useCases/createUsers/CreateUsersController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

const usersRoutes = Router();
const createUsersController = new CreateUsersController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUsersController.handle);
usersRoutes.patch('/avatar', updateUserAvatarController.handle);

export { usersRoutes };
