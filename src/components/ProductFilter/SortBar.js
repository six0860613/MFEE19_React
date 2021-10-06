import React from 'react';

function SortBar(props) {
  const { sortBy, setSortBy } = props;
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="btn-group">
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
              }}
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option value="" selected>
                預設排序 - 以ID排序
              </option>
              <option value="1">以價格排序-由少至多</option>
              <option value="2">以價格排序-由多至少</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default SortBar;
