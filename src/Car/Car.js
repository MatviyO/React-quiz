import React from 'react';


const car = (props) => {
    return (
        <div>
            <div className="card-img">
                <img src={props.img} alt={props.name}/>
            </div>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    )
}

export default car
