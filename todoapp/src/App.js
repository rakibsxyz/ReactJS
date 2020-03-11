import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos:  [
    {id:'1', content:"Goto sleep man"},
    {id:'2', content:"Do some code man!"}
    ]
  }
  render() {
    return(
    <div className="App">
     <h1 className='center blue-Text'>My Todo's</h1>
     <Todos todos={this.state.todos} />
    </div>
  );
  }
}

export default App;
