import express, { NextFunction, Request, Response } from 'express'
import 'reflect-metadata'
import swaggerUi from 'swagger-ui-express'

import 'express-async-errors'
import swaggerDocument from '../swagger.json'
import './database'
import { AppError } from './errors/AppError'
import { router } from './routes'
import './shared/container'

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(express.json())
app.use(router)

// Tratando os erros do AppError
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response
                .status(err.statusCode)
                .json({ message: err.message })
        }
        return response.status(500).json({
            status: 'error',
            message: `Internal Server Error - ${err.message}}`
        })
    }
)

app.listen(3333, () => console.log('Service listening on port 3333'))
