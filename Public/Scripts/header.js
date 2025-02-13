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

    // Criação do modal login
    const modalElementLogin = `
    <dialog id="dialog-login">
        <div class="form-modal-ls">
            <button id="close-login" class="close"><img src="../Assets/close.png" alt=""></button>
            <h3>Log in</h3>
    
            <form action="">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Senha">
            </form>
    
            <button id="login-submit" class="modal-submit">ENTRAR</button>
            <button id="signin-button">Registre-se</button>
        </div>
    </dialog>
    `
    document.body.insertAdjacentHTML("beforeend", modalElementLogin);

    // Lógica de abertura e fechamento do modal de login
    const modalLogin = document.querySelector('#dialog-login')

    const buttonLogin = document.querySelector('#loginButton')
    buttonLogin.onclick = function () {
        modalLogin.showModal()

        const buttonClose = document.querySelector('#close-login')
        buttonClose.onclick = function () {
            modalLogin.close()
        }
    }

    // Criação do modal signin
    const modalElementSignin = `
    <dialog id="dialog-signin">
        <div class="form-modal-ls">
            <button id="close-signin" class="close"><img src="../Assets/close.png" alt=""></button>
            <h3>Sign in</h3>
    
            <form action="">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Senha">
            </form>
    
            <button id="signin-submit" class="modal-submit">REGISTRAR</button>
        </div>
    </dialog>
    `
    document.body.insertAdjacentHTML("beforeend", modalElementSignin);

    // Lógica de abertura e fechamento do modal de signin
    const modalSignin = document.querySelector('#dialog-signin')

    const buttonSignin = document.querySelector('#signin-button')
    buttonSignin.onclick = function () {
        modalLogin.close()
        modalSignin.showModal()

        const buttonClose = document.querySelector('#close-signin')
        buttonClose.onclick = function () {
            modalSignin.close()
        }
    }   
});
