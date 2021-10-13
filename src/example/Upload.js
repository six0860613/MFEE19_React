import React, { useState } from 'react';
import { UploadAvatar, ImgPath } from '../config';
// import axios from 'axios';

function Upload() {
  const [imgURL, setImgURL] = useState('');

  const doUpload = async () => {
    const fd = new FormData(document.form1);
    const response = await fetch(UploadAvatar, {
      method: 'POST',
      body: fd,
    });
    const data = await response.json();
    console.log(data.filename);
    // const r = await axios.post(UploadAvatar, fd);
    // console.log(r.data.filename);
    setImgURL(ImgPath + data.filename);
  };

  return (
    <>
      <form
        name="fake_form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <img src={imgURL} alt="" width="300px" id="img01" />
        <button
          type="button"
          className="btn-success"
          onClick={() => {
            document.querySelector('#avatar').click();
          }}
        >
          選擇照片
        </button>

        <div className="mb-3">
          <label htmlFor="my_img" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="my_img"
            name="my_img"
            value={imgURL}
            readOnly
          />
        </div>

        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
      <form name="form1" style={{ display: 'none' }}>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/*"
          onChange={doUpload}
        />
      </form>
    </>
  );
}

export default Upload;
