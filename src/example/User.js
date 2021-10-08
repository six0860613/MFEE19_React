import React from 'react';
import { withRouter } from 'react-router-dom';

function User(props) {
  return (
    <>
      <h1>會員中心</h1>
      <button
        onClick={() => {
          alert('返回首頁！');
          //導向首頁
          props.history.push('/');
        }}
      >
        回到首頁
      </button>
      <button
        onClick={() => {
          //導向首頁
          props.history.goBack();
        }}
      >
        回到上一頁
      </button>
    </>
  );
}

export default withRouter(User);
