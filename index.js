import express from "express"
import postsRouter from "./Routes/posts.routes.js"

const app = express()

app.use(express.static('Public'))
app.use(express.json())
app.use("/api/postagens", postsRouter);



app.listen(80, () => {
    console.log('Servidor iniciado na porta 80.')
})