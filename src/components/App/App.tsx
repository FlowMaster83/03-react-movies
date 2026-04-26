import css from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import MovieGrid from '../MovieGrid/MovieGrid'
import { useState } from 'react'
import type { Movie } from '../../types/movie'
// import { Toaster } from 'react-hot-toast'

import { fetchMovies } from '../../services/movieService'

function App() {

  const [movies, setMovies] = useState<Movie[]>([])

  const handleSearch = async (query: string) => {
    const data = await fetchMovies(query)
    setMovies(data)
  }

  const handleSelectMovie = (movie: Movie) => {
    console.log(movie.title);
  }

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movies} onSelect={handleSelectMovie} />
    </div>
  )
}

export default App