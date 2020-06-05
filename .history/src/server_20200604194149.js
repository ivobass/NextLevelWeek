const express = require("express")
const server = express()

// configurar caminho da minha aplicação
// pagina inicial 
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    res.send("Cheguei aqui")
})

// ligar o servidor

server.listen(3000)