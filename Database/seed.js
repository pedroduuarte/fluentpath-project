import { db } from "./db.js";

const users = [
    {
        email: "daniel@email.com",
        senha: "teste",
        nivel: 1
    }
]

const postagens = [
    {
        id: 1001,
        img: "../Assets/index/posts/street.jpg",
        titulo: "Contratações de profissionais falantes de inglês cresce em 2024.",
        resumo: "A fluência na língua inglesa está se tornando um dos mais valiosos diferenciais para profissionais no Brasil, especialmente aqueles em estágios iniciais de suas carreiras.",
        link: "Pages/Postagem10001.html"
    },
    {
        id: 1002,
        img: "../Assets/index/posts/computer.png",
        titulo:  "O mercado de desenvolvimento de software anda mais seleto e cada vez mais exige proficiência em inglês.",
        resumo: "No dinâmico e competitivo universo do desenvolvimento de software, a proficiência em inglês deixou de ser apenas um diferencial e tornou-se uma exigência fundamental.",
        link: "Pages/Postagem10002.html"
    }
];

for (let i = 0; i < users.length; i++) {
    await db.run(`
        INSERT INTO users (email, senha, nivel)
        VALUES (?, ?, ?)`, [
            users[i].email,
            users[i].senha,
            users[i].nivel
        ]
    )
}

for (let x = 0; x < postagens.length; x++) {
    await db.run(`
        INSERT INTO posts (id, img, titulo, resumo, link)
        VALUES (?, ?, ?, ?, ?)`, [
            postagens[x].id,
            postagens[x].img,
            postagens[x].titulo,
            postagens[x].resumo,
            postagens[x].link

        ]
    )
}