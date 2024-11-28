// Função para mostrar seções
function mostrarSecao(secaoId) {
    const secoes = document.querySelectorAll('.pagina');
    secoes.forEach(secao => {
        secao.style.display = 'none';
    });

    const secaoAtiva = document.getElementById(secaoId);
    secaoAtiva.style.display = 'block';
}

// Links do menu
document.getElementById('link-sobre').addEventListener('click', e => {
    e.preventDefault();
    mostrarSecao('sobre');
});

document.getElementById('link-Fotos').addEventListener('click', e => {
    e.preventDefault();
    mostrarSecao('Fotos');
});

document.getElementById('link-videos').addEventListener('click', e => {
    e.preventDefault();
    mostrarSecao('videos');
});

// Botão Explore a Fotos
document.getElementById('explore-Fotos').addEventListener('click', e => {
    e.preventDefault();
    mostrarSecao('Fotos');
});

// Exibir a seção Sobre por padrão
document.addEventListener('DOMContentLoaded', () => {
    mostrarSecao('sobre');
});
