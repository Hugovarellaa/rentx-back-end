import { Router } from 'express';
import multer from 'multer';

import { uploadConfig } from '../config/upload';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

const usersRoutes = Router();
const upload = multer(uploadConfig.upload('./uploads/avatar'));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.patch('/import', ensureAuthenticated, upload.single('avatar'), updateUserAvatarController.handle);

export { usersRoutes };
