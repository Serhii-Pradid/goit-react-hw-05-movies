import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import { toast } from "react-toastify";
import { fetchByQuery } from "components/Api";
//import { GiFilmProjector } from "react-icons/gi";
import PropTypes from 'prop-types';
import Searchbar from "components/MovieForm/MovieForm";
import { MovieLink } from "./Movies.styled";

import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get('movieId')
    const location = useLocation();

    useEffect(() => {

        async function getSearch() {

            if (!movieId) {
                 return;
               };

        try { 
            const {queryData} = await fetchByQuery(movieId);
            console.log(queryData)
            setMovies(queryData)

            if (queryData.length === 0) {
                toast.warning( 'Sorry, there are no movies matching your search query. Please try again', {
                  position: "top-center",
                  theme: "colored",
                })
               }
                       
              if (queryData.length !== 0) {
                toast.success(`Hooray!!! We found requested movies`, {
                  position: "top-center",
                  theme: "colored",
                })
                  } 
    
        } catch(error) {
               console.log(error)
            }};
        
            getSearch();
            
        }, [movieId]);

        const handleSearchSubmit = movieId => {
            setSearchParams({ movieId });
        };

              console.log(location)
            
    return (
        
         <div>

        <Searchbar onSearchSubmit={handleSearchSubmit} />
         
        <ToastContainer autoClose={2000}/>
              
        {movies.length > 0 && (
<ul> 
     {movies.map(({id, title}) => (
  <li key={id}>
      <MovieLink to={`/movies/${id}`} state={{from:location}}> → {title} </MovieLink>      
  </li>
      ))}
</ul> 
)}
</div>
)
};

export default Movies;

Movies.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  onSubmit: PropTypes.func,
};

