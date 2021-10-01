import React from 'react';

function Child(props) {
  const { name, text, age } = props;
  return (
    <>
      <h1>{name}</h1>
      <p>{text}</p>
      <p>{age}</p>
    </>
  );
}

Child.defaultProps = {
  name: 'Allen',
  text: 'Hello!!',
  age: '25',
};

export default Child;
