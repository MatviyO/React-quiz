import React, {Component} from 'react'
import 
class Layout extends Component {
    render() {
        return (
            <div>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
export default Layout


