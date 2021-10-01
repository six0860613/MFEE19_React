import React, { useState, useEffect } from 'react';

function ChildB2(props) {
  const [ChildBData, setChildBData] = useState('我是一進來就傳的ChildB2');
  // 在出現時就直接更動，而非透過按鈕觸發
  useEffect(() => {
    props.setData(ChildBData);
  }, [ChildBData]);

  return (
    <>
      <h2>ChildB2</h2>
      <button
        onClick={() => {
          setChildBData('ChildBData Changing');
        }}
      >
        更動ChildB
      </button>
    </>
  );
}

export default ChildB2;
