import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Pagination from './Components/Pagination'
import Cards from './Components/Cards';
import UseEffect from './Components/UseEffect'
import UseRef from './Components/UseRef';


ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Cards/> */}
    {/* <Pagination/> */}
    {/* <UseEffect /> */}
    <UseRef />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
