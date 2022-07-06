import { Router } from 'express';
import multer from 'multer';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();
const createUsersController = new CreateUsersController();
const updateUserAvatarController = new UpdateUserAvatarController();

const uploadAvatar = multer(uploadConfig.upload('./uploads/avatar'));

usersRoutes.post('/', createUsersController.handle);
usersRoutes.patch('/avatar', ensureAuthenticated, uploadAvatar.single('avatar'), updateUserAvatarController.handle);

export { usersRoutes };
