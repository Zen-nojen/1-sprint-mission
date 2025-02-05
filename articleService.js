// articleService.js

import axios from 'axios';

const BASE_URL = 'https://panda-market-api-crud.vercel.app';

// 아티클 목록 가져오기
const getArticleList = (page, pageSize, keyword) => {
  return axios.get(`${BASE_URL}/articles`, {
    params: { page, pageSize, keyword },
  })
    .then(response => {
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`아티클 목록 가져오기 에러 (상태코드: ${response.status})`);
        return null;
      }
    })
    .catch(error => {
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
    });
};

// 단일 아티클 가져오기
const getArticle = (id) => {
  return axios.get(`${BASE_URL}/articles/${id}`)
    .then(response => {
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`단일 아티클 가져오기 에러 (상태코드: ${response.status})`);
        return null;
      }
    })
    .catch(error => {
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
    });
};

// 아티클 생성하기
const createArticle = (articleData) => {
  return axios.post(`${BASE_URL}/articles`, articleData)
    .then(response => {
      if (response.status === 201) {
        return response.data;
      } else {
        console.error(`아티클 생성 에러 (상태코드: ${response.status})`);
        return null;
      }
    })
    .catch(error => {
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
    });
};

// 아티클 업데이트하기
const patchArticle = (id, updatedData) => {
  return axios.patch(`${BASE_URL}/articles/${id}`, updatedData)
    .then(response => {
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`아티클 업데이트 에러 (상태코드: ${response.status})`);
        return null;
      }
    })
    .catch(error => {
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
    });
};

// 아티클 삭제하기
const deleteArticle = (id) => {
  return axios.delete(`${BASE_URL}/articles/${id}`)
    .then(response => {
      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`아티클 삭제 에러 (상태코드: ${response.status})`);
        return null;
      }
    })
    .catch(error => {
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
    });
};

export {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
};
