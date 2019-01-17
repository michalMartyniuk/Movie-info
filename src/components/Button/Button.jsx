import React from 'react'
import './Button.scss'

const Button = ({ name, click, styleClass }) => {
    return (
        <button className={ styleClass } onClick={ click }>{ name }</button>
    )
}

export { Button }