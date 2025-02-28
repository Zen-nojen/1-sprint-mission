console.log("< patchProduct >");
const patchProductRes = await productService.patchProduct(
		  productId,
		  "MacBook Pro Update",
		  "MacBook Pro Description Update",
		  2000000,
		  ["전자제품", "애플"],
		  ["https://example.com/images/2"]
);
console.log(patchProductRes.data);
