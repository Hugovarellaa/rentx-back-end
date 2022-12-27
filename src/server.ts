/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';

import 'express-async-errors';
import './database';
import { AppError } from './errors/AppError';
import { router } from './routes';
import './shared/container';
import swaggerDocument from './swagger.json';

const app = express();

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(router);

// middlewares de error personalizado
app.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof AppError) {
			return response.status(err.statusCode).json({ message: err.message });
		}

		return response.status(500).json({
			status: 'error',
			message: `Internal Server Error: ${err.message}`,
		});
	},
);

app.listen(8080, () => console.log('Listening on port 8080!'));
