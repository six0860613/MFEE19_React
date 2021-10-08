import React from 'react';
import { imgUrl } from '../config';
import IconButton from './IconButton';

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>入口頁</h1>
          <IconButton />
          <img src={`${imgUrl}/img/026.jpg`} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
