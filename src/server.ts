import express from 'express'

const app = express()

app.use(express.json())

app.listen(3333, () => console.log('Service listening on port 3333'))
