import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment} className='counter'>Increment</button>
        <button onClick={this.decrement}className='counter'>Drecrement</button>
      </div>
    )
  }
}

export default Counter