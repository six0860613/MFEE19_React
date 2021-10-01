import React, { useState } from 'react';
import CounterBtn from './CounterBtn';

function Counter() {
  const [total, setTotal] = useState(1);
  return (
    <>
      <h1>{total}</h1>
      <CounterBtn text="+1" value={1} total={total} setTotal={setTotal} />
      <CounterBtn text="+5" value={5} total={total} setTotal={setTotal} />
      <CounterBtn text="-1" value={-1} total={total} setTotal={setTotal} />
    </>
  );
}

export default Counter;
