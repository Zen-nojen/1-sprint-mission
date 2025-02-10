import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app/products",
});

// getProductList : 해당 조건 get 하여 list 반환
export async function getProductList(page, pageSize, keyword) {
  let res;
  try {
    res = await instance.get("", {
      params: {
        page,
        pageSize,
        keyword,
      },
    });
  } catch (error) {
    if (error.response) {
      console.error("getProductList 중 response 문제");
      console.log(error.response);
    } else if (error.request) {
      console.error("getProductList 중 request 문제");
      console.log(error.request);
    } else {
      console.error("getProductList 중 알 수 없는 문제 발생");
      console.log(error);
    }
  }
  return res.data.list;
}

// getProduct : 해당 id의 data 반환
export async function getProduct(id) {
  let res;
  try {
    res = await instance.get(`/${id}`);
  } catch (error) {
    if (error.response) {
      console.error("getProduct 중 response 문제");
      console.log(error.response);
    } else if (error.request) {
      console.error("getProduct 중 request 문제");
      console.log(error.request);
    } else {
      console.error("getProduct 중 알 수 없는 문제 발생");
      console.log(error);
    }
  }
  return res.data;
}

// createProduct : 포스트 후 id 반환
export async function createProduct(images, tags, price, description, name) {
  let res;
  try {
    res = await instance.post("", {
      images,
      tags,
      price,
      description,
      name,
    });

    if (res.status < 200 || res.status > 300) {
      throw new Error("res 문제.");
    }
  } catch (error) {
    if (error.response) {
      console.error("createProduct 중 response 문제");
      console.log(error.response);
    } else if (error.request) {
      console.error("createProduct 중 request 문제");
      console.log(error.request);
    } else {
      console.error("createProduct 중 알 수 없는 문제 발생");
      console.log(error);
    }
  }
  return res.data.id;
}

// patchProduct : patch 후 id 반환
export async function patchProduct(id, images, tags, price, description, name) {
  let res;
  try {
    res = await instance.patch(`/${id}`, {
      images,
      tags,
      price,
      description,
      name,
    });
  } catch (error) {
    if (error.response) {
      console.error("patchProduct 중 response 문제");
      console.log(error.response);
    } else if (error.request) {
      console.error("patchProduct 중 request 문제");
      console.log(error.request);
    } else {
      console.error("patchProduct 중 알 수 없는 문제 발생");
      console.log(error);
    }
  }
  return res.data.id;
}

// deleteProduct : 지운 후 성공 시 삭제된 id 반환
export async function deleteProduct(id) {
  let res;
  try {
    res = await instance.delete(`/${id}`);
  } catch (error) {
    if (error.response) {
      console.error("deleteProduct 중 response 문제");
      console.log(error.response);
    } else if (error.request) {
      console.error("deleteProduct 중 request 문제");
      console.log(error.request);
    } else {
      console.error("deleteProduct 중 알 수 없는 문제 발생");
      console.log(error);
    }
  }
  return res.data.id;
  e;
}
