import React from 'react';
import { imgUrl } from '../config';

// 運用components中的元件分開撰寫
import CounterFC from '../components/appExample/CounterFC';
import CounterCC from '../components/appExample/CounterCC';
import FormFC from '../components/appExample/FormFC';
import FormCC from '../components/appExample/FormCC';
import Parent from '../components/appExample/Parent';
import Counter from '../components/appExample/Counter';
import ParentAB from '../components/appExample/ParentAB';

const students = [
  { id: 1, name: 'Allen' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Cate' },
];

function AppExample() {
  return (
    <>
      <div className="container">
        {/* 透過config檔案傳遞路徑 */}
        <h2>config傳遞預先儲存的路徑</h2>
        <img src={`${imgUrl}/img/000.gif`} alt="" />
        <hr />
        {/* 陣列範例 */}
        <h2>陣列範例</h2>
        <ul>
          {students.map((stu, i) => {
            return <li key={stu.id}>{stu.name}</li>;
          })}
        </ul>
        <hr />

        {/* components元件 */}
        <h2>函式型</h2>
        <CounterFC />
        <FormFC />
        <hr />
        <h2>類別型</h2>
        <CounterCC />
        <FormCC />
        <hr />
        <h2>子母型</h2>
        <Parent />
        <hr />
        <h2>子元件計算，父元件呈現</h2>
        <Counter />
        <hr />
        <h2>不同子元件與父元件的傳遞</h2>
        <ParentAB />
        <hr />
      </div>
    </>
  );
}

export default AppExample;
