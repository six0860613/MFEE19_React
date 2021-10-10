import React from 'react';

function Hw4List(props) {
  const { text, isDone, index, lineThrough } = props;
  return (
    <>
      <li
        onClick={() => {
          lineThrough(index);
        }}
        className={isDone ? 'listDone' : ''}
      >
        {text}
      </li>
    </>
  );
}

export default Hw4List;
