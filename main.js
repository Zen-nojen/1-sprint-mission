import { 
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./productService.js"

import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./articleService.js"

getProductList()
getProduct(216)
createProduct("샘샘미", "옴뇸뇸", 7800, "전자제품", "https://example.com/...")
patchProduct(222, "샘샘미")
deleteProduct(222)

getArticleList()
getArticle()
createArticle("안녕", "고슴도치는 기여워", "https://example.com/...")
patchArticle(182, "만지지마", "돈땃쥐미","https://example.com/...")
deleteArticle(182)

// npm이 제대로 inport 됐는지 확인하기

// 1번
class Product {
  constructor(name, description, price, tags, images, favoriteCount) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.tags = tags;
  this.images = images;
  this.favoriteCount = favoriteCount; 
  }
  favorite() {
    this.favoriteCount += 1;
  }
}

class ElectronicProduct extends Product {
  constructor (name, description, price, tags, images, favoriteCount, manufacture) {
    super(name, description, price, tags, images, favoriteCount);
    this.manufacture = manufacture;
  }
}

class Article {
  constructor(title, content, writer, likeCount) {
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.likeCount = likeCount;
  }
  like() {
    this.likeCount += 1;
  }
}


const products = new Product()
