import React, { Component } from 'react'
import './Description.scss'
import { Button } from '../Button/Button';

class Description extends Component {
    render() {
        return (
            <div className="wrapper wrapper--description">
                <div className="description">
                    <div className="description__buttons">
                        <Button styleClass="button button--description" name="Imdb" />
                        <Button styleClass="button button--description" name="Filmweb" />
                        <Button styleClass="button button--description" name="Wiki" />
                    </div> 
                    <div className="description__content">
                            <h2>description content here</h2>
                    </div>               
                </div>
            </div>
        )
    }
}

export { Description }