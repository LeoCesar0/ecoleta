const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
/*
db.serialize(() => {
    
    // Criando Tabela
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

    // Inserindo Dados
    const query = `
            INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES (?, ?, ?, ?, ?, ?, ?);
    `

    const values = [
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80",
        "Papersider",
        "Guilherme Gesballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastro com sucesso")
        console.log(this)
    }

    //db.run(query, values, afterInsertData)


        // Consultando dados da table
        db.all(`SELECT * FROM places`, function(err, rows){
            if(err){
                return console.log(err)
            }
    
            console.log("Aqui estão seus registros: ")
            console.log(rows)
    
        })
    

    // Deletando Dados
    db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
        if(err){
            return console.log(err)
        }
        console.log("Registro Deletado com sucesso!")
    })


})
*/
