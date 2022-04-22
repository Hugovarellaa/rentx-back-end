import { Router } from 'express';

import { CreateCarController } from '@modules/cars/UseCases/Car/createCar/CraeteCarController';
import { ListAvailableCarsController } from '@modules/cars/UseCases/Car/listAvailableCar/ListAvailableCarsController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.post('/', ensureAuthenticated, ensureAdmin, createCarController.handle);
carsRoutes.get('/available', listAvailableCarsController.handle);

export { carsRoutes };
