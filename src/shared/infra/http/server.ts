import express, { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';

import '@shared/container';
import { AppError } from '@shared/errors/AppError';
import 'express-async-errors';
import '../typeorm';

import swaggerDocument from '../../../swagger.json';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			message: err.message,
		});
	}
	return res.status(500).json({
		status: 'error',
		message: `Internal Server Error ${err.message}`,
	});
});

app.listen(8080, () => console.log('listening on port 8080'));
