import React, { Component } from 'react';

import './App.css';
import './Ninja';
import Ninja from './Ninja';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name:'Rakib', age:'22',id:'1'},
      { name:'Raks', age:'22',id:'2'}
    
    ]
  }

  addNinjas = (ninja) => {
   
    let ninjass = [...this.state.ninjas, ninja];
    this.setState = ({
      ninjas: ninjass
    }
    )
  }


  render() {
    return (
      <div className="App">
        <p>First app in React </p>
        <Ninja ninjas={this.state.ninjas} />
        <AddNinja addNinjas = {this.state.addNinjas} />
      </div>
    );
  }
}

export default App;
