import { useParams } from "react-router-dom";
import { fetchRewies } from "./Api";
import { useState, useEffect } from "react";

export const Rewies = () => {
    const {movieId} = useParams();
    const [rewies, setRewies] = useState([]);

    useEffect(() => {
        
        async function getRewiesDetails () {

            try {
                const detailsRewies = await fetchRewies(movieId);
                console.log(detailsRewies);
                setRewies(detailsRewies.rewiesData)
                
            } catch (error) {
                console.log(error)
            }};

            getRewiesDetails()
        }, [movieId])
        
    return (
    <div> 
    {rewies.length > 0 && (rewies.map(({id, author, content }) => (
        <ul key={id}>
<li> Author: {author} </li>
<li> About movie: </li>
<p>{content}</p>
</ul>
    )))}
    </div>
    )
};