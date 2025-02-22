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
});
