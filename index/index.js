/**
 * Este script adiciona interatividade e animações ao portfólio.
 * - Animação de "fade in" para os cartões de projeto e itens da linha do tempo ao rolar a página.
 * - Adiciona uma sombra ao menu de navegação quando o usuário rola para baixo.
 */
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona todos os elementos que devem ser animados
    const elementsToAnimate = document.querySelectorAll('.project-card, .timeline-item');

    // Verifica se existem elementos para animar antes de prosseguir
    if (elementsToAnimate.length > 0) {
        // Adiciona a classe inicial para preparar os elementos para a animação
        elementsToAnimate.forEach(el => {
            el.classList.add('fade-in-element');
        });

        // Cria um observador de interseção para detectar quando os elementos entram na tela
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Se o elemento estiver visível na tela
                if (entry.isIntersecting) {
                    // Adiciona a classe 'visible' para acionar a animação CSS
                    entry.target.classList.add('visible');
                    // Opcional: para de observar o elemento depois que ele se torna visível para otimizar o desempenho
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // A animação é acionada quando pelo menos 10% do elemento está visível
        });

        // Inicia a observação para cada elemento selecionado
        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    }

    // Efeito de sombra no menu de navegação ao rolar a página
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            // Se o scroll vertical for maior que 50 pixels
            if (window.scrollY > 50) {
                // Adiciona uma sombra sutil para destacar o menu
                navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            } else {
                // Remove a sombra quando o usuário está no topo da página
                navbar.style.boxShadow = 'none';
            }
        });
    }
});
