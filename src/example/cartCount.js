import React, { useState } from 'react';
import './cartCount.css';
import Cart from '../components/cartCount/Cart';
import Summary from '../components/cartCount/Summary';

//產品列表
const product = [
  {
    id: 1,
    name: 'Red T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 100.0,
  },
  {
    id: 2,
    name: 'White T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200.0,
  },
  {
    id: 3,
    name: 'Black T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 300.0,
  },
];

//陣列式
// const initState = (product) => {
//   const state = [];
//   for (let i = 0; i < product.length; i++) {
//     state.push(1);
//   }
//   return state;
// };

//物件式
const initStateObj = (product) => {
  const state = [];
  for (let i = 0; i < product.length; i++) {
    state.push({ ...product[i], count: 1 });
  }
  return state;
};

function App() {
  // const [counts, setCounts] = useState(initState(product));
  const [orders, setOrders] = useState(initStateObj(product));
  //Summary
  // 計算目前所有的商品數量
  const productCount = () => {
    let totalCount = 0;

    for (let i = 0; i < orders.length; i++) {
      totalCount += orders[i].count;
    }

    return totalCount;
  };

  // 計算目前所有的商品總價
  // const total = () => {
  //   let sum = 0;

  //   for (let i = 0; i < product.length; i++) {
  //     sum += orders[i].count * orders[i].price;
  //   }

  //   return sum;
  // };
  return (
    <>
      <div className="card">
        <div className="row">
          {/* <Cart product={product} counts={counts} setCounts={setCounts} /> */}
          <Cart orders={orders} setOrders={setOrders} />
          {/* <Summary productCount={productCount()} total={total()} /> */}
        </div>
      </div>
    </>
  );
}

export default App;
