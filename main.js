import Product from "./Product.js";
import ElectronicProduct from "./ElectronicProduct.js";
import Article from "./Article.js";

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./productService.js";

// Product 함수들 테스트
console.log("=== Product ===");

// createProduct
console.log("--- createProduct + getProduct ---");

const product1Id = await createProduct(
  ["https://www.examples.com"],
  ["전자제품"],
  2000,
  "애플 패드",
  "아이패드"
);

// getProduct
const product1Data = await getProduct(product1Id);
console.log(product1Data);

// patchProduct
console.log("--- patchProduct ---");

const patchedProductId = await patchProduct(
  product1Id,
  ["https://www.patched.com"],
  ["전자제품"],
  3000,
  "패치했습니다.",
  "아이패드 패치"
);
const patchedData = await getProduct(patchedProductId);
console.log(patchedData);

// deleteProduct
console.log("--- deleteProduct ---");

const deletedProductId = await deleteProduct(patchedProductId);
console.log(deletedProductId);

// getProductList
console.log("--- getProductList ---");
const productList = await getProductList(1, 2, "패드");
console.log(productList);
// Product의 리스트로 변형

console.log("--- Product와 ElectronicProduct의 배열로 변환 ---");
const products = productList.map((product) => {
  if (product.tags.includes("전자제품")) {
    return new ElectronicProduct(
      product.name,
      product.description,
      product.price,
      product.tags,
      product.images
    );
  } else {
    return new Product(
      product.name,
      product.description,
      product.price,
      product.tags,
      product.images
    );
  }
});

console.log(products);
