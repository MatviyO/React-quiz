import React from 'react';
import classes from './Finished.css';
import Button from "../UI/Button/Button";

const Finished = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            console.log(props.results[key])
            total++;
        }
        return total
    }, 0)
    return (
        <div className={classes.Finished}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const icon = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ]
                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={icon.join(' ')} />
                        </li>
                    )
                })}

            </ul>
            <p> True {successCount} wih {props.quiz.length}</p>
            <div>
                <Button onClick={props.onRetry} type="primary">Replace</Button>
                <Button type="success">Open list test</Button>

            </div>
        </div>
    )
}
export default Finished
