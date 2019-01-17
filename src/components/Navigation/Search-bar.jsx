import React from 'react'

const SearchBar = props => {
    return (
        <form className="search-bar">
            <label htmlFor="search">Search
                <input id="search" name="search" type="text"/>
            </label>
            <button type="submit">Search</button>
        </form>
    )
}

export { SearchBar }