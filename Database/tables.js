import { db } from "./db.js";


async function criarTabelas() {
    try {
        await db.run(`
            CREATE TABLE IF NOT EXISTS users (
                email TEXT PRIMARY KEY,
                password TEXT,
                level INTEGER
            );
        `);
        
        await db.run(`
            CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                img TEXT NOT NULL,
                titulo TEXT NOT NULL,
                resumo TEXT NOT NULL,
                conteudo TEXT NOT NULL
            );
        `);
        console.log("Tabelas criadas.")
    } catch (error) {
        console.error("Erro ao criar tabelas: ", error);
    }

}

criarTabelas()