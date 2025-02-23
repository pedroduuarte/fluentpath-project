document.addEventListener("DOMContentLoaded", () => {
    contentRender()

    const buttons = document.querySelectorAll('.curso-container')
    const token = localStorage.getItem('token')
    const payload = JSON.parse(atob(token.split('.')[1]))

    for (let i = 0; i < payload.level; i++) {
        buttons[i].addEventListener('click', async () => {
            try {
                const response = await setUserLevel(payload.email, (i + 2))
    
                const data = await response.json()
                console.log(data.message)
            } catch (error) {
                console.log('Erro não esperado ao definir nível de usuário.')
            }
        })
    }   

    async function setUserLevel(email, level) {
        const response = await fetch('http://localhost:80/setLevel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, level})
        })
        return response
    }

    function contentRender() {
        const coursesContainer = document.querySelector('#cursos-container')

        const userLevel = getUserLevel()
        if (userLevel === null) {
            const loginMessage = `<h2>Logue para acessar o conteúdo! :D</h2>`
            coursesContainer.innerHTML = loginMessage
        } else {
            coursesContainer.innerHTML = ""
            let content;
            if (userLevel >= 1) {
                content = `
            <div class="curso-container">
                <a href="https://www.youtube.com/watch?v=S45kHeWnT0M&list=PLxJY3neuatlrhpLKDWOYQgQ3XPBWV-D_K" target="_blank">A1</a>
            </div>
            `
                coursesContainer.innerHTML += content
            }
            if (userLevel >= 2) {
                content = `
            <div class="curso-container">
                <a href="https://udemy.com/course/domine-o-ingles-rapido/" target="_blank">A2</a>
            </div>
            `
                coursesContainer.innerHTML += content
            }
            if (userLevel >= 3) {
                content = `
            <div class="curso-container">
                <a href="https://www.youtube.com/watch?v=Qwv2TnDZVzQ&list=PLhNRdHEdUQeyIjNRrwWnMU_iph8amkaJg" target="blank">B1</a>
            </div>
            `
                coursesContainer.innerHTML += content
            }
            if (userLevel >= 4) {
                content = `
            <div class="curso-container">
                <a href="https://www.youtube.com/watch?v=nueVikIswpE&list=PLQ_5ierOacb-xO5Idmlf3hx86zqaenFbL" target="_blank">B2</a>
            </div>
            `
                coursesContainer.innerHTML += content
            }
            if (userLevel >= 5) {
                content = `
            <div class="curso-container">
                <a href="https://www.youtube.com/watch?v=P2pSnGEcssQ&list=PLRgsws9rC3IW72BgJVfxU2j1cVTgTW2JM" target="blank">C1</a>
            </div>
            `
                coursesContainer.innerHTML += content
            }
            if (userLevel >= 6) {
                content = `
            <div class="curso-container">
                <a href="https://www.youtube.com/watch?v=P2pSnGEcssQ&list=PLRgsws9rC3IW72BgJVfxU2j1cVTgTW2JM" target="blank">C2</a>
            </div>
            `
                coursesContainer.innerHTML += content
            }
        }
    }

    function getUserLevel() {
        const token = localStorage.getItem('token')
        if (token === null) {
            return null
        }

        const payload = JSON.parse(atob(token.split('.')[1]))
        return payload.level
    }
})