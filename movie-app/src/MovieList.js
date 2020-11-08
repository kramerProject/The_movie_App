import React from 'react'

class MovieList extends React.Component {
  // Adicionando evento de click as imagens dos filmes, inclui uma classe rated para o elemento de classe (movie-item) que contem as informações dos filmes (titulo, imagem e id do genêro). Além disso inclui um novo paragrafo com o icone thumbs up. 
  ImageClick = (event) => {
    const parent = event.target.parentNode

    if (parent.classList.contains('rated')) {
      const ratedEmoji = parent.lastChild
      parent.removeChild(ratedEmoji)
      parent.classList.remove('rated')
    } else {
      parent.classList.add('rated')
      const hangLoose = document.createElement('p')
      hangLoose.innerHTML = '<span><i class="fas fa-thumbs-up"></i></span>'
      parent.appendChild(hangLoose)
    }
  }

  
  render() {
    return(
      <div className="movie-item">
          <img className="movie-image" src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} onClick={this.ImageClick}></img>
          <h1>{this.props.movie.original_title}</h1>
          <p className="genre-id">{this.props.movie.genre_ids[0]}</p>
      </div>
    )  
  }
}

export default MovieList;