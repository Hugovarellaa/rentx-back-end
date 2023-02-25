import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuthentication } from '../middleware/ensureAuthentication';
import { CreateUsersController } from '../modules/accounts/useCases/createUsers/CreateUsersController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

const uploadAvatar = multer(uploadConfig.upload('./uploads/avatar'));

const usersRoutes = Router();
const createUsersController = new CreateUsersController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUsersController.handle);
usersRoutes.patch('/avatar', ensureAuthentication, uploadAvatar.single('avatar'), updateUserAvatarController.handle);

export { usersRoutes };
