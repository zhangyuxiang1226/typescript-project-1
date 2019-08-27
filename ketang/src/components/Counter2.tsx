import * as React from 'react'
import { connect } from 'react-redux';
import { Store, Counter2 } from '../store/types';
import actions from '../store/actions/counter'
interface Props {
    number: number;
    increment: any;
    decrement: any;
}
interface State {
    number: number;
}

class Counter extends React.Component<Props, State> {
    // state = {
    //     number: 0,
    // }
    // increment = () => {
    //     this.setState({
    //         number: this.state.number + 2,
    //     });
    // }
    render() {
        let {number, increment, decrement} = this.props;
        return (
            <div>
                <p>{number}</p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        )
    }
}
export default connect(
    (state: Store):Counter2 => state.counter2,
    actions
)(Counter);