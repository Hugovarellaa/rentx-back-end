import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

import 'express-async-errors';
import 'reflect-metadata';
import './database';
// eslint-disable-next-line import-helpers/order-imports
import { AppError } from './errors/AppError';
import './shared/container';

import { router } from './routes/index';
import swaggerDocument from './swagger.json';

const app = express();
app.use(express.json());
app.use(router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8080, () => console.log('listening on port 8080 🚀'));

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return response.status(err.statusCode).json({ message: err.message });
	}

	return response.status(500).json({
		status: 'error',
		message: `Internal Server Error ${err.message}}`,
	});

	next(err);
});
