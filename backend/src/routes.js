const express = require('express')
const routes = express.Router()

const { celebrate, Segments, Joi } = require('celebrate')

const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/IncidentController')
const profileController = require('./controllers/ProfileController')

const sessionController = require('./controllers/SessionController')

routes.post('/session', sessionController.create)

routes.get('/ongs', ongController.list)

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}),ongController.insert)

routes.get('/profile', profileController.list)

routes.get('/incidents', incidentController.list)
routes.post('/incidents', incidentController.insert)
routes.delete('/incidents/:id', incidentController.detele)


module.exports = routes

