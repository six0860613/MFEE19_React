const debug = true;
const devUrl = 'http://localhost:3000';
const productUrl = 'http://www.abc.com';

export const imgUrl = debug ? devUrl : productUrl;

export const pathnameList = [
  '/Home',
  '/HW',
  '/User',
  '/product',
  '/product/productDetail',
  '/cart',
];

export const pathnameTextList = [
  '/入口頁',
  '/Homework',
  '/會員中心',
  '/產品總覽',
  '/產品總覽/產品詳細',
  '/購物車',
];

// host
export const API_URL = 'http://localhost:3001';
export const AddresBook = API_URL + '/address-book/api/list';
export const UploadAvatar = API_URL + '/try-upload2';
export const ImgPath = API_URL + '/img/';
export const TestAvatar = API_URL + '/test_avatar';
