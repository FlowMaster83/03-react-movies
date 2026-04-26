import css from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import MovieGrid from '../MovieGrid/MovieGrid'
import { useState } from 'react'
import type { Movie } from '../../types/movie'
// import { Toaster } from 'react-hot-toast'

import { fetchMovies } from '../../services/movieService'
import MovieModal from '../MovieModal/MovieModal'

function App() {

  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie)
  }

  const closeModal = () => {
    setSelectedMovie(null)
  }

  const handleSearch = async (query: string) => {
    const data = await fetchMovies(query)
    setMovies(data)
  }

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movies} onSelect={openModal} />

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  )
}

export default App