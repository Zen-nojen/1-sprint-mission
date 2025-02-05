import axios, { Axios } from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app/articles",
});

// getArticleList
async function getArticleList(page, pageSize, keyword) {
  let list;
  list = instance
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
// getArticle

// createArticle

// patchArticle

// deleteArticle
