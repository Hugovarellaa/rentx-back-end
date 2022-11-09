import { Router } from 'express'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response) => {
    return response.json({ ok: true })
})

export { categoriesRoutes }
