import { Router } from 'express';
import { getPosts, getPostById, postNewPost, deletarPost, atualizarPost} from '../Controllers/posts.controller.js';
import multer from 'multer';
import { fileURLToPath } from 'url';
import path from 'path';

const postsRouter = Router();

// Configuração do Multer
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsPath = path.join(__dirname, '..', 'Public', 'uploads');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage });

postsRouter.get('/', getPosts);
postsRouter.get('/:id', getPostById);
postsRouter.post("/", upload.single('img'), postNewPost);
postsRouter.delete("/:id", deletarPost);
postsRouter.put("/:id", atualizarPost);

export default postsRouter;