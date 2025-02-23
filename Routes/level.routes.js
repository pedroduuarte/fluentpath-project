import { Router } from "express"
import { setLevel } from "../Controllers/level.controller.js"

export const routerLevel = Router()

routerLevel.post('/setLevel', setLevel)