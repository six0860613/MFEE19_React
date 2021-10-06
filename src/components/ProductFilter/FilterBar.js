import React from 'react';

function FilterBar(props) {
  const { tags, setTags } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    // 如果目前在這狀態陣列 -> 移出
    if (tags.includes(value)) {
      // 1. 先從狀態陣列拷貝出新陣列
      // 2. 在拷貝的新陣列上處理
      const newLikeList = tags.filter((v, i) => {
        return v !== value;
      });
      // 3. 設定回狀態陣列
      return setTags(newLikeList);
    }

    // 如果沒在這狀態陣列中 -> 加入
    setTags([...tags, value]);
  };

  return (
    <>
      <h2 className="grid-title">
        <i className="fa fa-filter"></i> 過濾
      </h2>
      <button
        className="btn btn-success"
        onClick={() => {
          setTags('');
        }}
      >
        重設
      </button>
      <hr />
      <h4>依標籤</h4>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value="大螢幕"
            checked={tags.includes('大螢幕')}
            onChange={handleChange}
          />
          大螢幕
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value="小螢幕"
            checked={tags.includes('小螢幕')}
            onChange={handleChange}
          />
          小螢幕
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value="蘋果"
            checked={tags.includes('蘋果')}
            onChange={handleChange}
          />
          蘋果
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            className="icheck"
            value="安卓"
            checked={tags.includes('安卓')}
            onChange={handleChange}
          />
          安卓
        </label>
      </div>
      <div className="padding"></div>
    </>
  );
}

export default FilterBar;
