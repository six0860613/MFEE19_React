import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

function JQ() {
  const [data, setData] = useState(0);
  const btnRef = useRef();

  useEffect(() => {
    $(btnRef.current).on('click', () => {
      setData(data + 1);
    });
  }, [data]);

  return (
    <>
      <div className="container">
        <h2>{data}</h2>
        <button ref={btnRef}>click me</button>
      </div>
    </>
  );
}

export default JQ;
