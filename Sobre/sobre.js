// Aguarda o carregamento completo do DOM antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para o Menu Mobile ---

    // Seleciona os elementos do menu mobile.
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');

    // Verifica se o botão do menu existe na página antes de adicionar o listener.
    if (mobileMenuButton) {
        // Adiciona um ouvinte de evento de clique ao botão do menu mobile.
        mobileMenuButton.addEventListener('click', () => {
            // Alterna a classe 'hidden' no menu mobile para exibi-lo ou escondê-lo.
            mobileMenu.classList.toggle('hidden');
        });
    }
});
