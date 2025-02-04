import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app/products",
});

async function getProductList(page, pageSize, keyword) {
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
    console.error(error);
  }
  return res.data.list;
}

async function getProduct(id) {
  let res;
  try {
    res = await instance.get(`/${id}`);
  } catch (error) {
    console.log(error);
  }
  return res.data;
}
