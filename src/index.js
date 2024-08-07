const express = require('express')
const mongoose = require('mongoose')
const produtoRoutes = require('./routes/ProdutoRoutes')

const app = express()
app.use(express.json())
const port = 3000

app.use('/produtos', produtoRoutes)

app.listen(port, () => {
    mongoose.connect('mongodb+srv://{}{}:@devwarehouse.uvdqsfw.mongodb.net/?retryWrites=true&w=majority&appName=DevWarehouse')
    console.log('App Runnig')
})