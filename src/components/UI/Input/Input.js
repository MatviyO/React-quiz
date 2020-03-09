import React, {Component } from 'react';
import classes from './Input.css'

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {

    const inputType = props.type || 'text'
    const cls = [classes.Input]
    const htrmlFor = `${inputType}-${Math.random()}`;
    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }
    return (
        <div className={cls.join(' ')}>
            <label htmlFor="htrmlFor">{props.label}</label>
            <input type={inputType}
                id={htrmlFor}
                   value={props.value}
                   onChange={props.onChange}
            />
            {
                isInvalid(props) ? <span>{props.errorMessage || 'input true check'}</span> : null
            }

        </div>
    )
}
export default Input
