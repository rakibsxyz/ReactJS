import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Unsplash from './Components/Unsplash';
import Darkmode from './Components/Darkmode';
// import Boxwithshadow from './Components/Boxwithshadow';
function App() {
const [dark, setdark] = useState(false)


  return (
    <div className="App dark-mode">
      {/* <Boxwithshadow/> */}
      {/* <Unsplash/> */}
      {/* <h1>Yo bro</h1> */}
      {/* <Darkmode  /> */}
     
    </div>
  );
}

export default App;
