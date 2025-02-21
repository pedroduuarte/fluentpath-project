import { Router } from 'express'
import {db} from '../Database/db.js'
import { getPosts } from '../Controllers/posts.controller.js'

const postsRouter = Router()


postsRouter.get('/', getPosts) 

export default postsRouter;

