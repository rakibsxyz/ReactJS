import React, { Component } from 'react';

import './App.css';
import './Ninja';
import Ninja from './Ninja';

class App extends Component {
  state = {
    ninjas : [
      { name:'Rakib', age:'22',id:"1"},
      { name:'Raks', age:'22',id:"2"}
    ]
  }
  render() {
    return (
      <div className="App">
        <p>First app in React </p>
        <Ninja ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
