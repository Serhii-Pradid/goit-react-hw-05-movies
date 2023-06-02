import { useParams } from "react-router-dom";
import { fetchRewies } from "../Api";
import { useState, useEffect } from "react";
import { RewiesContent,RewiesList, RewiesName } from "./Rewies.styled";

const Rewies = () => {
    const {movieId} = useParams();
    const [rewies, setRewies] = useState([]);

    useEffect(() => {
        
        async function getRewiesDetails () {

            try {
                const detailsRewies = await fetchRewies(movieId);
                //console.log(detailsRewies);
                setRewies(detailsRewies.rewiesData)
                
            } catch (error) {
                console.log(error)
            }};

            getRewiesDetails()
        }, [movieId])
        
    return (
    <> 
    {rewies.length > 0 ? (
    <>
        {rewies.map(({id, author, content }) => (
       <RewiesList key={id}>
       <RewiesName> Author:  {author} </RewiesName>
       <RewiesContent>{content}</RewiesContent>
       </RewiesList>
        ))}
    </>   
    
    ) : ( <h3> We don't have any rewiews for this movie </h3> )
    }  
    </>
    )
};

export default Rewies;