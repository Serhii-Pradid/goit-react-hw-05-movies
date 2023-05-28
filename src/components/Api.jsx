
import axios from 'axios';

const API_KEY = '2913f54037fb6fa761373ffd7bea2e58';
const URL = 'https://api.themoviedb.org/3/';

export const fetchTrandingMovies = async() => {

    const response = await axios.get(

        `${URL}trending/movie/day?api_key=${API_KEY}`
    );
    //console.log(response)

    //return response.data;
    const movies = response.data.results.map(({ id, title }) => {
        return {
          id,
          title,
          //posterPath: getImagePosterPath(poster_path),
        };
      });
    
      return { movies};
    }






//Ключ API
//2913f54037fb6fa761373ffd7bea2e58
//Токен доступу для читання API
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTEzZjU0MDM3ZmI2ZmE3NjEzNzNmZmQ3YmVhMmU1OCIsInN1YiI6IjY0NzJmODZlZGQ3MzFiMmQ3Y2Q2ZjMyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._GeOpIMHJZ9xjx0rbDGgF9kgSWWYDJ-1pdsALDgniAY


//https://api.themoviedb.org/3/movie/550?api_key=2913f54037fb6fa761373ffd7bea2e58