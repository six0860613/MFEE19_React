import { doc } from 'prettier';
import React, { useState } from 'react';
import { UploadAvatar, ImgPath, TestAvatar } from '../config';
// import axios from 'axios';

function Upload() {
  const [imgURL, setImgURL] = useState('');
  const [myName, setMyName] = useState('');

  const doUpload = async () => {
    const fd = new FormData(document.form1);
    const response = await fetch(UploadAvatar, {
      method: 'POST',
      body: fd,
    });
    const data = await response.json();
    console.log('已上傳檔名', data.filename);
    // const r = await axios.post(UploadAvatar, fd);
    // console.log(r.data.filename);
    setImgURL(data.filename);
  };

  const sendForm = async (e) => {
    e.preventDefault();

    // json方法
    const dataObj = {
      avatar: document.fake_form.avatar.value,
      name: document.fake_form.name.value,
    };
    const r = await fetch(TestAvatar, {
      method: 'POST',
      body: JSON.stringify(dataObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await r.json();
    console.log(data);

    // // urlencoded方法
    // const usp = new URLSearchParams(new FormData(document.fake_form));
    // // const uspObj = {
    // //   avatar: usp.get('avatar'),
    // //   name: usp.get('name'),
    // // }
    // const r = await fetch(TestAvatar, {
    //   method: 'POST',
    //   body: usp.toString(),
    //   headers: {
    //     'Content-Type': 'application/x-www.form-urlencoded',
    //   },
    // });
    // console.log('usp', usp.toString());
    // const data = await r.json();
    // console.log(data);

    // // FormData方法 後端要使用 upoad.none(), # multer 的功能
    // const r = await fetch(TestAvatar, {
    //   method: 'POST',
    //   body: new FormData(document.fake_form),
    // });
    // const data = await r.json();
    // console.log(data);
  };

  return (
    <>
      <form name="fake_form" onSubmit={sendForm}>
        <button
          type="button"
          className="btn-success"
          onClick={() => {
            document.querySelector('#avatar').click();
          }}
        >
          選擇照片
        </button>
        <input
          type="hidden"
          className="form-control"
          name="avatar"
          value={imgURL}
        />
        <div className="mb-3">
          <label htmlFor="my_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control w-50"
            id="name"
            name="name"
            value={myName}
            onChange={(e) => {
              setMyName(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
      {/* 上傳圖片的表單 */}
      <form name="form1" style={{ display: 'none' }}>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/*"
          onChange={doUpload}
        />
      </form>
      <img
        src={imgURL ? ImgPath + imgURL : ''}
        alt=""
        width="300px"
        id="img01"
      />
    </>
  );
}

export default Upload;
