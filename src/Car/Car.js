import React from 'react';
import classes from './Car.css';
// import Radium from 'radium';//

const Car = (props) => {
    const inputClasses = [classes.input]
    if (props.name !== '') {
        inputClasses.push(classes.green)
    } else {
        inputClasses.push(classes.red)
    }
    if (props.name.length > 4) {
        inputClasses.push(classes.bold)
    }
    const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14'
    }
    return (
        <div className={classes.Car} style={style}>
            <div >
                <img className={classes.img} src={props.img} alt={props.name}/>
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

export default Car
