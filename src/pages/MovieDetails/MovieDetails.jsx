import { useEffect, useState, useRef, Suspense } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { fetchDetailsMovies } from "components/Api";
import PropTypes from 'prop-types';

import { 
    BackLink,
    CastRewies, 
    CastRewiesField, 
    CastRewiesLink, 
    MovieContainer, 
    MovieData, 
    PosterImage, 
    Title } from "./MovieDetails.styled";


const MovieDetails = () => {

    const {movieId} = useParams();
    const [movieDetails, setMovieDetails] = useState([]);
    const location = useLocation();
    const backLinkLocationRes = useRef(location.state?.from ?? '/');
    
    const { poster, title, vote, genres, overview, year
    } = movieDetails ?? {};

   useEffect(() => {

        async function getMovieDetails() {

            try { 
                const detailsMovie = await fetchDetailsMovies(movieId);
                //console.log(detailsMovie)
                setMovieDetails(detailsMovie)
    
            } catch(error) {
               console.log(error)
            }};
    
            getMovieDetails();
            

    }, [movieId])

console.log(location)

    return (
        <div>
            <BackLink to={backLinkLocationRes.current}> ← Go back </BackLink> 
        <MovieContainer>
            {movieDetails && (
                <MovieData>
                    
                <PosterImage src={poster} alt={title} />
                
                <div>
                <h1>{title}({year})</h1>
                <p>User score: {vote}</p>
                <h2>Overweiw</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres}</p>
                </div>
        </MovieData>
            )}
        </MovieContainer>

        <Title> Addition information: </Title>
        
        <CastRewiesField>
            <CastRewies>
                <CastRewiesLink to='cast'> Cast</CastRewiesLink>
            </CastRewies>

            <CastRewies>
                <CastRewiesLink to='rewies'> Rewies </CastRewiesLink>
            </CastRewies>
        </CastRewiesField>

        <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet/>
        </Suspense>
        </div> 
    )
};

export default MovieDetails;


MovieDetails.propTypes = {

    poster: PropTypes.string,
    vote: PropTypes.number,
    title: PropTypes.string,
    genres:PropTypes.array,
    overview: PropTypes.string,
    year: PropTypes.string
};