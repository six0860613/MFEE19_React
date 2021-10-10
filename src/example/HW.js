import React from 'react';
import Hw1 from '../components/Homework/Hw1';
import Hw2 from '../components/Homework/Hw2';
import Hw3 from '../components/Homework/Hw3';
import Hw4 from '../components/Homework/Hw4';

function HW() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Homework 1</h1>
            <Hw1 />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <h1>Homework 2</h1>
            <Hw2 />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <h1>Homework 3</h1>
            <Hw3 />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <h1>Homework 4</h1>
            <Hw4 />
          </div>
        </div>
      </div>
    </>
  );
}

export default HW;
