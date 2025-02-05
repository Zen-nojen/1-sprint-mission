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
console.log("--- createProduct + getProduct ---");

const product1Id = await createProduct(
  ["https://www.examples.com"],
  ["전자제품"],
  2000,
  "애플 패드",
  "아이패드"
);

const product1Data = await getProduct(product1Id);
console.log(product1Data);

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

console.log("--- deleteProduct ---");

const deletedProductId = await deleteProduct(patchedProductId);
console.log(deletedProductId);
