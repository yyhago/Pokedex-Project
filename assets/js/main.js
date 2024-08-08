const pokemonListHtml = document.getElementsByClassName('pokemonsItens')[0];


pokeAPI.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(pokemonConvertToHtml).join("");
    pokemonListHtml.innerHTML +=  newHtml;
})


function pokemonConvertToHtml(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li>
    `;
}
