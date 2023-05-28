import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import { Layout } from "./Layout";
import { Rewies } from "./Rewies";
import { Cast } from "./Cast";


export const App = () => {
  return (
          <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='movies' element={ <Movies />} />
        <Route path='movies/:movieId' element={<MovieDetails/>}>
           <Route path='cast' element={ <Cast />} />
           <Route path='rewies' element={ <Rewies /> }/>
         </Route>
      </Route>
      </Routes>
    
  );
};
