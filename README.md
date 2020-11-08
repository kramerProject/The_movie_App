# The Movie App

# Objetivo:

Criar um aplicativo em *React Native*, que tenha sugestões de filmes conforme o
gosto do usuário, em que ele possa visualizar uma listagem de filmes e ser capaz de curti-los.
Por fim, o usuário deve conseguir visualizar uma listagem com filmes sugeridos de acordo
com seus gostos.


# Requisitos:

- [x] 1 - Listagem de Filmes
- [x] 2 - Listagem de Sugestões
- [ ] 3 - Cadastro simples de usuário com login


# Detalhes:

* Para o backend, recomendável, o uso do NodeJs
* Banco de dados à sua escolha
* Design do app também é livre
* Ter comentários para melhor entendimento do código
* API para ser utilizada para listagem dos Filmes: [clique aqui](https://developers.themoviedb.org/3/getting-started/introduction) 

# Obs: Projeto foi desenvolvido em React, os arquivos pertinentes estão localizados na pasta movie-app/src.

# Interação

1. Para iniciar - clicar em Reload Pages, a ação vai retornar uma lista dos primeiros 20 filmes trending da semana.

2. Para curtir ou deixar de curtir basta clicar em cima da imagem.

3. Após curtir os filmes, clicar em "make my day", a ação vai disparar uma chamada a Api de filmes buscando-os com base no genre_id referente aos filmes curtidos anteriormente. 

# Estruturação:

1. App.js

  * Header
  * Picture.js
  * MovieContainer.js
    * Data.js
    * MovieList.js
    
2. App.css

# Para rodar o projeto

Opção1 - Acesse uma versão do projeto em Javascript clicando [aqui](https://kramerproject.github.io/projetos/Movie_list/index.html)

Opção2 -  Baixar o projeto na máquina e seguir os passos abaixo.

1. Ter o node instalado

```
npm install node

```
2. Instalar o axios

```
npm install axios

```
```
npm-start

```