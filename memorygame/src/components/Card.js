import React from 'react';
import "./styles.css"

const Card = props=> {
    return (
        <div className="card" style={{backgroundImage: `url(${props.image})`, height: 480}}>
            </div>
    );
}

export default Card;