import { db } from "../Database/db.js"

async function setLevel(req, res) {

    const { email, level } = req.body

    try {
        const user = await db.get(`
                SELECT level
                FROM users
                WHERE email = ?
                `, [email]
        )

        if (!user) {
            return res.status(400).json({ message: 'Usuário inválido.' })
        }
        
        if (level > user.level && user.level < 6) {
            await db.run(`
                UPDATE users
                SET level = ?
                WHERE email = ?
                `, [level, email]
            )
            return res.status(200).json( {message: 'Nível de usuário atualizado. Mudanças poderão ser visualizadas após novo login.'} )
        } else {
            return res.status(400).json({ message: 'Nível equivalente.' })
        }
    } catch (error) {
        return res.status(500).json({ message: 'Erro inesperado ao definir nível de usuário.' })
    }
}
export { setLevel }