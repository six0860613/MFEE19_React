import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './mod/navbar';
import Home from './mod/Home';

import cartCount from './example/cartCount';
import appExample from './example/appExample';
import Form from './example/Form';
import Refs from './example/Refs';
import Lifecycle from './example/Lifecycle';
import HW from './example/HW';
import JQ from './example/JQ';
import ProductFilter from './example/ProductFilter';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/Home" component={Home} />
        <Route path="/cartCount" component={cartCount} />
        <Route path="/appExample" component={appExample} />
        <Route path="/Form" component={Form} />
        <Route path="/Refs" component={Refs} />
        <Route path="/Lifecycle" component={Lifecycle} />
        <Route path="/HW" component={HW} />
        <Route path="/JQ" component={JQ} />
        <Route path="/ProductFilter" component={ProductFilter} />
      </Router>
    </>
  );
}

export default App;
