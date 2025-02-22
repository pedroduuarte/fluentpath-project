import { Router } from "express"
import { signin } from "../Controllers/auth.controller.js"
import { login } from "../Controllers/auth.controller.js"

export const routerAuth = Router()

routerAuth.post('/signin', signin)
routerAuth.post('/login', login)