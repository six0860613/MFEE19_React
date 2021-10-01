import React from 'react';
import { imgUrl } from '../config';

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>HOME PAGE</h1>
          <img src={`${imgUrl}/img/026.jpg`} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
