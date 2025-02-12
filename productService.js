import axios from "axios";

const baseUrl = "https://panda-market-api-crud.vercel.app"

export async function getProductList(page, pageSize, keyword) {
  try {
    const response = await axios.get(`${baseUrl}/products`, { params: {page, pageSize, keyword}})
    console.log(response.data);
  } catch(error) {
    console.error(error);
    }
  }

export async function getProduct(productId) {
  try {
    const response = await axios.get(`${baseUrl}/products/${productId}`);
    console.log(response.data);
  } catch(error) {
    console.error(error);
    }
  }

export async function createProduct(name, description, price, tags, images) {
  try {
    const response = await axios.post(`${baseUrl}/products`,
    {name, description, price, tags, images}
    )
    console.log(response.data);
  } catch(error) {
    console.error(error);
    }
  }

export async function patchProduct(patchId, name, description, price, tags, images) {
  try {
    const response = await axios.patch(`${baseUrl}/products/${patchId}`,
    {name, description, price, tags, images}
    )
    console.log(response.data);
  } catch(error) {
    console.error(error);
    }
  }

export async function deleteProduct(patchId) {
  try {
    const response = await axios.delete(`${baseUrl}/products/${patchId}`)
    console.log(response.data);
  } catch(error) {
    console.error(error);
    }
  }