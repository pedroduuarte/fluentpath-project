import { db } from "./db.js";

const users = [
    {
        email: "daniel@email.com",
        senha: "teste",
        nivel: 1
    }
]

for (let i = 0; i < users.length; i++) {
    await db.run(`
        INSERT INTO users (email, senha, nivel)
        VALUES (?, ?, ?)`, [
            users[i].email,
            users[i].senha,
            users[i].nivel
        ]
    )
}