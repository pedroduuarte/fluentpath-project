import { Router } from 'express'
import {db} from '../Database/db.js'
import { getPosts, getPostById } from '../Controllers/posts.controller.js'

const postsRouter = Router()


postsRouter.get('/', getPosts) 
postsRouter.get('/:id', getPostById);

export default postsRouter;

