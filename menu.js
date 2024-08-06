document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-mobile-button');
    const menuNav = document.querySelector('.menu-mobile-nav');

    menuButton.addEventListener('click', function() {
        menuNav.classList.toggle('show');
    });

    // Adiciona event listener aos links do menu para fechar o menu ao clicar
    const menuLinks = document.querySelectorAll('.menu-mobile-nav a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menuNav.classList.remove('show');
            closeNav();
        });
    });
});

// Ajusta o menu conforme o tamanho da tela
function ajustarMenu() {
    var menu = document.querySelector('.menu-desktop');
    if (window.innerWidth <= 768) {
        menu.style.display = 'none'; // Oculta o menu em telas pequenas
    } else {
        menu.style.display = 'flex'; // Exibe o menu em telas grandes
    }
}

// Chama a função ao carregar a página e ao redimensionar a janela
window.addEventListener('load', ajustarMenu);
window.addEventListener('resize', ajustarMenu);

// Funções para abrir e fechar a navegação lateral
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
