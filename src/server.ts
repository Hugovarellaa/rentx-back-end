import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { router } from './routes';
import swaggerDocument from './swagger.json';

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
