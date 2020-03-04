import React from 'react'
import classes from './Button.css';
import button from "eslint-plugin-jsx-a11y/lib/util/implicitRoles/button";

const Button = props => {
    const classes
    return (
        <button
            onClick={props.onClick}
            className={classes.Button}
            disabled={props.disabled}
        >
            {props.chidren}
        </button>
    )
}
export default Button
