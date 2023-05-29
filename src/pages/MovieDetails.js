import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchDetailsMovies } from "components/Api";

const MovieDetails = () => {

    const {movieId} = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    console.log(movieId);

    const { poster, title, vote, overview, genre_ids, year
    } = movieDetails ?? {};

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
                <p>{genre_ids}</p>
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