// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose() //verbose retorna objeto para a variavel sqlite3 e mostra no terminal mensagens informações

// criar o objeto que ira fazer operações no banco de dados

//forma normal:
// const db = {
//     propiedade: "valor"  
// }

// forma nova:

const db = new sqlite3.Database("./src/databese/database.db")