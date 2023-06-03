import { useParams } from "react-router-dom"
import { fetchCredits } from "../Api";
import { useState, useEffect } from "react";
import { CastCharacter, CastContainer, CastImage, CastName, CastPerson, NoCast } from "./Cast.styled";

import PropTypes from 'prop-types';


const Cast = () => {
    const {movieId} = useParams();
    const [castDetails, setCastDetails] = useState([]);

    useEffect(() => {

        async function getCastDetails() {

            try { 
                const detailsCast = await fetchCredits(movieId);
                console.log(detailsCast)
                setCastDetails(detailsCast.cast)
    
            } catch(error) {
               console.log(error)
            }};
    
            getCastDetails();  
                
        }, [movieId]);

    return (
    <div> 
        {castDetails.length > 0 ? (
        <CastContainer>
            {castDetails.map(({id, name, photo, character}) => (
                <>
           <CastPerson key={id}>
        <CastImage src={photo} alt={name} /> 
        <CastName>{name}</CastName>
        <CastCharacter>Character:   {character}</CastCharacter>
           </CastPerson>
           </>
        ))}
        </CastContainer>
        ) : (<NoCast> Information is absent </NoCast>)
        }
        </div>
    )
    };

    export default Cast;

   Cast.propTypes = {
        name: PropTypes.string,
        id: PropTypes.number,
        photo: PropTypes.string,
        character: PropTypes.string,
        };
      