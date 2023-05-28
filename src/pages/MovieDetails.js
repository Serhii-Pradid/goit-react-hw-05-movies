import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieDetails = () => {

    const {movieId} = useParams();
    console.log(movieId);

    // делаем стейт
    // делаем эффект
    // делаем гет запрос
    // записываем стейт 
    
    //useEffect(() => {
    //http запрос на монтировании страницы информации о фильме
    // }, [])
    
    return (
        <> 
        <h1>MovieDetails: {movieId}</h1>
        <h3>Addition information</h3>
        <ul>
            <li>
                <Link to='cast'> Cast</Link>
            </li>
            <li>
                <Link to='rewies'> Rewies </Link>
            </li>
        </ul>
        <Outlet/>
        </> // рендерим тут любую разметку, которая мне нужна
    )
};

export default MovieDetails;