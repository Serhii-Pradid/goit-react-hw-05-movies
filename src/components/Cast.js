import { useParams } from "react-router-dom"

export const Cast = () => {
    const {movieId} = useParams()

    //useEffect(() => {
        //http запрос на монтировании страницы информации об актерах
        // }, [])

    return <div> Cast: {movieId} </div>
};