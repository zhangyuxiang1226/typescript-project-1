import * as React from 'react'

export default class Counter extends React.Component {
    state = {
        number: 0,
    }
    increment = () => {
        this.setState({
            number: this.state.number + 2,
        });
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
