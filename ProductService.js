//Product 클래스
export class Product {
    constructor({ name, description, price, tags, images, favoriteCount }) {
        this.name = name; //상품명
        this.description = description; //상품 설명
        this.price = price; //판매 가격
        this.tags = tags; //해시태그 배열
        this.images = images; //이미지 배열
        this.favoriteCount = favoriteCount; //찜하기 수
    }

    favorite() {
        this.favoriteCount++;
    }
}

//ElectronicProduct 클래스
export class ElectronicProduct extends Product {
    constructor(name, description, price, tags, images, favoriteCount, manufacturer) {
        super(name, description, price, tags, images, favoriteCount); //Prodcut를 상속
        this.manufacturer = manufacturer; //제조사
    }
}

const instance = axios.create({
    baseURL: 'https://panda-market-api-crud.vercel.app',
    timeout: 10000,
});
