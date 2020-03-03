import React, {Component} from 'react';
import Cars from "./Cars/Cars";
import {Route, NavLink, Switch, Redirect} from "react-router-dom";
import About from "./About/About";
import CarDetail from "./CarDetail/CarDetail";
import h1 from "eslint-plugin-jsx-a11y/lib/util/implicitRoles/h1";

class App extends Component {

    state = {
        isLoginIn: false
    }

    render() {
        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/cars">Cars</NavLink></li>
                    </ul>
                </nav>
                <hr/>
                    <h3>Is logged in {this.state.isLoginIn ? 'true' : 'false' }</h3>
                    <button onClick={() => {this.setState({isLoginIn: true})}}>Login</button>
                <hr/>
                <Switch>
                    <Route path="/" exact render={() => <h1>Home Page</h1>}/>
                    {this.state.isLoginIn ? <Route path="/about" component={About}/> : null}

                    <Route path="/cars/:name" exact component={CarDetail}/>
                    <Route path="/cars" exact component={Cars}/>
                    <Redirect to={'/'} />
                    <Route render={ () => {
                        <h1 style={{
                            color: 'red',
                            textAlign: 'center'
                        }}>404 not found</h1>
                    }} />
                </Switch>
            </div>
        )
    };
}

export default App;
