import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { router } from './routes';
import swaggerDocument from './swagger.json';

const app = express();
app.use(express.json());
app.use(router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8080, () => console.log('listening on port 8080'));
