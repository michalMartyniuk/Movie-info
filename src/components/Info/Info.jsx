import React, { Component } from 'react'
import './Info.scss'

class Info extends Component {
    render() {
        return (
            <div className="wrapper wrapper--info">
                <div className="info">
                    <img src="" alt="" className="info__photo"/>
                    <div className="info__info">
                        <h2>Info info here</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export { Info }