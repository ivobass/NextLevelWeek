const express = require("express")
const server = express()


// configurar pasta publica assim com esta linha o projecto encontra os ficheiros style e scripts e passa a ser como se estivese no root todas as pastas que estao dentro da pasta public
server.use(express.static("public"))

// configurar template engine
const nunjucks = require("nunjucks")
nunjucks.configure("scr/views", {
    express: server,
    noCache: true
})

// configurar caminho da minha aplicação configura a rota da app
// pagina inicial 
// req: Requisição
// res: Resposta
// server.get("/", (req, res) => {
//     res.sendFile(__dirname + "/views/index.html")
// })

// server.get("/create-point", (req, res) => {
//     res.sendFile(__dirname + "/views/create-point.html")
// })
// trocamos depois de ter o nunjucks por:

server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

// ligar o servidor

server.listen(3000)