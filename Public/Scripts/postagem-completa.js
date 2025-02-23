window.addEventListener("load", main);

async function main() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    if (!id) {
        alert("Postagem não encontrada.");
        return;
    }

    try {
        const response = await fetch(`http://localhost/api/postagens/${id}`);
        if (!response.ok) {
            throw new Error("Erro ao buscar postagem");
        }

        const postagem = await response.json();
        renderizarPostagens(postagem);
    } catch (error) {
        console.log("Erro ao carregar postagem: ", error);
    }
}

function renderizarPostagens(postagem) {
    const article = document.getElementById("post-article");

    const titulo = document.createElement("h1");
    titulo.textContent = postagem.titulo;
    article.appendChild(titulo);

    let conteudo;
    try {
        conteudo = JSON.parse(postagem.conteudo);
    } catch (error) {
        console.error("Erro ao converter conteúdo da postagem: ", error);
        return;
    }

    conteudo.forEach(elemento => {
        if (!elemento.tipo || !elemento.texto) {
            console.warn("Elemento inválido encontrado: ", elemento);
        }
        const novoElemento = document.createElement(elemento.tipo);
        novoElemento.textContent = elemento.texto;
        article.appendChild(novoElemento); 
    });
}

