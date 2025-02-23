import { Router } from 'express';
import { db } from '../Database/db.js';
import { getPosts, getPostById } from '../Controllers/posts.controller.js';
import multer from 'multer';
import { fileURLToPath } from 'url';
import path from 'path';

// Obter o diretório atual usando import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho correto para a pasta 'uploads' dentro de 'Public'
const uploadsPath = path.join(__dirname, '..', 'Public', 'uploads');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsPath); // Salva o arquivo na pasta correta
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Nome único para cada arquivo
    },
});

const upload = multer({ storage });

const postsRouter = Router();

postsRouter.get('/', getPosts);
postsRouter.get('/:id', getPostById);

postsRouter.post("/", upload.single('img'), async (req, res) => {
    try {
        const { titulo, resumo, conteudo } = req.body;
        if (!titulo || !resumo || !conteudo || !req.file) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        const imgPath = `/uploads/${req.file.filename}`; // Caminho correto da imagem

        const conteudoString = JSON.stringify(conteudo);

        const novaPostagem = await db.run(
            `INSERT INTO posts (titulo, resumo, img, conteudo) VALUES (?, ?, ?, ?)`,
            [titulo, resumo, imgPath, conteudoString]
        );

        return res.status(201).json({
            message: "Postagem criada com sucesso!",
            postagem: {
                id: novaPostagem.lastID,
                titulo,
                resumo,
                img: imgPath,
                conteudo: conteudoString,
            },
        });
    } catch (error) {
        console.error("Erro ao criar postagem", error);
        return res.status(500).json({ message: "Erro ao criar postagem", error });
    }
});

export default postsRouter;