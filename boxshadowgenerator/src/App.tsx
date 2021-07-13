import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [hori, sethori] = useState<any>(10)
  const [ver, setver] = useState<any>(10)
  const [blur, setblur] = useState<any>(10)

  return (
    <div className="App">
      <div className="controls">
        <label>Slider</label>
        <input type="range" min="0" max="100" value={hori} onChange={(e) => sethori(e.target.value)} />
        <input type="range" min="0" max="100" value={ver} onChange={(e) => setver(e.target.value)} />
        <input type="range" min="0" max="100" value={blur} onChange={(e) => setblur(e.target.value)} />
        <h1>{hori}</h1>
      </div>
      <div className="output"></div>
      <div className="box"></div>
      <h1>Yo bro</h1>
    </div>
  );
}

export default App;
