import React from 'react';
import classes from './Car.css';
 // import Radium from 'radium';

class Car extends React.Component {

    componentWillReceiveProps(nextProps, nextContext) {

    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.name.trim() !== this.props.name.trim()
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    componentWillUnmount() {
    }

    render() {

        const inputClasses = [classes.input]
        if (this.props.name !== '') {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red)
        }
        if (this.props.name.length > 4) {
            inputClasses.push(classes.bold)
        }
        const style = {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14',
            ':hover': {
                border: '2px solid #aaa',
                boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .30',
                cursor: 'pointer'
            }
        }
        return (
            <div className={classes.Car} style={style}>
                <div >
                    <img className={classes.img} src={this.props.img} alt={this.props.name}/>
                </div>
                <h3>{this.props.name}</h3>
                <p>{this.props.price}</p>
                <input
                    className={inputClasses.join(' ')}
                    type="text" onChange={this.props.onChangeName}
                    value={this.props.name} />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Car
