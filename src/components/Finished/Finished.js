import React from 'react';
import classes from './Finished.css';
import Button from "../UI/Button/Button";
import Link from "react-router-dom/Link";

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
                <Link to={'/'}><Button type="success">Open list test</Button></Link>

            </div>
        </div>
    )
}
export default Finished
