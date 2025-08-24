document.addEventListener('DOMContentLoaded', () => {
    const pokemonDataString = sessionStorage.getItem('pokemonDetails');

    if (pokemonDataString) {
        const pokemonData = JSON.parse(pokemonDataString);
        
        const detailContainerPrimeiro = document.getElementById('pokemon-container');
        const mainType = pokemonData.types[0].type.name;
        
        detailContainerPrimeiro.innerHTML = `
            <article class="pokemon-detail ${mainType}">
            <a href="https://brunaguedes-dev.github.io/js-developer-pokedex/" alt="voltar" class="pagination">
                &#8592
            </a> 
                <h1 class="name">${pokemonData.name}</h1> 
                <span class="number">(#${pokemonData.id})</span>
                <img src="${pokemonData.sprites.other['official-artwork'].front_default}" alt="${pokemonData.name}">
                
                <div class="info">
                    <h2 class="h2">Tipos</h2>
                    <ol class="types">
                        ${pokemonData.types.map(typeInfo => `<li class="type ${typeInfo.type.name}">${typeInfo.type.name}</li>`).join('')}
                    </ol>
            </article>   
        
            <section id="pokemon-detail-container">
                 <div class="tabs-container">
            <ul class="tabs">
                <li class="tab active" data-tab="about">About</li>
                <li class="tab" data-tab="base-stats">Base Stats</li>
                
            </ul>

            <div class="tab-content">
                <div class="content-pane active" id="about">
                    <p><strong>Species:</strong> ${pokemonData.species.name}</p>
                    <p><strong>Height:</strong> ${pokemonData.height / 10} m</p>
                    <p><strong>Weight:</strong> ${pokemonData.weight / 10} kg</p>
                    <p><strong>Abilities:</strong> ${pokemonData.abilities.map(a => a.ability.name).join(', ')}</p>
                </div>

                <div class="content-pane" id="base-stats">
                    ${pokemonData.stats.map(statInfo => `
                        <div class="stat-row">
                            <span class="stat-name">${statInfo.stat.name}</span>
                            <span class="stat-value">${statInfo.base_stat}</span>
                            <div class="stat-bar">
                                <div class="bar" style="width: ${statInfo.base_stat / 2.55}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
      
        
                </section>
        `;

const tabs = document.querySelectorAll('.tab');
const contentPanes = document.querySelectorAll('.content-pane');


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        contentPanes.forEach(pane => pane.classList.remove('active'));

        tab.classList.add('active');

        const targetPane = document.getElementById(targetId);
        targetPane.classList.add('active');
    });
});    
    } else {
        const detailContainer = document.getElementById('pokemon-detail-container');
        detailContainer.innerHTML = '<h1>Nenhum Pokémon selecionado. Volte para a Pokédex!</h1>';
    }

});


