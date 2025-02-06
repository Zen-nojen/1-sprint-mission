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
const products = productsRes.data.list.map((element) => {
    let product;

    if (element.tags.includes('전자제품')) {
        product = new ElectronicProduct(element);
    } else {
        product = new Product(element);
    }

    return product;
});
console.log(products);

//전자제품 인스턴스 POST 요청
const produceRes1 = await createProduct({
    images: ['https://example.com/...'],
    tags: ['전자제품'],
    price: 0,
    description: 'string',
    name: '상품 이름',
});
console.log(produceRes1.data);

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
getArticleList()
    .then((getArticleListRes) => {
        const articles = getArticleListRes.list.map((element) => {
            const article = new Article(element);

            return article;
        });
        console.log(articles);
    })
    .catch((error) => {
        console.error(error);
    });

//기사 인스턴스 POST 요청
createArticle({
    image: 'https://example.com/...',
    content: '게시글 내용입니다.',
    title: '게시글 제목입니다.',
})
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
