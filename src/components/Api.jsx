
import axios from 'axios';

const API_KEY = '2913f54037fb6fa761373ffd7bea2e58';
const URL = 'https://api.themoviedb.org/3/';
const BASE_URL ='https://image.tmdb.org/t/p/w500';


export const fetchTrandingMovies = async() => {

    const response = await axios.get(
        `${URL}trending/movie/day?api_key=${API_KEY}`
    );
    console.log(response)

    //return response.data;
    const movies = response.data.results.map(({ id, title }) => {
        return {
          id,
          title,
          };
      });
    
      return { movies};
    };


export const fetchDetailsMovies = async(movieId) => {

      const response = await axios.get(
            `${URL}/movie/${movieId}?api_key=${API_KEY}`
      );
      
      const {id, title, poster_path: poster, overview, vote_average, genre_ids, release_date
      } = response.data;

          return {
            id,
            title,
            poster: BASE_URL + poster,
            overview,
            vote: vote_average.toFixed(1),
            genre_ids,
            year: release_date.slice(0, 4),
            };
        };

        export const fetchCredits = async(movieId) => {

          const response = await axios.get(
                `${URL}/movie/${movieId}/credits?api_key=${API_KEY}`
          );
          
          const {id, name, profile_path:poster, character
          } = response.data;
    
              return {
                id,
                name,
                poster: BASE_URL + poster,
                character
                                };
            };
      
      