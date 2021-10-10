import React from 'react';
import { imgUrl } from '../config';
import IconButton from './IconButton';

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>入口頁</h1>
            <IconButton />
          </div>
          <img src={`${imgUrl}/img/000.gif`} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
