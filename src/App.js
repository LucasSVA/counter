import React from "react";
import "./App.css"



class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0

    }

  }

  handleIvrease = () => {

    this.setState({ count: this.state.count + 1 })

  }

  handleDicrease = () => {

    this.setState({ count: this.state.count - 1 })

  }

  render() {
    return (
      <div className="container bg-warning d-flex flex-column align-items-center">
        <div></div>
        <h1 className="">Counter</h1>
        <div className="d-flex w-50 bg-primary justify-content-around ">
          <button type="button" className="btn-green buttons " onClick={this.handleDicrease}>-</button>
          <h2>{this.state.count}</h2>
          <button type="button" className="btn-red buttons" onClick={this.handleIvrease}>+</button>

        </div>


      </div >
    )
  }

}


export default App