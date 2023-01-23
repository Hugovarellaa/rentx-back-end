import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';

const PORT = 8080;
const app = express();
app.use(express.json());

app.use('/categories', categoriesRoutes);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
