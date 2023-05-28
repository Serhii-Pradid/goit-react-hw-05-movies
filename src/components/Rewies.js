import { useParams } from "react-router-dom"

export const Rewies = () => {
    const {movieId} = useParams()

    //useEffect(() => {
        //http запрос на монтировании страницы информации о фильме
        // }, [])
        
    return <div> Rewies: {movieId} </div>
};