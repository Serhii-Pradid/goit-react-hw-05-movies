import { useEffect, useState } from "react";
import { fetchTrandingMovies } from "components/Api";
import { useLocation} from "react-router-dom";
import PropTypes from 'prop-types';

import { MovieLink, Title } from './Home.styled';
    
const Home = () => {
    const [movies, setMovies] = useState([])
    const location = useLocation();

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

export default Home;

Home.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
};

