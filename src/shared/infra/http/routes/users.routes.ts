import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import { CreateUserController } from '@modules/account/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '@modules/account/useCases/updateUserAvatar/UpdateUserAvatarController';

import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

const uploadAvatar = multer(uploadConfig.upload('./uploads/avatar'));

const usersRoutes = Router();
const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.patch('/avatar', ensureAuthenticated, uploadAvatar.single('avatar'), updateUserAvatarController.handle);

export { usersRoutes };
