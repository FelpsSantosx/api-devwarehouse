const express = require('express')
const ProdutoController = require('../controllers/ProdutoController')

const router = express.Router()

Router.post('/', ProdutoController.create)
Router.get('/', ProdutoController.list)
Router.put('/', ProdutoController.update)
Router.delete('/', ProdutoController.delete)

module.exports = router

