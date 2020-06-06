const express = require("express")
const server = express()

// carregar o banco de dados 
const db = require("./database/db") // quando exite o comando: module.exports = db no ficheiro db.js conseguimos fazer require para uma variavel db o outro nome bancodedados, para carregar o objeto

// configurar pasta publica assim com esta linha o projecto encontra os ficheiros style e scripts e passa a ser como se estivese no root todas as pastas que estao dentro da pasta public
server.use(express.static("public"))

// configurar template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
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
    return res.render("index.html", { title: "Um título" })
})

//Create-Point

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {

    // Carregar os dados do banco de dados


    db.all(`SELECT * FROM places`, function(err, rows) { // substituindo o  * por name conseguimos ver so o nome
        if (err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)
        return res.render("search-results.html", { places: rows })
    })



})

//Importante corrigir todos os <a href=""> de navegação


// ligar o servidor

server.listen(3000)