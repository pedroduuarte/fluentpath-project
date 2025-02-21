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

export {
    getPosts
}

