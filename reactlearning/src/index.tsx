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
import UseMemo from './Components/UseMemo';
import HocComponent from './Components/HOC/HocComponent';
import HooverCounter from './Components/HOC/HooverCounter';
import Nav from './Components/Router/NavTest'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DummyData from './Components/Router/DummyData';
import SinglePost from './Components/Router/SinglePost';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Cards/> */}
    {/* <Pagination/>
    <UseEffect /> */}
    {/* <UseRef /> */}
    {/* <UseMemo /> */}
    {/* <HocComponent/> */}
    {/* <HooverCounter /> */}


    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={DummyData} />
        <Route path='/posts/:id' exact component={SinglePost} />
        <Route path='/cards' exact component={Cards} />
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
