import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import Finished from "../../components/Finished/Finished";
class Quiz extends Component {

    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'What a model bmw?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                    {text: 'A4', id: 1},
                    {text: 'rav4', id: 2},
                    {text: '3 series', id: 3},
                    {text: 'santa fe', id: 4}]
            },
            {
                question: 'What a model Audi?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'A4', id: 1},
                    {text: 'rav4', id: 2},
                    {text: '3 series', id: 3},
                    {text: 'santa fe', id: 4}]
            }
        ]
    }
    onAnswerClickHandler = answerId => {
        if (this.state.answerState) {
          const key = Object.keys(this.state.answerState)[0]
            if ( this.state.answerState[key] === 'success') {
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswerId == answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: {[answerId]: 'success'},
                results: results
            })
            const timeOut = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('finish')
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeOut)
            }, 1000)
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results: results
            })
        }

    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }
    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    {
                        this.state.isFinished ? <Finished
                                quiz={this.state.quiz}
                                results={this.state.results}
                                onRetry={this.retryHandler}  />
                            :  <ActiveQuiz
                                answers={this.state.quiz[0].answers}
                                question={this.state.quiz[0].answers}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }

                </div>
            </div>
        )
    }

}

export default Quiz
