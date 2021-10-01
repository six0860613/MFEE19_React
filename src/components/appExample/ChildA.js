import React from 'react';

function ChildA(props) {
  return (
    <>
      <h2>ChildA</h2>
      <span>父元件傳來的:{props.parentData}</span>
    </>
  );
}

export default ChildA;
