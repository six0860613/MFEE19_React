import React, { useState } from 'react';

function Summary(props) {
  const { productCount, total } = props;
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>Summary</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col items">{productCount} ITEMS</div>
          <div className="col text-right">&euro; {total}</div>
        </div>
        <form>
          <p>SHIPPING</p>
          <select
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(parseInt(e.target.value));
            }}
          >
            <option value="">請選擇</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </form>
        <div className="row total-price">
          <div className="col">TOTAL PRICE</div>
          <div className="col text-right">&euro; {total + selectedOption}</div>
        </div>
        <button className="btn">CHECKOUT</button>
      </div>
    </>
  );
}

export default Summary;
