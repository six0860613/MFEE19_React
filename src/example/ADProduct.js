import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data/';

function ADProduct(props) {
  const { cartCount, setCartCount } = props;
  return (
    <>
      <h1>Product</h1>
      會員登入情況：{props.auth ? '已登入' : '還未登入'}
      <ul>
        {data.map((v, i) => {
          return (
            <li key={i}>
              <Link to={`/product/productDetail/${v.id}`}>{v.name}</Link>
              <button
                onClick={() => {
                  const myCart = localStorage.getItem('cart')
                    ? JSON.parse(localStorage.getItem('cart'))
                    : [];

                  const newMyCart = [...myCart, v];
                  // 每次一按加入，選單列購物數量+1
                  setCartCount(cartCount + 1);
                  localStorage.setItem('cart', JSON.stringify(newMyCart));
                }}
              >
                加入購物車
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ADProduct;
