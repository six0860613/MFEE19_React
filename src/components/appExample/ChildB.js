import React, { useState } from 'react';

function ChildB(props) {
  const [ChildBData, setChildBData] = useState('我是點了才傳的ChildB');
  return (
    <>
      <h2>ChildB</h2>
      <button
        onClick={() => {
          props.setData(ChildBData);
        }}
      >
        設定ChildB至Parent
      </button>
    </>
  );
}

export default ChildB;
