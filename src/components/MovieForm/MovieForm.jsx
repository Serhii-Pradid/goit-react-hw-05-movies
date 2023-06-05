import { GiFilmProjector } from "react-icons/gi";
import { SearchForm, SearchFormButton, SearchInput, Search} from "./MovieForm.styled";


import {useState} from "react";
import {toast} from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';

const Searchbar = ({onSearchSubmit}) => {

  const [searchQuery, setSearchQuery] = useState('');
  
  const handleChange = event => {
    console.log(handleChange);
     setSearchQuery(event.currentTarget.value.toLowerCase());
    };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Please, enter the movie title', {
        position: "top-center",
        theme: "colored",
      });
      return;
    }
  
    onSearchSubmit(searchQuery);
    reset();
}

   const reset = () => {
    setSearchQuery('')
 }
   
    return (
<Search>
<SearchForm onSubmit={handleSubmit}>
   <SearchInput
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movie title"
      name="movieId"
      value={searchQuery}
      onChange={handleChange}
    />

    <SearchFormButton type="submit">
      <span> <GiFilmProjector size={40} /> </span> 
    </SearchFormButton> 
</SearchForm>
</Search>

    );
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func
}

export default Searchbar;