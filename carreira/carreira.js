/**
 * Adiciona uma animação de "fade in" às seções da página de carreira
 * quando elas se tornam visíveis na tela.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as seções de conteúdo que devem ser animadas
    const sections = document.querySelectorAll('.content-section');

    if (sections.length > 0) {
        // Adiciona a classe de preparação para a animação
        sections.forEach(section => {
            section.classList.add('fade-in-section');
        });

        // Configura o Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Se a seção está na área visível
                if (entry.isIntersecting) {
                    // Adiciona a classe que dispara a animação
                    entry.target.classList.add('is-visible');
                    // Para de observar a seção para otimizar
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15 // A animação começa quando 15% da seção está visível
        });

        // Inicia a observação para cada seção
        sections.forEach(section => {
            observer.observe(section);
        });
    }
});
