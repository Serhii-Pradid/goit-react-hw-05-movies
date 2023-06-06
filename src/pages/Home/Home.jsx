import { useEffect, useState } from "react";
import { fetchTrandingMovies } from "components/Api";
import PropTypes from 'prop-types';

import { MoviesList } from "components/MoviesList/MoviesList";

import { Title } from './Home.styled';
    
const Home = () => {
    const [movies, setMovies] = useState([])
   
    useEffect(() => {
       
        async function getMovies() {

        try { 
            const trandingMovies = await fetchTrandingMovies();
            setMovies(trandingMovies.movies)

        } catch(error) {
           console.log(error)
        }};

        getMovies();
        
    }, []);

    return (
        <div>
        <Title>Tranding today</Title>

        <MoviesList movies={movies}/>

         </div>
    )
};

export default Home;

Home.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
};

