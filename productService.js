import axios from "axios";

const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app",
});

async function getProductList(page, pageSize, keyword) {
  let res;
  try {
    res = await instance.get("/products", {
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
