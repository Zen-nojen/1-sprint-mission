import axios, { Axios } from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app/articles",
});

// getArticleList
export function getArticleList(page, pageSize, keyword) {
  let list = instance
    .get("", {
      params: {
        page,
        pageSize,
        keyword,
      },
    })
    .then((res) => {
      return res.data.list;
    })
    .catch((error) => {
      console.log(error);
    });
  return list;
}
// getArticle : 해당 id의 data 반환
export function getArticle(id) {
  let data = instance
    .get(`/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
}

// createArticle : post 후 id 반환
export function createArticle(title, content, image) {
  let id = instance
    .post("", {
      title,
      content,
      image,
    })
    .then((res) => {
      return res.data.id;
    })
    .catch((error) => {
      console.error(error);
    });
  return id;
}

// patchArticle : patch 후 id 반환
export function patchArticle(articleId, title, content, image) {
  let patchedId = instance
    .patch(`/${articleId}`, {
      title,
      content,
      image,
    })
    .then((res) => {
      return res.data.id;
    })
    .catch((error) => {
      console.log(error);
    });
  return patchedId;
}

// deleteArticle : delete 후 지워진 id 반환
export function deleteArticle(id) {
  let deletedArticleId = instance
    .delete(`/${id}`)
    .then((res) => {
      return res.data.id;
    })
    .catch((error) => {
      console.log(error);
    });
  return deletedArticleId;
}
