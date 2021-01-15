import React from 'react'
import {SearchContainer, SearchBar} from './Search.elements'

const Search = (props) => {

    const handleChange = (eventTargetValue) => {
        props.onChange(eventTargetValue);
    }

    const handleSearch = event => {
        props.handleSearch(event.key)
    }

    return (
        <SearchContainer>
            <SearchBar 
                type="text" 
                placeholder="Search..." 
                onChange={e => handleChange(e.target.value)} 
                value={props.query} 
                onKeyPress={handleSearch} />
        </SearchContainer>
    )
}

export default Search
