import React from 'react';

function ProductItem(props) {
  const { id, name, category, image, price, counts, setCounts, deleteItem } =
    props;
  return (
    <>
      <div className="row">
        <div className="row main align-items-center">
          <div className="col-2">
            <img className="img-fluid" src={image} alt="" />
          </div>
          <div className="col">
            <div className="row text-muted">
              {category} #{id}
            </div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a
              href="#/"
              onClick={() => {
                setCounts(counts - 1);
              }}
            >
              -
            </a>
            <a href="#/" className="border">
              {counts}
            </a>
            <a
              href="#/"
              onClick={() => {
                setCounts(counts + 1);
              }}
            >
              +
            </a>
          </div>
          <div className="col">
            &euro; {price}{' '}
            <a
              href="#/"
              onClick={() => {
                deleteItem(counts * 0);
              }}
              className="close"
            >
              &#10005;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
