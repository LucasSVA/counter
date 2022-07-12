import React from "react";
import "./App.css"
import Counter from "./componets/Counter"




class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0,
      count2: 0

    }

  }

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 })

  }

  handleDicrease = () => {

    this.setState({ count: this.state.count - 1 })
    if (this.state.count <= 1) {
      this.setState({ count: 0 })

    }

  }


  handleIncrease2 = () => {

    this.setState({ count2: this.state.count2 + 1 })


  }

  handleDicrease2 = () => {
    this.setState({ count2: this.state.count2 - 1 })
    if (this.state.count2 <= 1) {
      this.setState({ count2: 0 })

    }

  }

  render() {
    return (
      <div className="container d-flex flex-column align-items-center vh-100 ">
        <h1 className="">Counter</h1>
        <div className="d-flex w-50 h-75 justify-content-around flex-column mb-5 ">
          <Counter count={this.state.count}
            increment={this.handleIncrease}
            substract={this.handleDicrease}
          />
          <Counter count={this.state.count2}
            increment={this.handleIncrease2}
            substract={this.handleDicrease2}
          />
        </div>

      </div >
    )

  }

}






export default App