import React from 'react';
import './Car.css';


const car = (props) => {
    const inputClasses = ['input']
    if (props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }
    if (props.name.length > 4) {
        inputClasses.push('bold')
    }
    return (
        <div className="Car">
            <div className="card-img">
                <img src={props.img} alt={props.name}/>
            </div>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <input
                className={inputClasses.join(' ')}
                type="text" onChange={props.onChangeName}
                value={props.name} />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}

export default car
