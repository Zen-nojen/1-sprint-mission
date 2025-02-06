import axios from 'axios';

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
    constructor({ name, description, price, tags, images, favoriteCount, manufacturer }) {
        super({ name, description, price, tags, images, favoriteCount }); //Prodcut를 상속
        this.manufacturer = manufacturer; //제조사
    }
}

const instance = axios.create({
    baseURL: 'https://panda-market-api-crud.vercel.app',
    timeout: 10000,
});

//상품 리스트 가져오기 메소드
export const getProductList = async (queryParams = { page: 1, pageSize: 10, keyword: '' }) => {
    try {
        const res = await instance.get(`/products?`, { params: queryParams });
        return res;
    } catch (e) {
        if (e.response) {
            console.log(e.response.status);
            console.log(e.response.data);
            throw new Error('가져오는 중 오류 발생');
        } else if (e.request) {
            console.log('리퀘스트는 전송되었지만 응답이 오지 않은 오류');
        } else {
            console.log('그 외 오류 발생');
        }
    }
};

//특정 상품 가져오기 메소드
export const getProduct = async (id) => {
    try {
        const res = await instance.get(`/products/${id}`);
        return res;
    } catch (e) {
        if (e.response) {
            console.log(e.response.status);
            console.log(e.response.data);
            throw new Error('가져오는 중 오류 발생');
        } else if (e.request) {
            console.log('리퀘스트는 전송되었지만 응답이 오지 않은 오류');
        } else {
            console.log('그 외 오류 발생');
        }
    }
};

//상품 만들기 메소드
export const createProduct = async ({ images, tags, price, description, name }) => {
    try {
        const productData = { images, tags, price, description, name };
        const res = await instance.post('/products', productData);
        return res;
    } catch (e) {
        if (e.response) {
            console.log(e.response.status);
            console.log(e.response.data);
            throw new Error('가져오는 중 오류 발생');
        } else if (e.request) {
            console.log('리퀘스트는 전송되었지만 응답이 오지 않은 오류');
        } else {
            console.log('그 외 오류 발생');
        }
    }
};

//상품 업데이트 메소드
export const patchProduct = async (id, updatedContent) => {
    try {
        const res = await instance.patch(`/products/${id}`, updatedContent);
        return res;
    } catch (e) {
        if (e.response) {
            console.log(e.response.status);
            console.log(e.response.data);
            throw new Error('상품 업데이트 실패');
        } else if (e.request) {
            console.log('리퀘스트는 전송되었지만 응답이 오지 않은 오류');
        } else {
            console.log('그 외 오류 발생');
        }
    }
};

//상품 삭제하기 메소드
export const deleteProduct = async (id) => {
    try {
        const res = await instance.delete(`/products/${id}`);
        return res;
    } catch (e) {
        if (e.response) {
            console.log(e.response.status);
            console.log(e.response.data);
            throw new Error('상품 삭제 실패');
        } else if (e.request) {
            console.log('리퀘스트는 전송되었지만 응답이 오지 않은 오류');
        } else {
            console.log('그 외 오류 발생');
        }
    }
};
