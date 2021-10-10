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
  if (age > 18) {
    document.getElementById('result').innerText = '您已年滿18歲!';
  } else {
    document.getElementById(
      'result'
    ).innerText = `您未滿18歲!!(您的年齡：${age})`;
  }
};

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
