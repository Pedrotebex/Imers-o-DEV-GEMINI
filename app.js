// Função de busca
document.querySelector('button').addEventListener('click', function() {
    // Captura o valor do input de pesquisa
    const searchTerm = document.querySelector('input[type="text"]').value.toLowerCase();

    // Seleciona todos os cards de personagens
    const cards = document.querySelectorAll('.card-personagem');

    // Itera sobre os cards e verifica se o texto do nome corresponde ao termo de pesquisa
    cards.forEach(card => {
        const NomePersonagem = card.querySelector('h2').textContent.toLowerCase();
        
        // Se o nome do personagem incluir o termo de pesquisa, mostra o card, senão, oculta
        if (NomePersonagem.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});