const express = require('express')
const usuarioControllers = require('../controllers/login_controllers')

const router = express.Router()

router.post('/', usuarioControllers.resgistroUsuario)
router.post('/', usuarioControllers.loginUsuario)

module.exports = router