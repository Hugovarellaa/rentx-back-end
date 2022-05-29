import { Router } from 'express';

import { CreateCarController } from '@modules/cars/UseCases/Car/createCar/CraeteCarController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post('/', ensureAuthenticated, createCarController.handle);

export { carsRoutes };
