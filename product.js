// product.js

class Product {
    constructor(id, name, description, price, tags = [], images = [], favoriteCount = 0) {
      this.id = id;
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
    constructor(id, name, description, price, tags = [], images = [], favoriteCount = 0, manufacturer) {
      super(id, name, description, price, tags, images, favoriteCount);
      this.manufacturer = manufacturer;
    }
  }
  
  export { Product, ElectronicProduct };
  