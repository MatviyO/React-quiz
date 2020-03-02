import React, {Component} from 'react';
import Car from "./Car/Car";

export default class Cars extends Component {

    state = {
        cars: [
            {name: 'audi', year: 2014},
            {name: 'bmw', year: 2015},
            {name: 'toyota', year: 2017}
        ]
    }

    render() {
        return (
            <div style={{
                width: 400,
                margin: 'auto',
                paddingTop: '20px'
            }}>
                {this.state.cars.map( (car, index) => {
                    return (
                        <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        />
                    )
                })}


            </div>
        )
    }
}
