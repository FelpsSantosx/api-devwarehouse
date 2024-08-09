const express = require('express')
const mongoose = require('mongoose')
const produtoRoutes = require('./routes/produto_routes')
const cadastroRoutes = require('./routes/cadastro_routes')

const app = express()
app.use(express.json())
const port = 3000

app.use('/produtos', produtoRoutes)
app.use('/cadastro', cadastroRoutes)

app.listen(port, () => {
    mongoose.connect('')
    console.log('App Runnig')
})