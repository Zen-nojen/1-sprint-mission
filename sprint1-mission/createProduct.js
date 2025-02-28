console.log("< createProduct >");
const createProductRes = await productService.createProduct(
		  "MacBook",
		  "MacBook desc",
		  1000000,
		  ["전자제품"],
		  ["https://example.com/images/1"]
);
console.log(createProductRes.data);
