import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Pagination from './Components/Pagination'
import Cards from './Components/Cards';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Cards/> */}
    {/* <Pagination/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
