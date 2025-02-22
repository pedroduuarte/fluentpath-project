document.addEventListener("DOMContentLoaded", () => {
    // Criação do modal login
const modalElementLogin = `
<dialog id="dialog-login">
    <div class="form-modal-ls">
        <button id="close-login" class="close"><img src="../Assets/close.png" alt=""></button>
        <h3>Log in</h3>

        <form>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Senha" required>
            <button id="login-submit" class="modal-submit" type="submit">ENTRAR</button>
        </form>

        <button id="modal-signin-button">Registre-se</button>
    </div>
</dialog>
`
document.body.insertAdjacentHTML("beforeend", modalElementLogin);

// Lógica de abertura e fechamento do modal de login
const modalLogin = document.querySelector('#dialog-login')

const modalLoginButton = document.querySelector('#loginButton')
modalLoginButton.onclick = function () {
    modalLogin.showModal()

    const modalButtonClose = document.querySelector('#close-login')
    modalButtonClose.onclick = function () {
        modalLogin.close()
    }
}

// Criação do modal signin
const modalElementSignin = `
<dialog id="dialog-signin">
    <div class="form-modal-ls">
        <button id="close-signin" class="close"><img src="../Assets/close.png" alt=""></button>
        <h3>Sign in</h3>

        <form id="register-form">
            <input id="email" type="email" placeholder="Email" required>
            <input id="password" type="password" placeholder="Senha" required>
            <button id="signin-submit" class="modal-submit" type="submit">REGISTRAR</button>
        </form>

        <button id="modal-login-button">Logue-se</button>
    </div>
</dialog>
`
document.body.insertAdjacentHTML("beforeend", modalElementSignin);

// Lógica de abertura e fechamento do modal de signin
const modalSignin = document.querySelector('#dialog-signin')

const modalSigninButton = document.querySelector('#modal-signin-button')
modalSigninButton.onclick = function () {
    modalLogin.close()
    modalSignin.showModal()

    const modalButtonClose = document.querySelector('#close-signin')
    modalButtonClose.onclick = function () {
        modalSignin.close()
    }
}

const buttonModalLogin = document.querySelector('#modal-login-button')
buttonModalLogin.onclick = function () {
    modalSignin.close()
    modalLogin.showModal()
}


// Lógica de registro
document.querySelector('#register-form').addEventListener('submit', async function (event) {
    event.preventDefault()

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    try {
        const response = await fetch('http://localhost:80/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('Erro ao registrar.')
    }
})
});