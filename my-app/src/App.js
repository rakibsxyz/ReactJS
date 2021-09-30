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
    let ninjas = [...this.state.ninjas, ninja];
    console.log(ninjas);
    this.setState({
      ninjas : ninjas    
    }
    );
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }


  render() {
    return (
      <div className="App">
        <p>First app in React </p>
        <Ninja ninjas= {this.state.ninjas} deleteNinja={this.deleteNinja}  />
        <AddNinja addNinjas= {this.addNinjas} />
      </div>
    );
  }
}

export default App;
