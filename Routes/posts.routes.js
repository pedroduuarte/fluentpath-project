import { Router } from 'express'
import {db} from '../Database/db.js'
import { getPosts } from '../Controllers/posts.controller.jsf'

export const postsRouter = Router()

postsRouter.get('/api/postagens', getPosts) 

