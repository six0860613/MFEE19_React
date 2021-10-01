import React from 'react';

function CounterBtn(props) {
  const { text, value, setTotal, total } = props;
  return (
    <>
      <button
        onClick={() => {
          const newTotal = total + value < 1 ? 0 : total + value;
          setTotal(newTotal);
        }}
      >
        {text}
      </button>
    </>
  );
}

export default CounterBtn;
