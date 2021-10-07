import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyNavbar from './mod/MyNavbar';
import Home from './mod/Home';

import CartCount from './example/CartCount';
import AppExample from './example/AppExample';
import Form from './example/Form';
import Refs from './example/Refs';
import Lifecycle from './example/Lifecycle';
import HW from './example/HW';
import JQ from './example/JQ';
import ProductFilter from './example/ProductFilter';

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/CartCount">
            <CartCount />
          </Route>
          <Route path="/AppExample">
            <AppExample />
          </Route>
          <Route path="/Form">
            <Form />
          </Route>
          <Route path="/Refs">
            <Refs />
          </Route>
          <Route path="/Lifecycle">
            <Lifecycle />
          </Route>
          <Route path="/HW">
            <HW />
          </Route>
          <Route path="/JQ">
            <JQ />
          </Route>
          <Route path="/ProductFilter">
            <ProductFilter />
          </Route>
        </Switch>
        {/* <Route path="/Home" component={Home} />
        <Route path="/cartCount" component={cartCount} />
        <Route path="/appExample" component={appExample} />
        <Route path="/Form" component={Form} />
        <Route path="/Refs" component={Refs} />
        <Route path="/Lifecycle" component={Lifecycle} />
        <Route path="/HW" component={HW} />
        <Route path="/JQ" component={JQ} />
        <Route path="/ProductFilter" component={ProductFilter} /> */}
      </>
    </Router>
  );
}

export default App;
