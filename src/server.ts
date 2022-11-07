import express from 'express'
import swaggerUi from 'swagger-ui-express'

import swaggerDocument from '../swagger.json'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(3334, () => console.log('Server listening on port 3334'))
