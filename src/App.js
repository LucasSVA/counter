import React from "react";
import "./App.css"
import Counter from "./componets/Counter"



class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0

    }

  }

  handleDivrease = () => {

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
          <Counter count={this.state.count}
            increment={this.handleDivrease}
            substract={this.handleDicrease}
          />

        </div>


      </div >
    )
  }

}


export default App