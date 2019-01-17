import React, { Component } from 'react';
import './Navigation.scss'
import { Menu } from './Menu'
import { SearchBar } from './Search-bar'

class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="wrapper wrapper--navigation">
                    <Menu />
                    <SearchBar />
                </div>
            </nav>
        )
    }
}

export { Navigation }

