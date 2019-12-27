function Car(props) {

    const classes = ['card'];
    if(props.car.marked) {
        classes.push('marked');
    }

    return (
        <div className={classes.join(' ')} onClick={props.onMark}>
            <div className="card-img">
                <img src={props.car.img} alt={props.car.name}/>
            </div>
            <h3>{props.car.name}</h3>
            <p>{props.car.price}</p>
        </div>
    )
}

class App extends React.Component {
    state = {
        stat: false,
        cars: [
            {marked: false, name: 'Bmw 4 series ', price: 21000, img: 'https://nahodim.com.ua/uploads/cars/new/bmw/241/xfgXKtIV86ZUQ2C8cUYH4CCV/slider_bmw_4-series-f36.jpg'},
            {marked: false, name: 'Bmw 3 series ', price: 19000, img: 'https://nahodim.com.ua/uploads/cars/new/bmw/241/xfgXKtIV86ZUQ2C8cUYH4CCV/slider_bmw_4-series-f36.jpg'},
            {marked: false, name: 'Bmw 2 series ', price: 18000, img: 'https://nahodim.com.ua/uploads/cars/new/bmw/241/xfgXKtIV86ZUQ2C8cUYH4CCV/slider_bmw_4-series-f36.jpg'},
            {marked: false, name: 'Bmw 5 series ', price: 25000, img: 'https://nahodim.com.ua/uploads/cars/new/bmw/241/xfgXKtIV86ZUQ2C8cUYH4CCV/slider_bmw_4-series-f36.jpg'}
        ],
        visible: true,
        appTitle: 'Cars application'
    }
    press() {
        this.setState({stat: !this.state.stat});
    }
    toggleHandler() {
        this.setState({visible: !this.state.visible})
    }
    titleChangeHandler(title) {
        if(title.trim() === '') {
            return
        }
        this.setState({
            appTitle: title
        })
    }
    handleMarked(name) {
        const cars = this.state.cars.concat();
        const car = cars.find(c => c.name === name)
        car.marked = !car.marked;
        this.setState({ cars: cars})
    }
    renderCars() {
        if(!this.state.visible) {
            return null
        }
        return this.state.cars.map(car => {
            return (
                <Car car = {car}
                     key={car.name + Math.random()}
                     onMark={this.handleMarked.bind(this, car.name)}


                />
            )
        })
    }
    render() {
        const style = {
            marginRight: 20
        }
        return (
            <div className="app">
                <h2>{this.state.appTitle}</h2>
                <input
                    onChange={(event) => this.titleChangeHandler(event.target.value)}
                    value={this.state.appTitle}
                    type="text" placeholder="Chane title" />
                <button className="ml1"
                        style={style}
                        onClick={() => {this.toggleHandler()}}>toggle</button>
                <hr />
                <div className="list">
                    {this.renderCars()}
                </div>
                <button onClick={() => {
                    this.press()
                }}> Type</button>
            </div>

        )

    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)





