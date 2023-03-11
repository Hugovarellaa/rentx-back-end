import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import { CreateCarController } from '@modules/cars/UseCases/Car/createCar/CraeteCarController';
import { ListAvailableCarsController } from '@modules/cars/UseCases/Car/listAvailableCar/ListAvailableCarsController';
import { UploadCarImagesController } from '@modules/cars/UseCases/Car/uploadCarImages/UploadCarImagesController';
import { CreateCarSpecificationsController } from '@modules/cars/UseCases/Specifications/createCarSpecifications/CreateCarSpecificationsController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const carsRoutes = Router();
const upload = multer(uploadConfig.upload('./uploads/cars'));

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationsController = new CreateCarSpecificationsController();
const uploadCarImagesController = new UploadCarImagesController();

carsRoutes.post('/', ensureAuthenticated, ensureAdmin, createCarController.handle);
carsRoutes.get('/available', listAvailableCarsController.handle);
carsRoutes.post('/specifications/:id', ensureAuthenticated, ensureAdmin, createCarSpecificationsController.handle);

carsRoutes.post(
	'/images/:id',
	ensureAuthenticated,
	ensureAdmin,
	upload.array('images'),
	uploadCarImagesController.handle,
);

export { carsRoutes };
