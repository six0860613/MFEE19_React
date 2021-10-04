import React, { useRef } from 'react';

function InputId(props) {
  const inputRef = useRef();

  return (
    <>
      <div className="container">
        <h2>input by ID</h2>
        <input type="text" ref={inputRef} id="inputID" />
        <button
          onClick={() => {
            document.getElementById('inputID').value = 'Hello';
          }}
        >
          設定內容為Hello
        </button>
        <button
          onClick={() => {
            document.getElementById('inputID').focus();
          }}
        >
          聚焦
        </button>
      </div>
    </>
  );
}

export default InputId;
