# Pokedex

## Descrição

A **Pokedex** é um projeto desenvolvido para praticar habilidades de desenvolvimento web utilizando HTML, CSS e JavaScript. O objetivo do projeto é criar uma aplicação que exiba informações detalhadas sobre Pokémon, permitindo a busca, visualização e navegação por uma lista de Pokémon. A aplicação utiliza a **PokéAPI** para buscar e exibir os dados dos Pokémon.

## Funcionalidades

- 🔍 **Busca de Pokémon**: Permite procurar Pokémon pelo nome ou ID.
- 📋 **Detalhes do Pokémon**: Mostra informações detalhadas sobre cada Pokémon, incluindo tipo, habilidades e imagem.
- 📑 **Lista de Pokémon**: Exibe uma lista paginada de Pokémon com a possibilidade de carregar mais itens.
- 🎨 **Interface Responsiva**: O design se adapta a diferentes tamanhos de tela, garantindo uma boa experiência tanto em computadores quanto em dispositivos móveis.

## Tecnologias Utilizadas

- **HTML5**: Estrutura o conteúdo da aplicação.
- **CSS3**: Estiliza a interface para proporcionar um design atraente e responsivo.
- **JavaScript**: Manipula o DOM, interage com a API e implementa a lógica da aplicação.
- **API**: [PokéAPI](https://pokeapi.co/) - Fornece dados sobre Pokémon.

## Introdução ao Consumo da PokéAPI

O projeto integra a PokéAPI para buscar e manipular dados dos Pokémon. Abaixo estão os principais passos e conceitos envolvidos no consumo da API:

1. **Primeira Requisição**: Realiza a primeira requisição à PokéAPI para obter dados básicos dos Pokémon.
2. **Manipulando o Resultado da Requisição**: Utiliza Promises para manipular os resultados da API e tratar dados assíncronos.
3. **Transformando a Lista de Pokémon em HTML**: Converte a lista de Pokémon recebida da API em elementos HTML para exibição.
4. **Separando o Consumo da API da Manipulação de HTML**: Organiza o código separando a lógica de consumo da API da manipulação do DOM.
5. **Utilizando a Função Map**: Usa a função `map` para reduzir a verbosidade do código e processar dados de maneira mais eficiente.
6. **Revisando o Código e Entendendo os Próximos Passos**: Revê o código para otimização e planejamento das próximas funcionalidades.
7. **Manipulando Múltiplas Requisições em Paralelo**: Realiza múltiplas requisições à API em paralelo para melhorar a eficiência.
8. **Convertendo o Modelo da PokéAPI para Nosso Modelo**: Adapta os dados da API para o modelo de dados utilizado no projeto.
9. **Adicionando Tipos de Pokémon Dinamicamente**: Integra dinamicamente os tipos de Pokémon na interface.
10. **Adicionando o Botão de Paginação**: Implementa um botão para carregar mais Pokémon.
11. **Criando Mecanismo de Paginação**: Desenvolve a lógica de paginação para navegar por diferentes páginas de Pokémon.
12. **Criando Mecanismo para Limitar na Primeira Geração de Pokémon**: Limita a exibição aos Pokémon da primeira geração, conforme solicitado.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/yyhago/Pokedex-Project

2. Navegue até o diretório do projeto:
  ```bash
  cd seu-repositorio

3. Abra o arquivo index.html em um navegador web.