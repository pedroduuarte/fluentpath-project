import { Router } from "express"
import { db } from "../Database/db.js"

async function getPosts (req, res) {
    try {
        const posts = await db.all("SELECT * FROM posts"); // Pegando os posts
        return res.status(200).json(posts); // Retornando os posts como JSON
    } catch (error) {
        console.error("Erro ao buscar postagens:", error);
        return res.status(500).json({ error: "Erro ao buscar postagens." });
    }
}

async function getPostById(req, res) {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({error: "ID inválido."});
        }
        const post = await db.get("SELECT * FROM posts WHERE id = ?", [id]);

        if (!post) {
            return res.status(404).json({error: "Post não encontrado."});
        }

        return res.status(200).json(post);
    } catch (error) {
        console.error("Erro ao buscar postagem: ", error);
        return res.status(500).json({error: "Erro ao buscar postagem."});
    }
}

export {
    getPosts,
    getPostById
}

