// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose() //verbose retorna objeto para a variavel sqlite3 e mostra no terminal mensagens informações

// criar o objeto que ira fazer operações no banco de dados

//forma normal:
// const db = {
//     propiedade: "valor"  
// }

// forma nova:

const db = new sqlite3.Database("./src/databese/database.db")

// utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {

    // com comandos SQL ei vou:

    // 1 Criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name, TEXT,
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
)  VALUES (?,?,?,?,?,?,?);
`

    db.run()


    // 3 Consultar os dados da tabela

    // 4 Deletar um dado da tabela


})