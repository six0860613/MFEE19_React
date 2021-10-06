import React, { useState, useEffect } from 'react';
import '../App.css';
import FilterBar from '../components/ProductFilter/FilterBar';
import ProductList from '../components/ProductFilter/ProductList';
import SearchBar from '../components/ProductFilter/SearchBar';
import SortBar from '../components/ProductFilter/SortBar';

import { data } from '../data/index';

function ProductFilter() {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  const [tags, setTags] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [sortBy, setSortBy] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 先開啟載入指示器
    setIsLoading(true);

    setProducts(data);
    setDisplayProducts(data);

    // 1.5秒後關閉指示器
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleSearch = (products, searchWord) => {
    let newProducts = [];

    if (searchWord !== '') {
      newProducts = products.filter((product) => {
        return product.name.includes(searchWord);
      });
    } else {
      newProducts = [...products];
    }
    return newProducts;
  };

  const handleSort = (products, sortBy) => {
    let newProducts = [...products];

    // 價格少至多
    if (sortBy === '1') {
      newProducts = [...newProducts].sort((a, b) => a.price - b.price);
    }
    // 價格多至少
    if (sortBy === '2') {
      newProducts = [...newProducts].sort((a, b) => b.price - a.price);
    }
    // 預設用id 小至大
    if (sortBy === '' && newProducts.length > 0) {
      newProducts = [...newProducts].sort((a, b) => a.id - b.id);
    }

    return newProducts;
  };

  const handleTags = (products, tags) => {
    let newProducts = [...products];

    if (tags.length > 0) {
      newProducts = [...newProducts].filter((product) => {
        let isFound = false;

        // tag字串以逗號為分隔轉為陣列
        const productTags = product.tags.split(',');

        // 用目前使用者勾選的標籤用迴圈找，有找到就回傳true
        for (let i = 0; i < tags.length; i++) {
          if (productTags.includes(tags[i])) {
            if (tags.length > 1) {
            }
            console.log(productTags);
            return true;
          }
        }

        return isFound;
      });
    }

    return newProducts;
  };

  // 進行篩選
  useEffect(() => {
    // 先開啟載入指示器
    setIsLoading(true);

    let newProducts = [];

    // 處理搜尋
    newProducts = handleSearch(products, searchWord);

    // 處理排序
    newProducts = handleSort(newProducts, sortBy);

    // 處理勾選標記
    newProducts = handleTags(newProducts, tags);

    // // 處理價格區間選項
    // newProducts = handlePriceRange(newProducts, priceRange)

    setDisplayProducts(newProducts);

    // 1秒後關閉指示器
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, [searchWord, products, sortBy, tags]);

  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <div className="col-md-3">
                    <FilterBar tags={tags} setTags={setTags} />
                  </div>

                  <div className="col-md-9">
                    <h2>
                      <i className="fa fa-file-o"></i> 商品列表
                    </h2>
                    <hr />
                    <SearchBar
                      searchWord={searchWord}
                      setSearchWord={setSearchWord}
                    />
                    <div className="padding"></div>
                    <SortBar sortBy={sortBy} setSortBy={setSortBy} />
                    {isLoading ? (
                      spinner
                    ) : (
                      <ProductList products={displayProducts} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductFilter;
