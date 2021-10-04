import React, { useRef } from 'react';

function InputRefs(props) {
  const inputRef = useRef();

  return (
    <>
      <div className="container">
        <h2>input by REFS</h2>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            inputRef.current.value = 'Hello'; //取得對應ref的物件
            //寫法相當於使用getElementByID取得物件後再改變value
            //refs只能套用在真實出現在DOM中的物件
          }}
        >
          設定內容為Hello
        </button>
        <button
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          聚焦
        </button>
      </div>
    </>
  );
}

export default InputRefs;
