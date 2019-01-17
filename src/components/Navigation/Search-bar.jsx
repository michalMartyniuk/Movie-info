import React from 'react'
import './Search-bar.scss'

const SearchBar = props => {
    return (
        <form className="search-bar">
            <label htmlFor="search" className="search-bar__label">Search
                <input id="search" className="search-bar__input" name="search" type="text"/>
            </label>
            <button className="search-bar__button" type="submit">Search</button>
        </form>
    )
}

export { SearchBar }