// productService.js

import axios from 'axios';

const BASE_URL = 'https://panda-market-api-crud.vercel.app';

// 오류 핸들링 함수
async function handleRequest(requestFn) {
  try {
    const response = await requestFn();

    if (response.status === 200 || response.status === 201) { // POST 요청 시 201 상태 코드 포함
      return response.data;
    } else {
      console.error(`에러(상태코드): ${response.status}`);
      return null;
    }
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      if (status === 404) {
        console.error('에러: 존재하지 않는 리소스입니다 (404).');
      } else if (status === 400) {
        console.error('에러: 잘못된 요청 데이터입니다 (400).', error.response.data);
      } else {
        console.error(`에러(상태코드): ${status}`, error.response.data);
      }
    } else {
      console.error('기타 오류:', error.message);
    }
    return null;
  }
}

// 상품 목록 가져오기
const getProductList = async (page, pageSize, keyword) => {
  return await handleRequest(() => axios.get(`${BASE_URL}/products`, {
    params: { page, pageSize, keyword },
  }));
};

// 단일 상품 가져오기
const getProduct = async (id) => {
  return await handleRequest(() => axios.get(`${BASE_URL}/products/${id}`));
};

// 상품 생성하기
const createProduct = async (productData) => {
  return await handleRequest(() => axios.post(`${BASE_URL}/products`, productData));
};

// 상품 업데이트하기
const patchProduct = async (id, updatedData) => {
  return await handleRequest(() => axios.patch(`${BASE_URL}/products/${id}`, updatedData));
};

// 상품 삭제하기
const deleteProduct = async (id) => {
  return await handleRequest(() => axios.delete(`${BASE_URL}/products/${id}`));
};

export {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};