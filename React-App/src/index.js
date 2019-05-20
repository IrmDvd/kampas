import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './App.css';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import ProductList from './ProductList';
import Navigation from "./Navigation";
import Scaner from "./components/Scaner";
import In from "./components/In";
import Out from "./components/Out";


ReactDOM.render(
  <Router>
    <div>
      <Navigation/>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show}/>
        <Route path='/productList' component={ProductList}/> 
        <Route path='/scaner' component={Scaner}/>
        <Route path='/in' component={In}/>
        <Route path='/out' component={Out}/>
      </div>
      </div>
  </Router>, 
  document.getElementById('root')
);