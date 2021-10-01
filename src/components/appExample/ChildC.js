import React from 'react';

function ChildA(props) {
  return (
    <>
      <h2>ChildC</h2>
      <span>ChildB傳來的:{props.data}</span>
    </>
  );
}

export default ChildA;
