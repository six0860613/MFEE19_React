import React, { useState } from 'react';

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const birthStr = formData.get('birth').replace(/-/g, '/');
  console.log(birthStr);
  const birthYear = new Date(birthStr).getFullYear();
  const nowYear = new Date().getFullYear();
  const birthMonth = new Date(birthStr).getMonth();
  const nowMonth = new Date().getMonth();
  const birthDate = new Date(birthStr).getDate();
  const nowDate = new Date().getDate();
  let age = nowYear - birthYear;
  if (birthMonth > nowMonth) {
    age = age - 1;
  } else if (birthMonth === nowMonth) {
    if (birthDate > nowDate) {
      age = age - 1;
    }
  }
  console.log(age);

  document.getElementById('result').innerText = formData.get('birth');
};
// function strToDate(dateStr){
//     var dateTime = Date.parse(dateStr);//將日期字串轉換為表示日期的秒數
//     //注意：Date.parse(dateStr)預設情況下只能轉換：月/日/年 格式的字串，但是經測試年/月/日格式的字串也能被解析
//     var data = new Date(dateTime);//將日期秒數轉換為日期格式
//     return data;
//     }

function Hw3() {
  const [date, setDate] = useState('');
  return (
    <>
      <h2>選擇生日</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="date"
            name="birth"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <span>結果：</span>
          <span id="result"></span>
        </p>
        <button type="submit">送出</button>
      </form>
    </>
  );
}

export default Hw3;
