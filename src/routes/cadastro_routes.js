const express = require('express')
const CadastroController = require('../controllers/cadastro_controller')

const router = express.Router()

router.post('/', CadastroController.create)
router.get('/', CadastroController.list)
router.put('/', CadastroController.update)
router.delete('/', CadastroController.delete)

module.exports = router