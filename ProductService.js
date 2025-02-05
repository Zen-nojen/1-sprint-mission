import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app/products",
});

// getProductList : 해당 조건 get 하여 list로 반환
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
    console.error("getProductList 중 문제 발생");
    console.error(error);
  }
  return res.data.list;
}

// getProduct : 해당 id의 data 반환
export async function getProduct(id) {
  let res;
  try {
    res = await instance.get(`/${id}`);
  } catch (error) {
    console.log(error);
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
    console.error("포스팅에 문제 발생");
    console.log(error);
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
    console.error("patch 중 에러 발생");
    console.log(error);
  }
  return res.data.id;
}

// deleteProduct : 지운 후 성공 시 삭제된 id 반환
export async function deleteProduct(id) {
  let res;
  try {
    res = await instance.delete(`/${id}`);
  } catch (error) {
    console.error("delete 중 오류 발생");
    console.log(error);
  }
  return res.data.id;
}
