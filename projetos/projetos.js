/**
 * Adiciona uma animação de "fade in" às seções de projeto
 * quando elas se tornam visíveis na tela.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as seções de projeto que devem ser animadas
    const projectSections = document.querySelectorAll('.project-detail');

    if (projectSections.length > 0) {
        // Configura o Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Se a seção está na área visível
                if (entry.isIntersecting) {
                    // Adiciona a classe que dispara a animação CSS
                    entry.target.classList.add('visible');
                    // Para de observar a seção para otimizar
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // A animação começa quando 10% da seção está visível
        });

        // Inicia a observação para cada seção de projeto
        projectSections.forEach(section => {
            observer.observe(section);
        });
    }
});
