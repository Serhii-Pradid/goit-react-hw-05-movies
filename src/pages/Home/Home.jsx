import { useEffect, useState } from "react";
import { fetchTrandingMovies } from "components/Api";
import { useLocation} from "react-router-dom";

import { MovieLink, Title } from './Home.styled';
    
const Home = () => {
    const [movies, setMovies] = useState([])
    const location = useLocation();

    useEffect(() => {
        //console.log('монтируем страницу');
;
        async function getMovies() {

        try { 
            const trandingMovies = await fetchTrandingMovies();
            //console.log(trandingMovies)
            setMovies(trandingMovies.movies)

        } catch(error) {
           console.log(error)
        }};

        getMovies();
        
    }, []);

    return (
        <div>
        <Title>Tranding today</Title>

        {movies.length > 0 && (movies.map(({id, title}) => (
          <ul key={id}>  
            <li>
                <MovieLink to={`/movies/${id}`} state={{from:location}}> → {title} </MovieLink>      
            </li>
          </ul> 
            ))
        )}
         </div>
    )
};

export default Home;

