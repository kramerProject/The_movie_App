import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/week?api_key=52d3e97323f3329ba592b46f79041c81'
})


export default api;