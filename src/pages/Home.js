import { useEffect, useState } from "react";
import { fetchTrandingMovies } from "components/Api";
import { Link } from "react-router-dom";

    
const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        //console.log('монтируем страницу');
;
        async function getMovies() {

        try { 
            const trandingMovies = await fetchTrandingMovies();
            console.log(trandingMovies)
            setMovies(trandingMovies.movies)

        } catch(error) {
           console.log(error)
        }};

        getMovies();
        
    }, []);

        return (
        <div>
        <h3>Tranding today</h3>

        {movies.length > 0 && (movies.map(({id, title}) => (
          <ul key={id}>  
            <li>
                <Link to={`/movies/${id}`}> {title} </Link>      
            </li>
          </ul> 
            ))
        )}
        
        </div>
    )
};


export default Home;

