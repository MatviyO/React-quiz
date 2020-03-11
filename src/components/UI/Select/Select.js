import React from 'react'
import classes from './Select.css'


const Select = props => {

    const htmlFor = `${props.label}-${Math.random()}`
    return (
        <div className={classes.Select}>
            <label htmlFor=""></label>
            <select  id={htmlFor} value={props.value}
                     onChange={props.onChange} >
                {props.options.map((option, index) => {
                    return (
                        <option value={option.value} key={option.value + index}>
                            {option.text}
                        </option>
                    )
                })}
            </select>
            <div>
                <strong><h1>Storng time vell loving tyme self</h1></strong>
            </div>
        </div>
    )
}

export default Select
