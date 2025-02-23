document.addEventListener("DOMContentLoaded", main); 

let postagens = [];

async function main() {
    try {
        const response = await fetch("http://localhost/api/postagens");
        if (!response.ok) {
            throw new Error("Erro ao buscar postagens");
        }

        const dado = await response.json();
        const ultimasPostagens = dado.sort((a, b) => b.id - a.id).slice(0, 2);  // ordena em ordem decrescente e pega as 2 primeiras
        console.log(ultimasPostagens);  // exibe as últimas postagens no console

        // Agora renderiza as últimas postagens
        renderizarPostagens(ultimasPostagens);
    } catch (error) {
        console.log("Erro ao carregar postagens: ", error);
    }
}

function renderizarPostagens(postagens) {
    const postagensContainer = document.getElementById("posts-container");

    // Verifica se a container existe para evitar erros
    if (!postagensContainer) {
        console.error("Container de postagens não encontrado!");
        return;
    }

    postagens.forEach(post => {
        const article = document.createElement("article");
        article.classList.add("posts");
        article.style.background = `url(${post.img}) no-repeat center`; 
        article.style.backgroundSize = "cover";

        const link = document.createElement("a");
        link.href = `Pages/Postagem.html?id=${post.id}`

        const div = document.createElement("div");

        const titulo = document.createElement("h2");
        titulo.textContent = post.titulo;

        const resumo = document.createElement("p");
        resumo.textContent = post.resumo;

        div.appendChild(titulo);
        div.appendChild(resumo);
        link.appendChild(div);
        article.appendChild(link);
        postagensContainer.appendChild(article);
    });
}

