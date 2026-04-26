import axios, {type AxiosResponse} from "axios";
import type { Movie, MovieResponse } from '../types/movie'

export const fetchMovies = async (query: string):Promise<Movie[]> => {
      try {
        const config = {
            params: {
                query,
            },
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
            }
        };
        
      const response:AxiosResponse<MovieResponse> = await axios.get('https://api.themoviedb.org/3/search/movie', config);
      // console.log(response.data);
      return response.data.results
    } catch (error) {
      console.error(error);
      return[]
  }
}