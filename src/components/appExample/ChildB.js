import React, { useState } from 'react';

function ChildB(props) {
  const [ChildBData, setChildBData] = useState('');
  const { setData } = props;
  return (
    <>
      <h2>ChildB</h2>
      <button
        onClick={() => {
          setChildBData('我是點了才傳的ChildB');
          setData(ChildBData);
        }}
      >
        設定ChildB至Parent
      </button>
    </>
  );
}

export default ChildB;
