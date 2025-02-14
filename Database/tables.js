import { db } from "./db.js";

async function criarTabelas() {
    await db.run(`
        CREATE TABLE IF NOT EXISTS users (
            email TEXT PRIMARY KEY,
            senha TEXT,
            nivel INTEGER
        );
        `
    ) 
}

criarTabelas().then(() => console.log('Tabelas criadas.'))