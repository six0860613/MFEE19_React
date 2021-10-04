import React, { useState } from 'react';

function SendForm() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [nickname, setNickname] = useState('');

  const [field, setField] = useState({
    信箱: '',
    密碼: '',
    暱稱: '',
  });

  const handleFieldChange = (e) => {
    const updateField = {
      ...field,
      [e.target.name]: e.target.value,
    };
    setField(updateField);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    document.getElementById('sendE').innerText = formData.get('信箱');
    document.getElementById('sendP').innerText = formData.get('密碼');
    document.getElementById('sendN').innerText = formData.get('暱稱');
  };
  return (
    <>
      <div className="container">
        <h1>送出表單範例</h1>
        <form onSubmit={handleSubmit}>
          <label>帳號：</label>
          <input
            type="email"
            name="信箱"
            value={field.email}
            onChange={handleFieldChange}
            required
          />
          <label>帳號：</label>
          <span id="sendE"></span>
          <br />
          <label>密碼：</label>
          <input
            type="password"
            name="密碼"
            value={field.password}
            onChange={handleFieldChange}
            minLength="6"
            required
          />
          <label>密碼：</label>
          <span id="sendP"></span>
          <br />
          <label>暱稱：</label>
          <input
            type="text"
            name="暱稱"
            value={field.nickname}
            onChange={handleFieldChange}
            required
          />
          <label>暱稱：</label>
          <span id="sendN"></span>
          <br />
          <button type="submit">送出</button>
        </form>
      </div>
    </>
  );
}

export default SendForm;
