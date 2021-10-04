import React, { useState } from 'react';

function SendForm() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [nickname, setNickname] = useState('');

  const [field, setField] = useState({
    email: '',
    password: '',
    nickname: '',
    confirmPassword: '',
  });

  const [fieldErr, setFieldErr] = useState({
    email: '',
    password: '',
    nickname: '',
    confirmPassword: '',
  });

  const handleFieldChange = (e) => {
    const updateField = {
      ...field,
      [e.target.name]: e.target.value,
    };
    setField(updateField);
  };

  // 表單有變動時觸發，判斷為使用者在修改有錯誤的欄位，並根據目前格子內狀態去顯示即時的錯誤訊息
  const handleFormChange = (e) => {
    const updateFieldErr = {
      ...fieldErr,
      [e.target.name]: '',
    };
    setFieldErr(updateFieldErr);
  };

  // 對表單送出時出現的不合法狀況進行錯誤處理
  const handleFormInvalid = (e) => {
    e.preventDefault(); //阻擋預設行為:泡泡訊息
    const updateFieldErr = {
      ...fieldErr,
      [e.target.name]: e.target.validationMessage, // 把state設定為錯誤訊息
    };
    setFieldErr(updateFieldErr);
  };

  //表單送出後的行為
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    document.getElementById('sendE').innerText = formData.get('email');
    document.getElementById('sendP').innerText = formData.get('password');
    document.getElementById('sendN').innerText = formData.get('nickname');

    //密碼確認的檢查處理
    if (formData.get('password') !== formData.get('confirmPassword')) {
      const updateFieldErr = {
        ...fieldErr,
        password: '密碼與確認密碼輸入不相同',
        confirmPassword: '密碼與確認密碼輸入不相同',
      };
      setFieldErr(updateFieldErr);
      return; //將function return避免將資料送到伺服器
    }
  };
  return (
    <>
      <div className="container">
        <h1>送出表單範例</h1>
        <form
          onSubmit={handleSubmit}
          onChange={handleFormChange}
          onInvalid={handleFormInvalid}
        >
          <label>帳號：</label>
          <input
            type="email"
            name="email"
            value={field.email}
            onChange={handleFieldChange}
            required
          />
          <label>帳號：</label>
          {fieldErr.email !== '' && (
            <small className="error">{fieldErr.email}</small>
          )}
          <span id="sendE"></span>
          <br />
          <label>暱稱：</label>
          <input
            type="text"
            name="nickname"
            value={field.nickname}
            onChange={handleFieldChange}
            required
          />
          <label>暱稱：</label>
          {fieldErr.nickname !== '' && (
            <small className="error">{fieldErr.nickname}</small>
          )}
          <span id="sendN"></span>
          <br />
          <label>密碼：</label>
          <input
            type="password"
            name="password"
            value={field.password}
            onChange={handleFieldChange}
            minLength="6"
            required
          />
          <label>密碼：</label>
          {fieldErr.password !== '' && (
            <small className="error">{fieldErr.password}</small>
          )}
          <span id="sendP"></span>
          <br />
          <label>密碼確認：</label>
          <input
            type="password"
            name="confirmPassword"
            value={field.confirmPassword}
            onChange={handleFieldChange}
            required
          />
          <label>密碼確認：</label>
          {fieldErr.confirmPassword !== '' && (
            <small className="error">{fieldErr.confirmPassword}</small>
          )}
          <span id="sendP"></span>
          <br />
          <button type="submit">送出</button>
        </form>
      </div>
    </>
  );
}

export default SendForm;
