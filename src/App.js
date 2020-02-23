import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Car from './Car/Car'

class App extends Component {
    state = {
        cars: [
            { name: 'Bmw 4 series ', price: 21000, img: 'https://nahodim.com.ua/uploads/cars/new/bmw/241/xfgXKtIV86ZUQ2C8cUYH4CCV/slider_bmw_4-series-f36.jpg'},
            { name: 'Bmw 3 series ', price: 19000, img: 'https://nahodim.com.ua/uploads/cars/new/bmw/241/xfgXKtIV86ZUQ2C8cUYH4CCV/slider_bmw_4-series-f36.jpg'},
            { name: 'Bmw 2 series ', price: 18000, img: 'https://nahodim.com.ua/uploads/cars/new/bmw/241/xfgXKtIV86ZUQ2C8cUYH4CCV/slider_bmw_4-series-f36.jpg'},
            { name: 'Bmw 5 series ', price: 25000, img: 'http://nahodim.com.ua/uploads/cars/new/bmw/241/xfgXKtIV86ZUQ2C8cUYH4CCV/slider_bmw_4-series-f36.jpg'}

        ],
        pageTitle: 'React components'
    }

    changeTitleHandler = (newTitle) => {
        this.setState({
            pageTitle: newTitle 
        })
    }
    handleInput = (event) => {
       this.setState({
           pageTitle: event.target.value
       })
    }


    render() {
        // const divStyle = {
        //     'color': 'red'
        // }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <div className="container">
                    <span>{this.state.pageTitle}</span>
                    <input type="text" onChange={this.handleInput} />
                    <button onClick={this.changeTitleHandler.bind(this, 'changed')} >Button</button>
                    {this.state.cars.map((car, index) => {
                        return (
                            <Car key={index} name={car.name} price={car.price} img={car.image} onChangeTitle={() => {
                                this.changeTitleHandler(car.name)
                            }} />
                        )
                    })}
                    {/*<Car  name={cars[0].name} year={cars[0].year} img={cars[0].img}  onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)} />*/}
                    {/*<Car name={cars[1].name} year={cars[1].year} img={cars[1].img} onChangeTitle={() => this.changeTitleHandler(cars[1].name)}/>*/}
                    {/*<Car name={cars[2].name} year={cars[2].year} img={cars[2].img} />*/}

                </div>
            </div>
        )
    };
}

export default App;
