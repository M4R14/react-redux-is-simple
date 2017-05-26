import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={this.props.layout.logo}className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <User username={this.props.user.name} />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    user:state.user,
    emp:state.emp,
    layout:state.layout
  }
}

export default connect(mapStateToProps)(App);
