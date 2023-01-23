import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specification.routes';

const PORT = 8080;
const app = express();
app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/specification', specificationsRoutes);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
