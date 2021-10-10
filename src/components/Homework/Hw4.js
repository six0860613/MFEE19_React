import React, { useState } from 'react';
import Hw4List from './Hw4List';

function Hw4() {
  const [inputText, setInputText] = useState('');
  // list陣列
  const [todoList, setTodoList] = useState([
    // {
    //   text: '',
    //   isDone: false,
    // },
  ]);
  // Enter觸發
  const handleInput = (e) => {
    if (e.key === 'Enter' && inputText !== '') {
      const t = { text: inputText, isDone: false };
      const newTodoList = [...todoList];
      newTodoList.push(t);
      setTodoList(newTodoList);
      setInputText('');
    }
  };
  // 清除List
  const clearList = () => {
    setTodoList([]);
  };

  return (
    <>
      <h2>輸入清單：</h2>
      <input
        id="list"
        type="text"
        name="list"
        value={inputText}
        placeholder="輸入代辦事項"
        onKeyPress={handleInput}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button onClick={clearList}>CLEAR</button>
      <ul className="todo">
        {todoList.map((v, i) => {
          return (
            <Hw4List
              key={i}
              index={i}
              text={v.text}
              isDone={v.isDone}
              lineThrough={(index) => {
                const newList = [...todoList];
                newList[index].isDone = !newList[index].isDone;
                setTodoList(newList);
              }}
            />
          );
        })}
      </ul>
      <hr />
    </>
  );
}

export default Hw4;
