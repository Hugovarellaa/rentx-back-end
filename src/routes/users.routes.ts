import { Router } from 'express';
import multer from 'multer';

import { CreateUsersController } from '../modules/accounts/useCases/createUsers/CreateUsersController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

const usersRoutes = Router();
const createUsersController = new CreateUsersController();
const updateUserAvatarController = new UpdateUserAvatarController();
const upload = multer({ dest: 'uploads/avatar' });

usersRoutes.post('/', createUsersController.handle);
usersRoutes.patch('/avatar', upload.single('avatar'), updateUserAvatarController.handle);

export { usersRoutes };
