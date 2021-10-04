import React from 'react';
import ProductItem from './ProductItem';

function Cart(props) {
  const { orders, setOrders } = props;
  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>Shopping Cart</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3 items
            </div>
          </div>
        </div>
        {orders.map((value, index) => {
          return (
            <>
              <ProductItem
                key={value.id}
                id={value.id}
                name={value.name}
                category={value.category}
                image={value.image}
                price={value.price}
                counts={value.count}
                setCounts={(newCount) => {
                  //1. 先展開陣列並複製到變數中
                  const newOrders = [...orders];

                  //2. 運算處理：更新陣列中對應商品數量
                  // 更新陣列中本商品索引值，如果小於1以1來更新
                  // newOrders[index].count = newCount < 1 ? 1 : newCount;
                  newOrders[index].count = newCount;
                  if (newCount < 1) {
                    newOrders.splice(index, 1);
                    console.log(newOrders[index]);
                    console.log(index);
                  }
                  console.log(newOrders);
                  //3. 設定回原本的狀態
                  setOrders(newOrders);
                }}
              />
            </>
          );
        })}
        <div className="back-to-shop">
          <a href="#/">
            <i className="fas fa-arrow-circle-left"></i>
          </a>
          <span className="text-muted">Back to shop</span>
        </div>
      </div>
    </>
  );
}

export default Cart;
