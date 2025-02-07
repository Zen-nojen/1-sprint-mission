import axios from "axios";

const baseUrl = "https://panda-market-api-crud.vercel.app"

export function getArticleList(page, pageSize, keyword) {
  axios.get(`${baseUrl}/articles`, { params: { page, pageSize, keyword } })
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
}

export function getArticle(articleId){
  axios.get(`${baseUrl}/articles/${articleId}`)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
}

export function createArticle(title, content, image){
  axios.post(`${baseUrl}/articles`,
  {title, content, image}
  )
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
})
}

export function patchArticle(articleId, title, content, image){
  axios.patch(`${baseUrl}/articles/${articleId}`,
  {title, content, image}
  )
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
})
}

export function deleteArticle(articleId){
  axios.delete(`${baseUrl}/articles/${articleId}`)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
}