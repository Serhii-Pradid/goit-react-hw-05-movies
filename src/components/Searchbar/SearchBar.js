/*import {useState} from "react";
import {toast} from 'react-toastify';
import { FcSearch } from "react-icons/fc";
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
//import css from './Searchbar.module.css';

const Searchbar = ({onSearchSubmit}) => {

  const [searchQuery, setSearchQuery] = useState('');
  
  const handleChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
    console.log(handleChange)
    };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Please, enter the search word', {
        position: "top-center",
        theme: "colored",
      });
      return;
    }
  
    onSearchSubmit(searchQuery);
    console.log(searchQuery)
    reset();
}

   const reset = () => {
    setSearchQuery('')
 }
  
 
    return (
  <form onSubmit={handleSubmit} >
    <button type="submit" >
      <span> <FcSearch size={10} /> </span> 
    </button> 

    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movie title"
      name='searchQuery'
      value={searchQuery}
      onChange={handleChange}
    />
  </form>
    );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func
}

export default Searchbar;*/
