//import { useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {

    // делаем стейт
    // делаем эффект
    // делаем гет запрос
    // записываем стейт 


    //useEffect(() => {
    //http запрос на монтировании страницы (если нужно)
    //}, [])
    
    return (
        <div>

        {['film-1', 'film-2', 'film-3'].map(film=> {              // ['film-1', 'film-2', 'film-3'] - вместо этого используем стейт
            
            return (                                               // результат обоачиваем в линк, чтобы глубже прокинуть
                               
            <li>
                <Link key={film} to={`${film}`}> {film} </Link>      
            </li>
            );
        })}
    
        </div>
    );
};

export default Movies;