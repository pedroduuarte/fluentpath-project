console.log("Script postagens.js carregado!");
window.addEventListener("load", main);

let postagens = [];

async function main() {
    try {
        const response = await fetch("http://localhost/api/postagens");
        if (!response.ok) {
            throw new Error("Erro ao buscar postagens");
        }
        const dado = await response.json();
        console.log("Resposta da API:", dado);
        postagens = dado;
        renderizarPostagens();

        console.log("Renderizando postagens...");
    } catch (error) {
        console.error("Erro ao carregar postagens:", error);
    }
}

function renderizarPostagens() {
    const postagensContainer = document.getElementsByClassName("postagens-container")[0];

    // Limpa o container antes de renderizar
    postagensContainer.innerHTML = "";

    for (let x = 0; x < postagens.length; x++) {
        const article = document.createElement("article");
        article.classList.add("posts");

        const img = document.createElement("img");
        const link = document.createElement("a");
        const div = document.createElement("div");
        const titulo = document.createElement("h2");
        const resumo = document.createElement("p");

        img.src = postagens[x].img;
        img.alt = `Imagem da postagem ${x + 1}`;
        link.href = postagens[x].link;
        link.target = "_blank"; // Abre o link em outra aba
        titulo.textContent = postagens[x].titulo;
        resumo.textContent = postagens[x].resumo;

        div.appendChild(titulo);
        div.appendChild(resumo);
        link.appendChild(div);
        article.appendChild(link);
        article.appendChild(img);
        postagensContainer.appendChild(article);
    }
}