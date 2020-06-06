// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose() //verbose retorna objeto para a variavel sqlite3 e mostra no terminal mensagens informações

// criar o objeto que ira fazer operações no banco de dados

//forma normal:
// const db = {
//     propiedade: "valor"  
// }


// para ver o caminho da base de dados 
// const path = require('path');
// const dbPath = path.resolve(__dirname, 'database.db')
// var db = new sqlite3.Database(dbPath);

// forma nova:

const db = new sqlite3.Database("./src/database/db.js")

// utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {

    // com comandos SQL ei vou:

    // 1 Criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    // 2 Inserir dados na tabela
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "Colectoria",
    //     "Guilherme Gemballa, Jardim América",
    //     "Nº 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrónicos, Lâmpadas"
    // ]

    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)


    // 3 Consultar os dados da tabela

    db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            return console.log(err)
        }
        consule.log("Aqui estão seus registros: ")
        consule.log(rows)
    })

    // 4 Deletar um dado da tabela


})