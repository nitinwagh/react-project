import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User'


class App extends Component {

  state  = {
    firstName: '',
    lastName: '',
  }

  handleReset = () => {
    this.setState({
      firstName: '',
      lastName: ''
    })
  }

  handleSubmit = () => {
    let { firstName, lastName } = this.state
  }

  handleChange = (e) => {
    let key = e.target.name
    this.setState({
      [key]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>My first react project</h1>
        <User 
          user={this.state}
        />
        <form className="form">
          <label>Name</label>
          <input
              name="firstName"
              value={this.firstName}
              onChange={(e) => this.handleChange(e)}
          />
          <input
              name="lastName"
              value={this.lastName}
              onChange={(e) => this.handleChange(e)}
          />
          <button onClick={this.handleSubmit}>Submit</button>
          <button onClick={this.handleReset}>Reset</button>
        </form>
      </div>
    )
  }

}


export default App;
