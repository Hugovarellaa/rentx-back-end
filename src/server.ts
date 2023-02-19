import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

import 'express-async-errors';
import 'reflect-metadata';
import './database';
import { AppError } from './errors/AppError';
import { router } from './routes';
import './shared/container';
import swaggerDocument from './swagger.json';

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
