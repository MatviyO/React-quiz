import React from 'react';
import classes from './Car.css';
import withClass from '../../hoc/with.Class';
import PropTypes from 'prop-types';
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        if (this.props.index === 1) {
            this.inputRef.current.focus()
        }
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
        const style1 = {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14',
            ':hover': {
                border: '2px solid #aaa',
                boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .30',
                cursor: 'pointer'
            }
        }
        return (
            <React.Fragment>
                <div style={style1}>
                <div >
                    <img className={classes.img} src={this.props.img} alt={this.props.name}/>
                </div>
                <h3>{this.props.name}</h3>
                <p>{this.props.price}</p>
                <input
                    ref={this.inputRef}
                    className={inputClasses.join(' ')}
                    type="text" onChange={this.props.onChangeName}
                    value={this.props.name} />
                <button onClick={this.props.onDelete}>Delete</button>
                </div>
            </React.Fragment>
        )
    }
}
Car.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    index: PropTypes.index,
    img: PropTypes.string,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}
export default withClass(Car, classes.Car )
