document.addEventListener("DOMContentLoaded", main); 

let postagens = [];

async function main() {
    try {
        const response = await fetch(`http://localhost/api/postagens?_=${new Date().getTime()}`);
        if (!response.ok) {
            throw new Error("Erro ao buscar postagens");
        }

        const dado = await response.json();
        console.log(dado);
        const ultimasPostagens = dado.sort((a, b) => Number(b.id) - Number(a.id)).slice(0, 2);  // ordena em ordem decrescente e pega as 2 primeiras
        console.log(ultimasPostagens);  // exibe as últimas postagens no console

        // Agora renderiza as últimas postagens
        renderizarPostagens(ultimasPostagens);
    } catch (error) {
        console.log("Erro ao carregar postagens: ", error);
    }
}

function renderizarPostagens(postagens) {
    const postagensContainer = document.getElementById("posts-container");

    postagensContainer.innerHTML = "";

    // Verifica se a container existe para evitar erros
    if (!postagensContainer) {
        console.error("Container de postagens não encontrado!");
        return;
    }

    postagens.forEach(post => {
        const article = document.createElement("article");
        article.classList.add("posts");

        if (post.img) {
            article.style.backgroundImage = `url('${post.img}')`;
            article.style.backgroundSize = "cover";
            article.style.backgroundPosition = "center";
        } else {
            console.warn(`Imagem não encontrada para o post ${post.id}`);
        }
        
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

async function deletarPostagem(id) {
    try {
        const response = await fetch(`http://localhost/api/postagens/${id}`, { method: "DELETE" });
        if (!response.ok) {
            throw new Error("Erro ao deletar postagem");
        }
        console.log("Postagem deletada com sucesso!");

        // Recarrega as postagens para refletir a mudança
        main();
    } catch (error) {
        console.error("Erro ao excluir postagem:", error);
    }
}
    
  

