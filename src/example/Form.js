import React, { useState } from 'react';
import RadioButton from '../components/Form/RadioButton';
import CheckBox from '../components/Form/CheckBox';

function Form(props) {
  // 表單內容
  const [inputText, setInputText] = useState('');
  const [textArea, setTextArea] = useState('');
  // 下拉選單
  const [selectedOption, setSelectedOption] = useState('');
  // radio - 狀態記錄是被選中選項按鈕的值
  const [gender, setGender] = useState('');
  // radio - 專用元件
  const [gender2, setGender2] = useState('');
  const genderOptions = ['男', '女', '不提供', '不確定'];
  // 核取方塊
  const [agree, setAgree] = useState(false);
  const [likeList, setLikeList] = useState([]);
  // checkbox - group - 專用元件
  const [likeList2, setLikeList2] = useState([]);
  const fruitOptions = ['芒果', '西瓜', '芭樂'];

  return (
    <>
      <div className="container">
        <h2>文字輸入框</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <hr />
        <h2>文字區域</h2>
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value);
          }}
        />
        <hr />
        <h2>下拉選單</h2>
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
        >
          <option value="">請選擇</option>
          <option value="雞腿">雞腿</option>
          <option value="排骨">排骨</option>
          <option value="蝦捲">蝦捲</option>
        </select>
        <hr />
        <h2>單選圓點</h2>
        <input
          type="radio"
          value="男"
          checked={gender === '男'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label>男</label>
        <br />
        <input
          type="radio"
          value="女"
          checked={gender === '女'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label>女</label>
        <br />
        <input
          type="radio"
          value="未定"
          checked={gender === '未定'}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label>未定</label>
        <br />
        <section id="radioButton">
          <h2>選項按鈕(專用元件)</h2>
          {genderOptions.map((v, i) => {
            return (
              <RadioButton
                key={i}
                value={v}
                checkedValue={gender2}
                setCheckedValue={setGender2}
              />
            );
          })}
        </section>
        <hr />
        <h2>單一核取方塊</h2>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked);
          }}
        />
        <label>我已同意</label>
        <br />
        <h2>多個核取方塊</h2>
        <input
          type="checkbox"
          value="芒果"
          checked={likeList.includes('芒果')}
          onChange={(e) => {
            if (likeList.includes(e.target.value)) {
              const newLikeList = likeList.filter((v, i) => {
                return v !== e.target.value;
              });
              setLikeList(newLikeList);
            } else {
              const newLikeList = [...likeList, e.target.value];
              setLikeList(newLikeList);
            }
          }}
        />
        <label>芒果</label>
        <input
          type="checkbox"
          value="西瓜"
          checked={likeList.includes('西瓜')}
          onChange={(e) => {
            if (likeList.includes(e.target.value)) {
              const newLikeList = likeList.filter((v, i) => {
                return v !== e.target.value;
              });
              setLikeList(newLikeList);
            } else {
              const newLikeList = [...likeList, e.target.value];
              setLikeList(newLikeList);
            }
          }}
        />
        <label>西瓜</label>
        <section id="checkboxGroup2">
          <h2>多個核取方塊(元件型)</h2>
          {fruitOptions.map((v, i) => {
            return (
              <CheckBox
                key={i}
                value={v}
                checkedValueList={likeList2}
                setCheckedValueList={setLikeList2}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Form;
