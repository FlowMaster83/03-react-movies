import css from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
// import { Toaster } from 'react-hot-toast'

import { fetchMovies } from '../../services/movieService'

function App() {

  return (
    <div className={css.app}>
      <SearchBar onSubmit={fetchMovies} />
    </div>
  )
}

export default App