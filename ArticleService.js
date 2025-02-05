import axios from "axios";

export class Article {
  constructor(title, content, writer, likeCount, image) {
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.likeCount = likeCount;
    this.image = image;
    this.createdAt = new Date();
  }
  like() {
    this.likeCount += 1;
  }
}

const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app/articles",
  timeout: 3000,
});

export function getArticleList(
  queryParams = { page: 1, pageSize: 10, keyword: "" }
) {
  const res = instance
    .get(`?`, {
      params: queryParams,
    })
    .then((response) => {
      console.log("getArticleList 성공!");
      return response.data;
    })
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
        // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
        // node.js에서는 http.ClientRequest 인스턴스입니다.
        console.log(error.request);
      } else {
        // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
  return res;
}

export function getArticle(id) {
  const res = instance
    .get(`/${id}`)
    .then((response) => {
      console.log("createArticle 성공!");
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
        // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
        // node.js에서는 http.ClientRequest 인스턴스입니다.
        console.log(error.request);
      } else {
        // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
  return res;
}

export function createArticle(body) {
  const res = instance
    .post(`/`, body)
    .then((response) => {
      console.log("getArticle 성공!");
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
        // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
        // node.js에서는 http.ClientRequest 인스턴스입니다.
        console.log(error.request);
      } else {
        // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
  return res;
}

export function patchArticle(id, body) {
  const res = instance
    .patch(`/${id}`, body)
    .then((response) => {
      console.log("patchArticle 성공!");
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
        // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
        // node.js에서는 http.ClientRequest 인스턴스입니다.
        console.log(error.request);
      } else {
        // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
  return res;
}

export function deleteArticle(id) {
  const res = instance
    .delete(`/${id}`)
    .then((response) => {
      console.log("deleteArticle 성공!");
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
        // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
        // node.js에서는 http.ClientRequest 인스턴스입니다.
        console.log(error.request);
      } else {
        // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
  return res;
}
