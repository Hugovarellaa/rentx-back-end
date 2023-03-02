import express, { NextFunction, Request, Response } from 'express';

import { AppError } from './errors/AppError';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			message: err.message,
		});
	}
	return res.status(500).json({
		status: 'Error',
		message: `Internal Server Error ${err.message}`,
	});
});

app.listen(8080, () => console.log('listening on port 8080'));
