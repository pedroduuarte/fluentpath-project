document.addEventListener("DOMContentLoaded", () => {
    const postagens = [
        {
            id: "10001",
            titulo: "Contratações de profissionais falantes de inglês cresce em 2024.",
            resumo: "A fluência na língua inglesa está se tornando um dos mais valiosos diferenciais para profissionais no Brasil, especialmente aqueles em estágios iniciais de suas carreiras.",
            link: "Pages/Postagem10001.html",
            imagem: "Assets/index/posts/street.jpg"
        },
        {
            id: "10002",
            titulo: "O mercado de desenvolvimento de software anda mais seleto e cada vez mais exige proficiência em inglês.",
            resumo: "No dinâmico e competitivo universo do desenvolvimento de software, a proficiência em inglês deixou de ser apenas um diferencial e tornou-se uma exigência fundamental.",
            link: "Pages/Postagem10002.html",
            imagem: "Assets/index/posts/computer.png"
        }
    ];

    const postagensContainer = document.getElementById("posts-container");

    postagens.forEach(post => {
        const article = document.createElement("article");
        article.classList.add("posts");
        article.style.background = `url(${post.imagem}) no-repeat center`;
        article.style.backgroundSize = "cover";

        const link = document.createElement("a");
        link.href = post.link;

        const div = document.createElement("div");

        const titulo = document.createElement("h2")
        titulo.textContent = post.titulo;

        const resumo = document.createElement("p")
        resumo.textContent = post.resumo;

        div.appendChild(titulo)
        div.appendChild(resumo)
        link.appendChild(div)
        article.appendChild(link)
        postagensContainer.appendChild(article);
    });
});