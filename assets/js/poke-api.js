// Define um objeto para armazenar funções relacionadas à API de Pokémon
const pokeAPI = {};

// Função que busca uma lista de Pokémon da API, com suporte a offset e limit
pokeAPI.getPokemons = (offset = 0, limit = 10) => {
    // Monta a URL para a requisição, usando os parâmetros offset e limit
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    // Faz uma requisição HTTP GET para a URL da API
    return fetch(url)
        .then((response) => response.json()) // Converte a resposta para JSON
        .then((jsonBody) => jsonBody.results) // Retorna apenas a lista de resultados de Pokémon
        .catch((error) => console.error(error)); // Exibe erros no console
};
