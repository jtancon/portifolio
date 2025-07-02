document.addEventListener("DOMContentLoaded", function() {

    // Animações de Scroll
    const elementsToAnimate = document.querySelectorAll('.project-card, .timeline-item');
    if (elementsToAnimate.length > 0) {
        elementsToAnimate.forEach(el => {
            el.classList.add('fade-in-element');
        });
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });
    }

    // Sombra no Navbar ao rolar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // Lógica do Modo Escuro (Dark Mode)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // Função para aplicar o tema e trocar o ícone
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            body.classList.remove('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    };

    // Verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Adiciona o evento de clique ao botão
    themeToggle.addEventListener('click', () => {
        // Verifica qual é o tema atual e define o novo tema
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        // Aplica o novo tema
        applyTheme(newTheme);
        // Salva o novo tema no localStorage
        localStorage.setItem('theme', newTheme);
    });
});
