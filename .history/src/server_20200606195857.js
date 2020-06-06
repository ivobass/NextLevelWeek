const express = require("express")
const server = express()

// carregar o banco de dados 
const db = require("./database/db") // quando exite o comando: module.exports = db no ficheiro db.js conseguimos fazer require para uma variavel db o outro nome bancodedados, para carregar o objeto

// configurar pasta publica assim com esta linha o projecto encontra os ficheiros style e scripts e passa a ser como se estivese no root todas as pastas que estao dentro da pasta public
server.use(express.static("public"))

// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))

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
    // req.query: Query Strings da nossa url
    // console.log(req.query)  //   url com interrogações simbolos & e demais campos

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {


    // req.body:  O corpo do nosso formulario
    // console.log(req.body)
    // inserir dados no banco de dados



    return res.send("ok")
})



server.get("/search", (req, res) => {

        // Carregar os dados do banco de dados


        db.all(`SELECT * FROM places`, function(err, rows) { // substituindo o  * por name conseguimos ver so o nome
            if (err) {
                return console.log(err)
            }

            // console.log("Aqui estão seus registros: ")
            // console.log(rows)

            const total = rows.length


            // mostrar a página html com os dados do banco de dados
            return res.render("search-results.html", { places: rows, total: total })
        })
    })
    //Importante corrigir todos os <a href=""> de navegação

// ligar o servidor

server.listen(3000)