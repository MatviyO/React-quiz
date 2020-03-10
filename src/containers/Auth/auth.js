import React, {Component} from 'react'
import classes from './auth.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class Auth extends Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'error email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'error password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }
    loginHandler = () => {

    }
    registerHandler = () => {

    }
    submitHandler = (event) => {
event.preventDefault()
    }
    onChangeHandler = (event, controlName) => {

        const formControls = {...this.state.formControls}
        const contro = {...formControls[controlName]}
        this.setState({

        })
    }

    renderInputs() {
          return Object.keys(this.state.formControls).map((controlName, index) => {
                const control = this.state.formControls[controlName]
              return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={(event) => {
                        this.onChangeHandler(event, controlName)
                    }}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                    <div>
                        <h1>Authentification</h1>
                        <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                            {this.renderInputs()}
                            <Button type="success" onClick={this.loginHandler}>Login</Button>
                            <Button type="primary" onClick={this.registerHandler} >Registration</Button>
                        </form>
                    </div>
            </div>
        )
    }
}
