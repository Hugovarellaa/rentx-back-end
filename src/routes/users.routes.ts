import { Router } from 'express';

import { CreateUsersController } from '../modules/account/useCases/createUsers/CreateUsersController';
import { UpdateUserAvatarController } from '../modules/account/useCases/updateUserAvatar/UpdateUserAvatarController';

const usersRoutes = Router();
const createUsersController = new CreateUsersController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUsersController.handle);
usersRoutes.patch('/', updateUserAvatarController.handle);

export { usersRoutes };
