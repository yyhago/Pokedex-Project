const pokemonListHtml = document.getElementsByClassName('pokemonsItens')[0];
const loadMoreButton = document.getElementById("loadMoreButton");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");


const maxRecordes = 151;
const limit = 5;
let offset = 0;

function loadPokemonItens(offset, limit) {
    pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `).join("");
        pokemonListHtml.innerHTML += newHtml;
    });
}

function searchPokemon(query){
    pokeAPI.getPokemonByNameOrId(query).then(pokemon => {
        if(pokemon){
            const pokemonHtml = `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
            `;
            pokemonListHtml.innerHTML = pokemonHtml;
        } else{
            pokemonListHtml.innerHTML = '<li>Pokémon not found</li>';
            setTimeout(() => {
                pokemonListHtml.innerHTML = ''; 
                loadPokemonItens(offset, limit);
                searchInput.value = '';
            }, 3000);
        }
    })
}

searchButton.addEventListener("click", ()=>{
    const query = searchInput.value.trim().toLowerCase()
    searchPokemon(query);
})



loadMoreButton.addEventListener("click", () => {
    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecordes) {
        const newLimit = maxRecordes - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }
});


loadPokemonItens(offset, limit);