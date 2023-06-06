import PropTypes from 'prop-types';
import { MovieLink } from "./MoviesList.styled";
import { useLocation } from 'react-router-dom';

export const MoviesList = ({movies}) => {
    const location = useLocation();
 
    return (
     
         <ul> 
              {movies.map(({id, title}) => (
           <li key={id}>
               <MovieLink to={`/movies/${id}`} state={{from:location}}> → {title} </MovieLink>      
           </li>
               ))}
         </ul> 
         );
        }
 
 
MoviesList.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
};