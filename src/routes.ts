import express from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
  response.json({ xesque: 'delen' })
})

export default routes;