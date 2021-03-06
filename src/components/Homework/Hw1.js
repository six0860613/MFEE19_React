import React, { useState } from 'react';

function Hw1() {
  const [page, setPage] = useState('首頁');
  return (
    <>
      <ul>
        <li>
          <a
            href="#/"
            onClick={() => {
              setPage('首頁');
            }}
            className={page === '首頁' ? 'HWactive HWitem' : ''}
          >
            首頁
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              setPage('關於我們');
            }}
            className={page === '關於我們' ? 'HWactive HWitem' : ''}
          >
            關於我們
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              setPage('產品');
            }}
            className={page === '產品' ? 'HWactive HWitem' : ''}
          >
            產品
          </a>
        </li>
      </ul>
    </>
  );
}

export default Hw1;
