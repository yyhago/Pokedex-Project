const pokeAPI = {};

function convertPokeAPIDetailsToPokemon(pokeDetails) {
    const pokemon = new Pokemon();
    
    pokemon.number = pokeDetails.id;
    pokemon.name = pokeDetails.name;

    const types = pokeDetails.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokeDetails.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeAPI.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeAPIDetailsToPokemon);
};

pokeAPI.getPokemons = (offset = 0, limit = 151) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeAPI.getPokemonDetails))
        .then((detailRequests) => Promise.all(detailRequests))
        .catch((error) => console.error(error));
};


pokeAPI.getPokemonByNameOrId = (nameOrId) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;
    return fetch(url)
        .then((response) => {
            if(!response.ok) {
                throw new Error("Pokémon not found!");
            }
            return response.json();
        })
        .then(convertPokeAPIDetailsToPokemon)
        .catch((error) => {
            console.log(error)
            return null;
        })
}