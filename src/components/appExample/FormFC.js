import React, { useState } from 'react';

function FormFC() {
  const [loginData, setloginData] = useState({
    username: '',
    password: '',
  });

  return (
    <>
      <h2>FormFC</h2>
      <span>Username: </span>
      <input
        type="text"
        value={loginData.username}
        onChange={(event) => {
          setloginData({
            ...loginData,
            username: event.target.value,
          });
        }}
      />
      <span>Password: </span>
      <input
        type="text"
        value={loginData.password}
        onChange={(event) => {
          setloginData({
            ...loginData,
            password: event.target.value,
          });
        }}
      />
    </>
  );
}

export default FormFC;
