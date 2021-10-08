import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { data } from '../data/';

function ADProductDetail(props) {
  //   console.log(props.match.params);
  const [isLoading, setIsLoading] = useState(true);
  // 設定商品細節的初始值
  const [detailData, setDetailData] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  });
  // 處理didMount跟didUpdate
  useEffect(() => {
    const productID = props.match.params.id;
    if (productID) {
      const foundData = data.find((v, i) => {
        return v.id === productID;
      });
      setDetailData(foundData);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [props.match.params.id]);

  // 讀取圖示
  const spinner = (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  // 顯示內容
  const content = (
    <>
      <p>名稱：{detailData.name}</p>
      <p>價格：{detailData.price}</p>
      <button
        onClick={() => {
          props.history.push('/product');
          //   props.history.goBack();
        }}
      >
        回到上一頁
      </button>
    </>
  );
  return (
    <>
      <h1>產品詳細頁</h1>
      {isLoading ? spinner : content}
    </>
  );
}

export default withRouter(ADProductDetail);
