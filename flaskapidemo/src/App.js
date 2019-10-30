import React, { Component } from 'react'
import Login from './component/login'
import Signup from './component/signup'

export default class APP extends Component {
  render() {
    return (
      <div>
        <Login />
        <Signup />
      </div>
    )
  }
}
