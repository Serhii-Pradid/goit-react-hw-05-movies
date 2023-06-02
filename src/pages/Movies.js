import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import { toast } from "react-toastify";
import { fetchByQuery } from "components/Api";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get('movieId')
    const location = useLocation();

    useEffect(() => {

        async function getSearch() {

            if (!movieId) {
                toast.error('Please, enter the search word', {
                  position: "top-center",
                  theme: "colored",
                });
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

        const handleSearchSubmit = e => {
            e.preventDefault();
                 const form = e.currentTarget;
                 setSearchParams({ movieId: form.elements.movieId.value });
                form.reset();
              };

              console.log(location)
            
    return (
        
         <div>
<form onSubmit={handleSearchSubmit}>
   <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movie title"
      name="movieId"
    />

    <button type="submit">
      <span> <FcSearch size={10} /> </span> 
    </button> 
</form>
        <ToastContainer autoClose={2000}/>
              
        {movies.length > 0 && (movies.map(({id, title}) => (
          <ul key={id}>  
            <li>
                <Link to={`/movies/${id}`} state={{from:location}}> {title} </Link>      
            </li>
          </ul> 
            ))
        )}
        </div>
    )
   };


export default Movies;