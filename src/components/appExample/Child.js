import React from 'react';

function Child(props) {
  console.log(props);
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </>
  );
}

export default Child;
