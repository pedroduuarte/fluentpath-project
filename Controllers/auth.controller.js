import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { db } from "../Database/db.js"

async function signin(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'Email e senha são obrigatórios.' })
    }

    try {
        const user = await db.get(`
            SELECT email
            FROM users
            WHERE email = ?
            `, [email]
        )

        if (!user) {
            const salt = await bcrypt.genSalt(12);
            const encryptedPassword = await bcrypt.hash(password, salt)

            db.run(`
                INSERT INTO users (email, password, level)
                VALUES (?, ?, 1)
                `, [email, encryptedPassword]
            )
            return res.status(201).json({ message: 'Usuário registrado com sucesso.' })

        } else {
            return res.status(409).json({ message: 'Email já foi cadastrado.' })
        }

    } catch (error) {
        return res.status(500).json({ message: 'Erro ao registrar.' })
    }
}
export { signin }

async function login(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'Email e senha são obrigatórios.' })
    }

    try {
        const user = await db.get(`
            SELECT email, password, level
            FROM users
            WHERE email = ?
            `, [email]
        )

        if (!user) {
            return res.status(400).json({ message: 'Revise email e senha.' })
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if (validPassword) {
            const userToken = jwt.sign(
                { email: user.email, level: user.level },
                'istoDeveriaSerUmaVariavelDeAmbienteTrazidoDeForaDoCodigoMasComoÉSoUmProjetodaFaculdadeAchoQueVouSerUmPoucoMaisPreguiçoso',
                { expiresIn: '1h' }
            )

            return res.status(200).json({ message: 'Você está logado!', token: `${userToken}` });
        }

        return res.status(400).json({ message: 'Revise a senha.' })

    } catch (error) {
        return res.status(500).json({ message: 'Erro ao logar.' })
    }
}
export { login }