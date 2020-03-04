import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {

    state = {
        quiz: [
            {
                question: 'What a model bmw?',
                rightAnswerId: 3,
                answers: [
                    {text: 'A4', id: 1},
                    {text: 'rav4', id: 2},
                    {text: '3 series', id: 3},
                    {text: 'santa fe', id: 4} ]}
        ]
    }
    onAnswerClickHandler = (answerId) => {
        console.log(answerId)
    }
    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                    question={this.state.quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }

}

export default Quiz
