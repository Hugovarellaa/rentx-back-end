import express from 'express';
import swaggerUi from 'swagger-ui-express';
import './database';

import { router } from './routes';
import swaggerDocument from './swagger.json';

const app = express();

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(router);

app.listen(8080, () => console.log('Listening on port 8080!'));
