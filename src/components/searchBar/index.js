import { useEffect, useState } from 'react';

import './searchBar.css';

const SearchBar = ({
    placeholder = "Search", 
    searchText = null
}) => {
    const [searchQuery, setSearchQuery] = useState(searchText);

    const submithandler = (e) => {
        // form submit actions
    }

    const inputChangeHandler = (e) => {
        let inputText = e.target?.value ?? "";
        setSearchQuery(inputText);
    }

    // getting suggestion search text when input changes. debounce delay can be changed 
    useEffect(()=>{
        const delay = 300;
        let timer = setTimeout(()=>{
            // fetch suggessted inputs here 
        },delay);
        
        return () => clearTimeout(timer);
    },[searchQuery])

    const inputProps = {
        name: 'q',
        placeholder,
        ...(searchText && {value: searchQuery})
    }

    return (
        <form className='search-form' action='/search' onSubmit={submithandler}>
            <input className='search-input' type='search' {...inputProps} onChange={inputChangeHandler} />
            <button className='search-submit' type='submit'>Search</button>
        </form>
    )
}

export default SearchBar;