const express = require("express")
const server = express()

// configurar caminho da minha aplicação
// pagina inicial 
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    res.sendfile(__dirname + "/views/index.html")
})

// ligar o servidor

server.listen(3000)