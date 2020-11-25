const port = 3003
const express = require("express")
const db = require("./dataBase")
const bp = require("body-parser")
const app = express()

app.use(bp.urlencoded({extended: true}))

app.get("/produtos", (req, res, next) => {
    // res.send({nome: "Notebook", preco: 3000}) //convert json
    res.send(db.getProducts())
})

app.get("/produtos/:id", (req, res, next) => {
    res.send(db.getProduct(req.params.id))
})

app.post("/produtos", (req, res, next) => {
    const produto = db.saveProduct({
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(produto)
})

app.put("/produtos/:id", (req, res, next) => {
    const produto = db.saveProduct({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(produto)
})


app.delete("/produtos/:id", (req, res, next) => {
    res.send(db.deleteProduct(req.params.id))
})
app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
})