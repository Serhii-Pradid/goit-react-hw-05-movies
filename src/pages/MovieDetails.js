import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchDetailsMovies } from "components/Api";
//import { fetchGenres } from "components/Api";

const MovieDetails = () => {

    const {movieId} = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    //const [movieGenres, setMovieGengres] = useState([]);
    console.log(movieId);

    const { poster, title, vote, genres, overview, year
    } = movieDetails ?? {};

    //const {id, name} = movieGenres ?? {};

    useEffect(() => {

        async function getMovieDetails() {

            try { 
                const detailsMovie = await fetchDetailsMovies(movieId);
                console.log(detailsMovie)
                setMovieDetails(detailsMovie)
    
            } catch(error) {
               console.log(error)
            }};
    
            getMovieDetails();
            

    }, [movieId])

    /*useEffect(() => {
        async function getMovieGenres() {
            try { 
                const detailsGenres = await fetchGenres();
                console.log(detailsGenres)
                setMovieGengres(detailsGenres.genres)
    
            } catch(error) {
               console.log(error)
            }};
    
            getMovieGenres();
                 
    },[])*/
    
    return (
        <div> 
        <div>
            {movieDetails && (
                <div>
                <img src={poster} alt={title} />
                <h1>{title}({year})</h1>
                <p>User score: {vote}</p>
                <h2>Overweiw</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres}</p>
        </div>
            )}
        </div>
        
        <ul>
            <li>
                <Link to='cast'> Cast</Link>
            </li>
            <li>
                <Link to='rewies'> Rewies </Link>
            </li>
        </ul>
        <Outlet/>
        </div> 
    )
};

export default MovieDetails;