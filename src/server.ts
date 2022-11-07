import express from 'express'

import { categoriesRoutes } from './routes/categories.routes'
import { specificationsRoutes } from './routes/specification.routes'

const app = express()

app.use(express.json())
app.use('/categories', categoriesRoutes)
app.use('/specification', specificationsRoutes)

app.listen(3334, () => console.log('Server listening on port 3334'))
