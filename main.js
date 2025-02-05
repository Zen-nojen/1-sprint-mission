import { Article, getArticleList, createArticle, getArticle, patchArticle, deleteArticle } from './ArticleService.js';
import {
    createProduct,
    ElectronicProduct,
    getProduct,
    getProductList,
    Product,
    patchProduct,
    deleteProduct,
} from './ProductService.js';

//Product 리스트 가져오기
const productsRes = await getProductList();
console.log(productsRes.data);

//전자제품 인스턴스 선언
const products1 = new ElectronicProduct({
    images: ['https://example.com/...'],
    tags: ['전자제품'],
    price: 0,
    description: 'string',
    name: '상품 이름',
});
console.log(products1);

//일반제품 인스턴스 선언
const products2 = new Product({
    images: ['https://example.com/...'],
    tags: ['일반제품'],
    price: 0,
    description: 'string',
    name: '상품 이름',
});
console.log(products2);

//전자제품 인스턴스 POST 요청
const produceRes1 = await createProduct(
    products1.images,
    products1.tags,
    products1.price,
    products1.description,
    products1.name
);
console.log(produceRes1.data);

//일반제품 인스턴스 POST 요청
const produceRes2 = await createProduct(
    products2.images,
    products2.tags,
    products2.price,
    products2.description,
    products2.name
);
console.log(produceRes2.data);

/* ## 나머지 메소드 활용 ##

//ID로 상품 가져오기
getProduct(198);

//상품 업데이트 하기
const updatedContent = {
    images: ['https://example.com/...'],
    tags: ['전자제품'],
    price: 0,
    description: 'string',
    name: '상품 이름',
};

try {
    const updatedProduct = await patchProduct(197, updatedContent);
    console.log('업데이트된 상품:', updatedProduct.data);
} catch (error) {
    console.error('Error:', error);
}

//상품 삭제하기
try {
    await deleteProduct(197);
    console.log('상품 삭제 완료');
} catch (error) {
    console.error('Error:', error);
}
*/

//Article 리스트 가져오기
const articles = getArticleList();

//기사 인스턴스 선언
const article1 = new Article({
    image: 'https://example.com/...',
    content: '게시글 내용입니다.',
    title: '게시글 제목입니다.',
    createdAt: new Date().toISOString(),
});
console.log(article1);

//기사 인스턴스 POST 요청
createArticle(article1.title, article1.content, article1.image)
    .then((id) => {
        console.log('생성된 id:', id);
    })
    .catch((error) => {
        console.error('id 생성 error:', error);
    });

/* ## 나머지 메소드 활용 ##

//ID로 기사 가져오기
getArticle(166);

//기사 업데이트 하기
const updatedData = {
    title: '업데이트된 제목',
    content: '업데이트된 내용',
};
patchArticle(166, updatedData)
    .then((updatedArticle) => {
        console.log('업데이트된 기사:', updatedArticle);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

//기사 삭제하기
deleteArticle(166)
    .then(() => {
        console.log('기사 삭제 완료');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
*/
