require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const produtoRoutes = require('./routes/produto_routes')
const cadastroRoutes = require('./routes/cadastro_routes')
const usuarioRoutes = require('./routes/login_routes')


const app = express()
app.use(express.json())
const port = 3000

app.use('/produtos', produtoRoutes)
app.use('/cadastro', cadastroRoutes)
app.use('/usuario', usuarioRoutes)

const dbUsuario = process.env.DB_USUARIO
const dbSenha = process.env.DB_SENHA

app.listen(port, () => {
    mongoose.connect(`mongodb+srv://${dbUsuario}:${dbSenha}@apidevwarehouse.3lc96.mongodb.net/?retryWrites=true&w=majority&appName=ApiDevWareHouse`)
    console.log('App Runnig')
})