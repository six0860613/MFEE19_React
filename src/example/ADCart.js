import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ADCart(props) {
  // 加入購物車的產品
  const [products, setProducts] = useState([]);

  // didMount 讀 localStorage
  useEffect(() => {
    const myCart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

    setProducts(myCart);
  }, []);

  return (
    <>
      <h1>Cart</h1>
      <button
        onClick={() => {
          localStorage.removeItem('cart');
          alert('已清除');
          props.history.push('/cart');
        }}
      >
        清除購物車
      </button>
      <ul>
        {products.map((v, i) => {
          return <li key={i}>{v.name}</li>;
        })}
      </ul>
    </>
  );
}

export default withRouter(ADCart);
