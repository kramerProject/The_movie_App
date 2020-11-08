import React from 'react'
import api from './Data'
import MovieList from './MovieList'

class MovieContainer extends React.Component {
  // Ao clicar em make my day, 
  // a listagem de filmes atual será substituida pela nova consulta
  deleteCurrentList = () => {
    const movieList = document.querySelector('.movie-list')
    movieList.innerHTML = ''
  }
  // Atualiza a listagem de filmes com os dados retornados da api.
  handleMovieData = (object) => {
    this.setState({ filmes: this.state.filmes.concat(object.results)})
    console.log(this.state)
  }
  // A api faz a busca dos filmes por genero(o 
  //que foi curtido pelo usuário), popularidade e lançamento em 2019.
  fetchFavorites = (number) => {
    const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=52d3e97323f3329ba592b46f79041c81&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${number}&primary_release_year=2019&page=1`
    fetch(endPoint)
      .then(data => data.json())
      .then(data => this.handleMovieData(data))
  }

  // A função inicia após o usuário clicar no botão make my day. 
  //Captura todos os genre_ids dos filmes curtidos e os utiliza para uma nova api retornando filmes de mesmo genero.
  suggestion = () => {
    const ratedMovies = document.getElementsByClassName('rated')
    const data = [...ratedMovies]
    const arrayOfGenres = data.map(element => element.firstChild.nextSibling.nextSibling.innerText)
    
    let finalArray = []
    const final = arrayOfGenres.forEach(number => finalArray.push(parseInt(number)))
    const finalNoRepeat = [...new Set(finalArray)]
    
    this.deleteCurrentList()
    finalNoRepeat.forEach(number => this.fetchFavorites(number))

    return final
  }

  state= {
    filmes: [],
  }

    // Após o retorno da api guarda os dados do filme em this state. A api retorna os trending filmes da semana.
    async componentDidMount() {
      const response = await api.get('')
      this.setState({ filmes: response.data.results})
    }
    // Recarrega a página ao clicar no botão reload movies
    handleClick = () => {
      window.location.reload(true)
    }
  
  
  render() {
    // variável que guarda um array de Objetos contendo as informações dos filmes
    const {filmes} = this.state
    return(
      <div className="movie-container">
        <div className="movie-container-title">
          <h1>Movie List</h1>
          <div className="button-container">
            <button className="suggestion-button" 
            onClick={this.suggestion}><i className="fas fa-heart"></i>Make my day</button>
            <button className="load-button" 
            onClick={this.handleClick}><i className="fas fa-sync"></i>Reload Movies</button>
          </div>
        </div>
        {/* A cada iteração um objeto (filme) é passado como argumento do componente MovieList */}
        <div className="movie-list">
          {filmes.map(filme => <MovieList  movie={filme} />)}
        </div>

      </div>
    )
  }
}

export default MovieContainer;