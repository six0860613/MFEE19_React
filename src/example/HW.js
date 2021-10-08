import React from 'react';
import Hw1 from '../components/Homework/Hw1';
import Hw2 from '../components/Homework/Hw2';
import Hw3 from '../components/Homework/Hw3';

function HW() {
  return (
    <>
      <div class="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Homework 1</h1>
          </div>
          <Hw1 />
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <h1>Homework 2</h1>
          </div>
          <Hw2 />
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <h1>Homework 3</h1>
          </div>
          <div className="col-12">
            <Hw3 />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <h1>Homework 4</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default HW;
