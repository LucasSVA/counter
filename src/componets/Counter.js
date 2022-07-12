import React from "react";

class Counter extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <button type="button" className="btn-green buttons " onClick={this.props.substract}>-</button>
                <h2>{this.props.count}</h2>
                <button type="button" className="btn-red buttons" onClick={this.props.increment}>+</button>

            </div>

        )
    }



}

export default Counter