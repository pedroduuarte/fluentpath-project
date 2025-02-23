import { Router } from "express"
import { db } from "../Database/db.js"


function isIDCadastrado(id) {
    for (let x = 0; x < posts.length; x++) {
        if (posts[x].id === id) {
            return true;
        }
    }
    return false;
}

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

async function getUltimasPostagens(req, res) {
    try {
        console.log("Buscando últimas postagens...");

        const postagens = await new Promise((resolve, reject) => {
            db.all(
                "SELECT * FROM posts ORDER BY id DESC LIMIT 2",
                (err, rows) => {
                    if (err) {
                        console.error("Erro ao buscar postagens: ", err);
                        reject(err);
                    } else {
                        console.log("Postagens encontradas:", rows);
                        resolve(rows);
                    }
                }
            );
        });

        res.status(200).json(postagens);
    } catch (error) {
        console.error("Erro ao buscar postagens: ", error);
        res.status(500).json({ message: "Erro no servidor" });
    }
}

async function postNewPost(req, res) {
    try {
        const { titulo, resumo, conteudo } = req.body;

        if (!titulo || !resumo || !conteudo || !req.file) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        const imgPath = `/uploads/${req.file.filename}`;

        const novaPostagem = await db.run(
            `INSERT INTO posts (titulo, resumo, img, conteudo) VALUES (?, ?, ?, ?)`,
            [titulo, resumo, imgPath, conteudo]
        );

        return res.status(201).json({
            message: "Postagem criada com sucesso!",
            postagem: {
                id: novaPostagem.lastID,
                titulo,
                resumo,
                img: imgPath,
                conteudo,
            },
        });
    } catch (error) {
        console.error("Erro ao criar postagem:", error);
        return res.status(500).json({ message: "Erro ao criar postagem", error });
    }
}

async function deletarPost(req, res) {
    const { id } = req.params;
    try {
        const resultado = await db.run('DELETE FROM posts WHERE id = ?', [id]);
        if (resultado.affectedRows === 0) {
            return res.status(404).json({message: "Postagem não encontrada"});
        }
        res.status(200).json({message: "Postagem deletada com sucesso"});
    } catch (error) {
        console.error("Erro ao deletar postagem: ", error);
        res.status(500).json({message: "Erro no servidor"});
    }
};

async function atualizarPost(req, res) {
    const id = req.params.id;
    const { titulo } = req.body; 

    if (!titulo) {
        return res.status(400).json({ message: "Título é obrigatório" });
    }

    try {
        // Verificar se o ID existe antes de atualizar
        const postagem = await new Promise((resolve, reject) => {
            db.get("SELECT * FROM posts WHERE id = ?", [id], (err, row) => {
                if (err) reject(err);
                else resolve(row);
            });
        });

        if (!postagem) {
            return res.status(404).json({ message: "Postagem não encontrada" });
        }

        // Atualizar a postagem no banco
        await new Promise((resolve, reject) => {
            db.run(
                "UPDATE posts SET titulo = ? WHERE id = ?",
                [titulo, id],
                function (err) {
                    if (err) reject(err);
                    else resolve(this);
                }
            );
        });

        res.status(200).json({ message: "Postagem atualizada com sucesso!" });
    } catch (error) {
        console.error("Erro ao atualizar postagem:", error);
        res.status(500).json({ message: "Erro no servidor" });
    }
}


export {
    getPosts,
    getPostById,
    getUltimasPostagens,
    postNewPost,
    deletarPost,
    atualizarPost
}

