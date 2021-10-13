import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyNavbar from './mod/MyNavbar';
import Home from './mod/Home';
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb';

import CartCount from './example/CartCount';
import AppExample from './example/AppExample';
import Form from './example/Form';
import Refs from './example/Refs';
import Lifecycle from './example/Lifecycle';
import HW from './example/HW';
import JQ from './example/JQ';
import ProductFilter from './example/ProductFilter';
import ADProduct from './example/ADProduct';
import ADCart from './example/ADCart';
import ADProductDetail from './example/ADProductDetail';
import User from './example/User';
import Fetch from './example/Fetch';
import Axios from './example/Axios';
import Upload from './example/Upload';

function App() {
  const [cartCount, setCartCount] = useState(0);

  // didMount
  useEffect(() => {
    //請localstorage中的購物車數量
    const myCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

    // 設定為陣列的長度(成員數量)
    setCartCount(myCart.length);
  }, []);

  return (
    <Router>
      <>
        <MyNavbar cartCount={cartCount} setCartCount={setCartCount} />
        <MultiLevelBreadCrumb />
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
          <Route path="/User">
            <User />
          </Route>
          <Route path="/JQ">
            <JQ />
          </Route>
          <Route path="/ProductFilter">
            <ProductFilter />
          </Route>
          <Route path="/product" exact>
            <ADProduct cartCount={cartCount} setCartCount={setCartCount} />
          </Route>
          <Route path="/cart" exact>
            <ADCart />
          </Route>
          <Route path="/product/productDetail/:id?" exact>
            <ADProductDetail />
          </Route>
          <Route path="/Fetch">
            <Fetch />
          </Route>
          <Route path="/Axios">
            <Axios />
          </Route>
          <Route path="/Upload">
            <Upload />
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
