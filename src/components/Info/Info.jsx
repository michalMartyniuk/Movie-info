import React, { Component } from 'react'
import './Info.scss'

class Info extends Component {
    render() {
        return (
            <div className="wrapper wrapper--info">
                <div className="info">
                    <img src="" alt="" className="info__photo"/>
                    <div className="info__box">
                        <div className="info__title">
                            <h2>Title</h2>
                        </div>
                        <div className="info__content">
                            <div className="info__imdb">
                                <span className="imdb-title">Imdb</span>
                                <span className="imdb-votes">Votes</span>
                                <span className="imdb-score">Score</span>
                            </div>
                            <div className="info__filmweb">
                                <span className="filmweb-title">Imdb</span>
                                <span className="filmweb-votes">Votes</span>
                                <span className="filmweb-score">Score</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Info }