import css from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import MovieGrid from '../MovieGrid/MovieGrid'
import { useState } from 'react'
import type { Movie } from '../../types/movie'
// import { Toaster } from 'react-hot-toast'
import { fetchMovies } from '../../services/movieService'
import MovieModal from '../MovieModal/MovieModal'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

function App() {

  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie)
  }

  const closeModal = () => {
    setSelectedMovie(null)
  }

  const handleSearch = async (query: string) => {
    setIsLoading(true)
    setIsError(false)
    setMovies([])

    try {
      const data = await fetchMovies(query)
      setMovies(data)
    } catch (error) {
      setIsError(true)
      console.error(error);
    }
    setIsLoading(false)
  }

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />

      {isError && <ErrorMessage />}
      {isLoading && <Loader />}

      {!isLoading && !isError && movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={openModal} />
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}

    </div>
  )
}

export default App