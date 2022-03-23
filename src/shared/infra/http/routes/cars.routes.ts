import { Router } from 'express';

import { CreateCarController } from '@modules/cars/UseCases/Car/createCar/CraeteCarController';
import { ListAvailableCarsController } from '@modules/cars/UseCases/Car/listAvailableCar/ListAvailableCarsController';
import { CreateCarSpecificationsController } from '@modules/cars/UseCases/Specifications/createCarSpecifications/CreateCarSpecificationsController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationsController = new CreateCarSpecificationsController();

carsRoutes.post('/', ensureAuthenticated, ensureAdmin, createCarController.handle);
carsRoutes.get('/available', listAvailableCarsController.handle);
carsRoutes.post('/specifications/:id', ensureAuthenticated, ensureAdmin, createCarSpecificationsController.handle);

export { carsRoutes };
