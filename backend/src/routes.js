const express = require('express')
const routes = express.Router()

const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/IncidentController')
const profileController = require('./controllers/ProfileController')

const sessionController = require('./controllers/SessionController')

routes.post('/session', sessionController.create)

routes.get('/ongs', ongController.list)
routes.post('/ongs', ongController.insert)

routes.get('/profile', profileController.list)

routes.get('/incidents', incidentController.list)
routes.post('/incidents', incidentController.insert)
routes.delete('/incidents/:id', incidentController.detele)


module.exports = routes

