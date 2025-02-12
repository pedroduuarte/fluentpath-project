import express from "express"

const app = express()

app.use(express.static('Public'))
app.use(express.json())

app.listen(80, () => {
    console.log('Servidor iniciado na porta 80.')
})