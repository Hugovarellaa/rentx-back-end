import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '../config/upload'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'
import { UpdateUserAvatarUseController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'

const usersRoutes = Router()

const uploadAvatar = multer(uploadConfig.upload('./uploads/avatar'))

const createUserController = new CreateUserController()
const updateUserAvatarUseController = new UpdateUserAvatarUseController()

usersRoutes.post('/', createUserController.handle)

usersRoutes.patch(
    '/avatar',
    ensureAuthenticated,
    uploadAvatar.single('avatar'),
    updateUserAvatarUseController.handle
)

export { usersRoutes }
