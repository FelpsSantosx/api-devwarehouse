const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const port = 3000

const Produto = mongoose.model('Produto', {
    produto: String,
    descricao: String,
    valor: Number,
    image_url: String
})

app.post("/", async (req, res) => {
    const produto = new Produto({
        produto: req.body.produto,
        descricao: req.body.descricao,
        valor: req.body.valor,
        image_url: req.body.image_url
    })

    await produto.save()
    res.send(produto)
})

app.get("/", async (req, res) => {
    const produtos = await Produto.find()
    res.send(produtos)
})

app.put("/:id", async (req, res) => {
    const produto = await Produto.findByIdAndUpdate(req.params.id, {
        produto: req.body.produto,
        descricao: req.body.descricao,
        valor: req.body.valor,
        image_url: req.body.image_url
    }, { new: true })

    res.send(produto)
})

app.delete("/:id", async (req, res) => {
    const produto = await Produto.findByIdAndDelete(req.params.id)
    res.send(produto)
})


app.listen(port, () => {
    mongoose.connect('mongodb+srv://{Name}:{Passwoard}@devwarehouse.uvdqsfw.mongodb.net/?retryWrites=true&w=majority&appName=DevWarehouse')
    console.log('App Runnig')
})