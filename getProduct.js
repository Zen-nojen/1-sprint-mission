console.log("< getProduct >");
const productId = createProductRes.data.id;
const getProductRes = await productService.getProduct(productId);
console.log(getProductRes.data);
