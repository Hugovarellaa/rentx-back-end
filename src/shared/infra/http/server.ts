import express, { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';

import '@shared/container';
import { AppError } from '@shared/errors/AppError';
import '@shared/infra/typeorm';
import 'express-async-errors';

import swaggerDocument from '../../../swagger.json';
import { router } from './routes';

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return response.status(err.statusCode).json({
			message: err.message,
		});
	}
	return response.status(500).json({
		status: 'error',
		message: `Internal Server Error: - ${err.message}`,
	});
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
