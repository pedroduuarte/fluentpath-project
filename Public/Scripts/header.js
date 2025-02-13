document.addEventListener("DOMContentLoaded", () => {
    // Troca a cor de fundo do header ao scrollar
    window.addEventListener('scroll', () => {
        const headerElement = document.querySelector('header')
        if (window.scrollY > 0) {
            headerElement.style.backgroundColor = 'rgba(9, 9, 9, 0.95)'
        } else {
            headerElement.style.backgroundColor = 'transparent'
        }
    })

    // Criação do modal
    const modalElement = `
    <dialog>
        <div id="form-login">
            <button id="close"><img src="../Assets/close.png" alt=""></button>
            <h3>Log in</h3>
    
            <form action="">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Senha">
            </form>
    
            <button id="login-submit">ENTRAR</button>
            <button id="signin">Registre-se</button>
        </div>
    </dialog>
    `
    document.body.insertAdjacentHTML("beforeend", modalElement);

    // Lógica de abertura e fechamento do modal de login
    const modalLogin = document.querySelector('dialog')

    const buttonLogin = document.querySelector('#loginButton')
    buttonLogin.onclick = function () {
        modalLogin.showModal()
    }

    const buttonClose = document.querySelector('#close')
    buttonClose.onclick = function () {
        modalLogin.close()
    }
});
