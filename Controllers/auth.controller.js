import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { db } from "../Database/db.js"

async function signin(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios.' })
    }

    try {
        const userExists = await db.get(`
            SELECT email
            FROM users
            WHERE email = ?
            `, [email]
        )
        if (!userExists) {
            const encryptedPassword = bcrypt.hash(password, 12)

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
export { signin }

async function login(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ mensagem: 'Email e senha são obrigatórios.' })
    }

    try {
        const user = await db.get(`
            SELECT email, senha
            FROM users
            WHERE email = ?
            `, [email]
        )
        // * Decodificar a senha
        if (user) { // * Comparar as senhas
            const validPassword = bcrypt.compare(password, user.senha)
            
            if (validPassword) {
                // * Token de login
                const userToken = jwt.sign(
                    { email: user.email },
                    'istoDeveriaSerUmaVariavelDeAmbienteTrazidoDeForaDoCodigoMasComoÉSoUmProjetodaFaculdadeAchoQueVouSerUmPoucoMaisPreguiçoso',
                    { expiresIn: '1h' }
                )
                return res.status(200).json({ mensagem: 'Você está logado!', token: `${userToken}` });
            }

            return res.status(400).json({ mensagem: 'Revise email e senha.' })
        } else {
            return res.status(400).json({ mensagem: 'Revise email e senha.' })
        }


    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro ao logar.' })
    } // * Ajustar as mensagens
}
export { login }