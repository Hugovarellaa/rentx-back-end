import express from 'express';
import swaggerUi from 'swagger-ui-express';
import 'reflect-metadata';

import { router } from './routes';
import swaggerDocument from './swagger.json';

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
