import bcrypt from 'bcrypt';
import { db } from "../Database/db.js";

async function register(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios.' })
    }

    try {
        let userExists = await db.all(`
            SELECT email
            FROM users
            WHERE email = ?
            `, [email]
        )
        console.log('Retorno do back: ' + userExists)
        if (userExists[0] === undefined) {
            const salt = 12
            const encryptedPassword = bcrypt.hash(password, salt)

            db.run(`
                INSERT INTO users (email, senha, nivel)
                VALUES (?, ?, 1)
                `, [email, encryptedPassword]
            )
            return res.status(201).json({ mensagem: 'Usuário registrado com sucesso.' })
        } else {
            return res.status(500).json({ mensagem: 'Email já foi cadastrado.' })
        }
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro ao registrar.' })
    }
}

export { register }