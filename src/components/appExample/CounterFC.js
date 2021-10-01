import React, { useState } from 'react';

function CounterFC() {
  // 對useState進行解構 [得到狀態, 設定狀態] = useState(初始值)
  const [total, setTotal] = useState(0);

  return (
    <>
      <h1>{total}</h1>
      <button
        type="button"
        id="plus"
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        +
      </button>
      <button
        type="button"
        id="minus"
        onClick={() => {
          setTotal(total - 1);
        }}
      >
        -
      </button>
    </>
  );
}

export default CounterFC;
