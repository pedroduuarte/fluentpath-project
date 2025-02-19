window.addEventListener("load", main);


const postagem = [
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

function main() {
    const postagens = document.getElementsByClassName("postagens-container")[0];

    for(let x = 0; x < postagem.length; x++) {
        const article = document.createElement("article");
        article.classList.add("posts");
        const img = document.createElement("img");
        const link = document.createElement("a");
        const div = document.createElement("div");
        const titulo = document.createElement("h2");
        const resumo = document.createElement("p");
    
        article.classList.add("posts");
        img.src = postagem[x].img;
        link.href = postagem[x].link;
        titulo.textContent = postagem[x].titulo;
        resumo.textContent = postagem[x].resumo;
    
        div.appendChild(titulo);
        div.appendChild(resumo);
        link.appendChild(div);
        article.appendChild(link);
        article.appendChild(img);
        postagens.appendChild(article);

    }

}


