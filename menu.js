let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('abrir-menu'); // Toggle para adicionar ou remover a classe
    overlay.style.display = 'block'; // Mostra o overlay ao abrir o menu
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu'); // Fecha o menu ao clicar no overlay
    overlay.style.display = 'none'; // Esconde o overlay ao fechar o menu
});
