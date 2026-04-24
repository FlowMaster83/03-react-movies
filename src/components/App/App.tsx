import axios from 'axios'
import SearchBar from '../SearchBar/SearchBar'
import css from './App.module.css'

function App() {

  const fetchMovies = async (query: string) => {

    const config = {
      params: {
        query,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
      }
    };

    try {
      const respones = await axios.get('https://api.themoviedb.org/3/search/movie', config);
      console.log(respones.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={css.app}>
      <SearchBar onSubmit={fetchMovies} />
    </div>
  )
}

export default App