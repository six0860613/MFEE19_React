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

                  //2. 更新陣列中本商品索引值，如果小於1以1來更新
                  newOrders[index].count = newCount < 1 ? 1 : newCount;

                  //3. 設定回去
                  setOrders(newOrders);
                }}
                deleteItem={(newCount) => {
                  const newItem = [...orders];
                  newItem[index].count = newCount;
                  //刪除用的
                  if (newCount < 1) {
                    newItem.splice(index, 1);
                    // filter方法
                    // const newI = newItem.filter((v, i) => i !== index);
                    // console.log(newI);
                    // setOrders(newI);
                  }
                  setOrders(newItem);
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
