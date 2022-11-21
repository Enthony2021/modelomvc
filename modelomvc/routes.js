const express = require('express')
const routes = express.Router()
const HomeController = require('./src/controllers/HomeController')
const ContatoController = require('./src/controllers/ContatoController')

// Rotas da Home
routes.get('/', HomeController.paginaInicial)
routes.post('/', HomeController.trataPost)

// Rotas de contato
routes.get('/contato', ContatoController.paginaInicial)

module.exports = routes