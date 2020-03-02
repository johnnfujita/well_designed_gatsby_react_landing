import React from 'react'
import "./styles/card.css"

const Card = props => {
    return (
        <div className="Card">
            <img src={props.image} />
            <div className="Upper">
                <h3>{props.title}</h3>
            </div>
            <div className="Bottom">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Card;