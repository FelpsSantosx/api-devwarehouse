const express = require('express')
const ProdutoController = require('../controllers/ProdutoController')

const router = express.Router()

router.post('/', ProdutoController.create)
router.get('/', ProdutoController.list)
router.put('/:id', ProdutoController.update)
router.delete('/:id', ProdutoController.delete)

module.exports = router

