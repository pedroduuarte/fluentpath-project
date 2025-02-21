import { Router } from "express";
import { register } from "../Controllers/auth.controller.js";

export const routerAuth = Router()

routerAuth.post('/register', register)