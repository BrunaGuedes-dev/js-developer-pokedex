pokemonList.addEventListener('click', function(event) {
    const li = event.target.closest('li.pokemon');
    if (li) {
        const number = li.getAttribute('data-number');
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
            .then(response => response.json())
            .then(data => {
              
                sessionStorage.setItem('pokemonDetails', JSON.stringify(data));
                
                console.log('Dados do Pokémon guardados na sessão. Redirecionando...');

                window.location.href = 'descricao.html';
            })
            .catch(error => console.error('Falha ao buscar detalhes:', error));
    }
});