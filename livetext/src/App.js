import React, { Component } from 'react'

export default class componentName extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    };
    this.btn_clicked = this.btn_clicked.bind(this)
  };

  btn_clicked(){
    this.setState({count:this.state.count + 1});
  }
  
  render() {
    return (
      <div>
        <h2>Count App </h2>
        <h3>{this.state.count}</h3>
        <button onClick={this.btn_clicked}>Click Me.</button>
      </div>
    )
  }
}
