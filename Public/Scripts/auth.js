document.addEventListener("DOMContentLoaded", () => {
    // Criação do modal login
    const modalElementLogin = `
<dialog id="dialog-login">
    <div class="form-modal-ls">
        <button id="close-login" class="close"><img src="../Assets/close.png" alt=""></button>
        <h3>Log in</h3>

        <form id="form-login">
            <input id="form-login-email" type="email" placeholder="Email" required>
            <input id="form-login-password" type="password" placeholder="Senha" required>
            <p id="form-login-message" class="forms-message"></p>
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

        <form id="form-signin">
            <input id="form-signin-email" type="email" placeholder="Email" required>
            <input id="form-signin-password" type="password" placeholder="Senha" required>
            <p id="form-signin-message" class="forms-message"></p>
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
    document.querySelector('#form-signin').addEventListener('submit', async function (event) {
        event.preventDefault()

        const email = document.querySelector('#form-signin-email').value
        const password = document.querySelector('#form-signin-password').value
        const message = document.querySelector('#form-signin-message')

        try {
            const response = await fetch('http://localhost:80/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            const data = await response.json()
            messageColor(message, response.status)
            message.textContent = data.message
        } catch (error) {
            messageColor(message, 500)
            message.textContent = 'Erro não esperado ao registrar.'
        }
    })

    // Lógica de login
    document.querySelector('#form-login').addEventListener('submit', async function (event) {
        event.preventDefault()

        const email = document.querySelector('#form-login-email').value
        const password = document.querySelector('#form-login-password').value
        const message = document.querySelector('#form-login-message')

        try {
            const response = await fetch('http://localhost:80/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            const data = await response.json()
            
            if (response.ok) {
                localStorage.setItem('token', data.token)
                modalLogin.close()
            }
            
            messageColor(message, response.status)
            message.textContent = data.message

        } catch (error) {
            messageColor(message, 500)
            message.textContent = 'Erro não esperado ao logar.'
        }
    })

    function messageColor(element, statusCode) {
        let color = ""

        if (statusCode >= 200 && statusCode < 300) {
            element.style.color = 'green'
        } else if (statusCode >= 400) {
            element.style.color = 'red'
        }
    }

});