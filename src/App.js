import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car/Car'

class App extends Component {
    state = {
        cars: [
            {
                name: 'Bmw 4 series ',
                price: 21000,
                img: 'https://nahodim.com.ua/uploads/cars/new/bmw/241/xfgXKtIV86ZUQ2C8cUYH4CCV/slider_bmw_4-series-f36.jpg'
            },
            {
                name: 'Bmw 3 series ',
                price: 19000,
                img: 'https://nahodim.com.ua/uploads/cars/new/bmw/241/xfgXKtIV86ZUQ2C8cUYH4CCV/slider_bmw_4-series-f36.jpg'
            },
            {
                name: 'Bmw 2 series ',
                price: 18000,
                img: 'https://nahodim.com.ua/uploads/cars/new/bmw/241/xfgXKtIV86ZUQ2C8cUYH4CCV/slider_bmw_4-series-f36.jpg'
            },
            {
                name: 'Bmw 5 series ',
                price: 25000,
                img: 'http://nahodim.com.ua/uploads/cars/new/bmw/241/xfgXKtIV86ZUQ2C8cUYH4CCV/slider_bmw_4-series-f36.jpg'
            }

        ],
        pageTitle: 'React components',
        showCars: false
    }

    toggleCarHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

    onChangeName(name, index) {
        const car = this.state.cars[index];
        car.name = name
        const cars = [...this.state.cars]
        cars[index] = car;
        this.setState({
            cars: cars
        })
    }

    deleteHandler(index) {
        const cars = this.state.cars.concat();
        cars.splice(index, 1)
        this.setState({
            cars: cars
        })
    }


    render() {
        const divStyle = {
            'color': 'red'
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div className="container">
                        <span style={divStyle}>{this.state.pageTitle}</span>
                        <button onClick={this.toggleCarHandler}>Toggle cars</button>
                        {this.state.showCars ?
                            this.state.cars.map((car, index) => {
                                return (
                                    <div style={{
                                        width: 400,
                                        margin: 'auto',
                                        paddingTop: '20px'
                                    }}>
                                        <Car key={index} name={car.name} price={car.price}
                                             img={car.img}
                                             onDelete={this.deleteHandler.bind(this, index)}
                                             onChangeName={(event) => {
                                                 this.onChangeName(event.target.value, index)
                                             }}
                                        />
                                    </div>
                                )
                            })
                            : null
                        }
                    </div>
                </header>

            </div>
        )
    };
}

export default App;
