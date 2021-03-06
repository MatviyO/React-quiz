import React, {Component} from 'react';
import classes from './QuizzCreator.css'
import Button from "../../components/UI/Button/Button";
import {createControl, validate, vallidateForm} from "../../form/formFramework";
import Input from "../../components/UI/Input/Input";
import Auxilary from "../../hoc/Auxilary/Auxilary";
import Select from "../../components/UI/Select/Select";

function createOptionControl(number) {
    return createControl({
        label: `Change ${number}`,
        errorMessage: 'Not a null',
        id: number
    }, {required: true})
}
function createFormControls() {
    return {
        question: createControl({
            label: 'Input question',
            errorMessage: 'Question not a null'
        }, {required: true}),
            option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),

    }
}

export default class QuizCreator extends Component {
    state = {
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls()
    }

    submitHandler = event => {
        event.preventDefault()
    }
    addQuestionHandler = (event) => {
        event.preventDefault()
        const quiz = this.state.quiz.concat()
        const index = quiz.length + 1
        const {question, option1, option2, option3, option4} = this.state.formControls
        const questionItem = {
            question: this.state.formControls.question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id}
            ]
        }
        quiz.push(questionItem)
        this.setState({
            quiz,
            isFormValid: false,
            rightAnswerId: 1,
            formControls: createControl()

        })
    }

    createQuizHandler = (event) => {
        event.preventDefault()
    }
    changeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.touched = true
        control.value = value
        control.valid = validate(control.value, control.validation)
        formControls[controlName] = control
        this.setState({
            formControls: formControls,
            isFormValid: vallidateForm(formControls)
        })
    }

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Auxilary key={controlName + index}>
                <Input
                key={controlName + index}
                label={control.label}
                value={control.value}
                valid={control.valid}
                shouldValidate={!!control.validation}
                touched={control.touched}
                errorMessage={control.errorMessage}
                onChange={event => this.changeHandler(event.target.value, controlName)}
                />
                { index === 0 ? <hr /> : null }
                </Auxilary>
            )
        })
    }
    selectChangeHandler = event => {
        this.setState({
            rightAnswerId: +event.target.value
        })
    }

    render() {
        const select = <Select
        label="Change true variant"
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
            {text: 1, value: 1},
            {text: 2, value: 2},
            {text: 3, value: 3},
            {text: 4, value: 4}
        ]}
        />

        return (
            <div className={classes.QuizzCreator}>
                <div>
                    <h1>Create Test</h1>
                    <form onSubmit={this.submitHandler} >
                        {this.renderControls()}
                        {select}
                        <Button
                            disabled={!this.state.isFormValid}
                        type="primary"
                        onClick={this.addQuestionHandler}
                        >Add question</Button>
                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                            disabled={!this.state.quiz.length === 0}
                        >Create test</Button>
                    </form>
                </div>
            </div>
        )
    }
}
