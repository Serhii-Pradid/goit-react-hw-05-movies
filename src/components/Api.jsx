
import axios from 'axios';
import noPhoto from '../Images/nophoto.jpg';
import noPoster from '../Images/noposter.jpg';

const API_KEY = '2913f54037fb6fa761373ffd7bea2e58';
const URL = 'https://api.themoviedb.org/3/';
const BASE_URL ='https://image.tmdb.org/t/p/w500';


export const fetchTrandingMovies = async() => {

    const response = await axios.get(
        `${URL}trending/movie/day?api_key=${API_KEY}`
    );
    
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
            `${URL}movie/${movieId}?api_key=${API_KEY}`
      );
      
      const {id, title, poster_path: poster, overview, vote_average, genres, release_date
      } = response.data;

          return {
            id,
            title,
            poster: poster ? BASE_URL + poster : noPoster,
            overview,
            vote: vote_average.toFixed(1),
            genres: genres.map(genre => genre.name).join(', '),
            year: release_date.slice(0, 4),
            };
        };



export const fetchCredits = async(movieId) => {

    const response = await axios.get(
          `${URL}/movie/${movieId}/credits?api_key=${API_KEY}`
          );

    const cast = response.data.cast.map(({id, name, profile_path: photo, character}) => {
            
        return {
          id,
          name,
          photo: photo ? BASE_URL + photo : noPhoto ,
          character,
                };
                });
         
          return{cast}
              }

export const fetchRewies = async(movieId) => {

          const response = await axios.get(
                `${URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
                );
      
          const rewiesData = response.data.results.map(({id, author, content}) => {
                  
              return {
                id,
                author,
                content,
                  };
                });
              
              return{rewiesData}
                    }

export const fetchByQuery = async(query) => {

          const response = await axios.get(
                `${URL}search/movie?api_key=${API_KEY}&query=${query}`
                  );
          const queryData = response.data.results.map(({id, title}) => {
                              
                return {
                   id,
                   title,
                   };
                   });
                           
                   console.log(queryData)
                   return{queryData}
                   }

            