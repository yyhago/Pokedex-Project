// Define o offset inicial e o número de Pokémon a serem buscados
const offset = 0;
const limit = 10;

// Seleciona o primeiro elemento com a classe 'pokemonsItens' para inserir a lista de Pokémon
const pokemonListHtml = document.getElementsByClassName('pokemonsItens')[0];

// Chama a função para buscar os Pokémon da API com o offset e limite definidos
pokeAPI.getPokemons(offset, limit).then((pokemonList) => {
    // Limpa o conteúdo HTML do elemento pokemonListHtml
    pokemonListHtml.innerHTML = '';
    
    // Itera sobre cada Pokémon na lista retornada e adiciona seu HTML ao elemento
    pokemonList.forEach((pokemon) => {
        // Converte o Pokémon para HTML e insere no elemento pokemonListHtml
        pokemonListHtml.innerHTML += pokemonConvertToHtml(pokemon);
    });
}).catch((error) => console.log(error)); // Exibe erros no console

// Função que converte um objeto Pokémon para uma string HTML
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
