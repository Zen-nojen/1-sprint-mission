console.log("< deleteProduct >");
const deleteProductRes = await productService.deleteProduct(productId);
console.log(deleteProductRes.data);
