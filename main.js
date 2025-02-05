// main.js

import { Product, ElectronicProduct } from './product.js';
import { Article } from './article.js';
import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from './articleService.js';
import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from './productService.js';

const products = [];
const articles = [];

// 상품 목록을 가져오고 처리하는 함수
const fetchAndProcessProducts = () => {
  console.log('1. 상품 목록을 가져옵니다.');
  return getProductList(1, 10, '') // 예시로 page=1, pageSize=10, keyword=''
    .then(productData => {
      if (productData && Array.isArray(productData)) {
        productData.forEach(item => {
          if (item.tags.includes('전자제품')) {
            const electronicProduct = new ElectronicProduct(
              item.id,
              item.name,
              item.description,
              item.price,
              item.tags,
              item.images,
              item.favoriteCount,
              item.manufacturer // manufacturer는 전자제품에만 존재
            );
            products.push(electronicProduct);
          } else {
            const product = new Product(
              item.id,
              item.name,
              item.description,
              item.price,
              item.tags,
              item.images,
              item.favoriteCount
            );
            products.push(product);
          }
        });
        console.log('2. 상품 목록을 저장했습니다.');
      }
    });
};

// 아티클 목록을 가져오고 처리하는 함수
const fetchAndProcessArticles = () => {
  console.log('3. 아티클 목록을 가져옵니다.');
  return getArticleList(1, 10, '') // 예시로 page=1, pageSize=10, keyword=''
    .then(articleData => {
      if (articleData && Array.isArray(articleData)) {
        articleData.forEach(item => {
          const article = new Article(
            item.id,
            item.title,
            item.content,
            '', // writer 필드 비워두기 (API에 보내지 않음)
            item.likeCount,
            item.createdAt ? new Date(item.createdAt) : new Date()
          );
          // writer와 images를 로컬에서 할당
          article.writer = '작성자 이름'; // 로컬 데이터 할당
          article.images = ['https://example.com/article-image1.jpg', 'https://example.com/article-image2.jpg']; // 로컬 데이터 할당
          articles.push(article);
        });
        console.log('4. 아티클 목록을 저장했습니다.');
      }
    });
};

// 단일 상품을 가져오는 함수 예시
const fetchSingleProduct = (id) => {
  console.log(`5. ID가 ${id}인 상품을 가져옵니다.`);
  return getProduct(id)
    .then(productData => {
      if (productData) {
        let product;
        if (productData.tags.includes('전자제품')) {
          // 기존에 저장된 ElectronicProduct의 manufacturer를 유지하기 위해 검색
          const existingProduct = products.find(p => p.id === id);
          const manufacturer = existingProduct ? existingProduct.manufacturer : undefined;

          product = new ElectronicProduct(
            productData.id,
            productData.name,
            productData.description,
            productData.price,
            productData.tags,
            productData.images,
            productData.favoriteCount,
            manufacturer // 클래스 내부에만 'manufacturer' 저장
          );
        } else {
          product = new Product(
            productData.id,
            productData.name,
            productData.description,
            productData.price,
            productData.tags,
            productData.images,
            productData.favoriteCount
          );
        }
        console.log(`6. ID가 ${id}인 상품을 저장했습니다:`, product);
        return product;
      }
    });
};

// 단일 아티클을 가져오는 함수 예시
const fetchSingleArticle = (id) => {
  console.log(`7. ID가 ${id}인 아티클을 가져옵니다.`);
  return getArticle(id)
    .then(articleData => {
      if (articleData) {
        const article = new Article(
          articleData.id,
          articleData.title,
          articleData.content,
          '', // writer 필드 비워두기 (API에 보내지 않음)
          articleData.likeCount,
          articleData.createdAt ? new Date(articleData.createdAt) : new Date()
        );
        // writer와 images를 로컬에서 할당
        article.writer = '작성자 이름'; // 로컬 데이터 할당
        article.images = ['https://example.com/article-image1.jpg', 'https://example.com/article-image2.jpg']; // 로컬 데이터 할당
        articles.push(article);
        console.log(`8. ID가 ${id}인 아티클을 저장했습니다:`, article);
        return article;
      }
    });
};

// 상품을 업데이트하는 함수 예시
const updateProduct = (id, updatedData) => {
  console.log(`9. ID가 ${id}인 상품을 업데이트합니다.`);
  // 'manufacturer' 필드는 API에 보내지 않도록 필터링
  const { manufacturer, ...dataToUpdate } = updatedData;
  return patchProduct(id, dataToUpdate)
    .then(updatedProductData => {
      if (updatedProductData) {
        let updatedProduct;
        if (updatedProductData.tags.includes('전자제품')) {
          // 기존에 저장된 ElectronicProduct의 manufacturer를 유지하기 위해 검색
          const existingProduct = products.find(p => p.id === id);
          const manufacturer = existingProduct ? existingProduct.manufacturer : undefined;

          updatedProduct = new ElectronicProduct(
            updatedProductData.id,
            updatedProductData.name,
            updatedProductData.description,
            updatedProductData.price,
            updatedProductData.tags,
            updatedProductData.images,
            updatedProductData.favoriteCount,
            manufacturer
          );
        } else {
          updatedProduct = new Product(
            updatedProductData.id,
            updatedProductData.name,
            updatedProductData.description,
            updatedProductData.price,
            updatedProductData.tags,
            updatedProductData.images,
            updatedProductData.favoriteCount
          );
        }
        console.log(`10. ID가 ${id}인 상품이 업데이트되었습니다:`, updatedProduct);
        // 기존 products 배열에서 업데이트된 상품을 대체
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
          products[index] = updatedProduct;
        }
        return updatedProduct;
      }
    });
};

// 아티클을 업데이트하는 함수 예시
const updateArticle = (id, updatedData) => {
  console.log(`11. ID가 ${id}인 아티클을 업데이트합니다.`);
  return patchArticle(id, updatedData)
    .then(updatedArticleData => {
      if (updatedArticleData) {
        const updatedArticle = new Article(
          updatedArticleData.id,
          updatedArticleData.title,
          updatedArticleData.content,
          '', // writer 필드 비워두기 (API에 보내지 않음)
          updatedArticleData.likeCount,
          updatedArticleData.createdAt ? new Date(updatedArticleData.createdAt) : new Date()
        );
        // writer와 images를 로컬에서 할당
        updatedArticle.writer = '작성자 이름'; // 로컬 데이터 할당
        updatedArticle.images = ['https://example.com/article-image1.jpg', 'https://example.com/article-image2.jpg']; // 로컬 데이터 할당
        console.log(`12. ID가 ${id}인 아티클이 업데이트되었습니다:`, updatedArticle);
        // 기존 articles 배열에서 업데이트된 아티클을 대체
        const index = articles.findIndex(a => a.id === id);
        if (index !== -1) {
          articles[index] = updatedArticle;
        }
        return updatedArticle;
      }
    });
};

// 상품을 삭제하는 함수 예시
const removeProduct = (id) => {
  console.log(`13. ID가 ${id}인 상품을 삭제합니다.`);
  return deleteProduct(id)
    .then(result => {
      if (result !== null) {
        console.log(`14. ID가 ${id}인 상품이 성공적으로 삭제되었습니다.`);
        // products 배열에서 삭제된 상품을 제거
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
          products.splice(index, 1);
        }
      }
    });
};

// 아티클을 삭제하는 함수 예시
const removeArticle = (id) => {
  console.log(`15. ID가 ${id}인 아티클을 삭제합니다.`);
  return deleteArticle(id)
    .then(result => {
      if (result !== null) {
        console.log(`16. ID가 ${id}인 아티클이 성공적으로 삭제되었습니다.`);
        // articles 배열에서 삭제된 아티클을 제거
        const index = articles.findIndex(a => a.id === id);
        if (index !== -1) {
          articles.splice(index, 1);
        }
      }
    });
};

// 실행 함수
const run = () => {
  console.log('=== 작업 시작 ===');

  fetchAndProcessProducts()
    .then(() => fetchAndProcessArticles())
    .then(() => {
      // 3. 새로운 상품 생성 (일반 상품)
      console.log('17. 새로운 상품을 생성합니다.');
      const newProductData = {
        name: '새 상품',
        description: '새로운 상품 설명',
        price: 10000,
        tags: ['새해', '특가'],
        images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
        // manufacturer는 전자제품에만 필요하므로 포함하지 않음
      };
      return createProduct(newProductData);
    })
    .then(newProduct => {
      if (newProduct) {
        const productInstance = new Product(
          newProduct.id,
          newProduct.name,
          newProduct.description,
          newProduct.price,
          newProduct.tags,
          newProduct.images,
          newProduct.favoriteCount
        );
        products.push(productInstance); // 클래스 인스턴스를 products 배열에 추가
        console.log('18. 생성된 상품:', productInstance);
        // 생성된 상품의 ID를 사용하여 단일 조회
        return fetchSingleProduct(newProduct.id);
      }
    })
    .then(() => {
      // 4. 새로운 전자제품 생성
      console.log('19. 새로운 전자제품을 생성합니다.');
      const newElectronicProductData = {
        name: '새 전자제품',
        description: '새로운 전자제품 설명',
        price: 50000,
        tags: ['전자제품', '최신'],
        images: ['https://example.com/electronic1.jpg', 'https://example.com/electronic2.jpg'],
        manufacturer: '전자회사',
      };
      // 'manufacturer' 필드는 API에 보내지 않도록 별도로 처리
      const { manufacturer, ...electronicProductData } = newElectronicProductData;
      return createProduct(electronicProductData)
        .then(newElectronicProduct => {
          if (newElectronicProduct) {
            const electronicProductInstance = new ElectronicProduct(
              newElectronicProduct.id,
              newElectronicProduct.name,
              newElectronicProduct.description,
              newElectronicProduct.price,
              newElectronicProduct.tags,
              newElectronicProduct.images,
              newElectronicProduct.favoriteCount,
              manufacturer // 클래스 내부에만 'manufacturer' 저장
            );
            products.push(electronicProductInstance); // 클래스 인스턴스를 products 배열에 추가
            console.log('20. 생성된 전자제품:', electronicProductInstance);
            // 생성된 전자제품의 ID를 사용하여 단일 조회
            return fetchSingleProduct(newElectronicProduct.id);
          }
        });
    })
    .then(() => {
      // 5. 새로운 아티클 생성
      console.log('21. 새로운 아티클을 생성합니다.');
      const newArticleData = {
        title: '새 아티클',
        content: '아티클 내용',
        // writer: '작성자 이름', // writer 필드 제거
        // images: ['https://example.com/article-image1.jpg', 'https://example.com/article-image2.jpg'], // images 필드 제거
      };
      console.log('21. 생성할 아티클 데이터:', newArticleData);
      return createArticle(newArticleData);
    })
    .then(newArticle => {
      if (newArticle) {
        const articleInstance = new Article(
          newArticle.id,
          newArticle.title,
          newArticle.content,
          '', // writer 필드 비워두기 (API에 보내지 않음)
          newArticle.likeCount,
          newArticle.createdAt ? new Date(newArticle.createdAt) : new Date()
        );
        // writer와 images를 로컬에서 할당
        articleInstance.writer = '작성자 이름'; // 로컬 데이터 할당
        articleInstance.images = ['https://example.com/article-image1.jpg', 'https://example.com/article-image2.jpg']; // 로컬 데이터 할당
        articles.push(articleInstance); // 클래스 인스턴스를 articles 배열에 추가
        console.log('22. 생성된 아티클:', articleInstance);
        // 생성된 아티클의 ID를 사용하여 단일 조회
        return fetchSingleArticle(newArticle.id);
      } else {
        console.error('21. 아티클 생성 실패.');
      }
    })
    .then(() => {
      // 6. 상품 업데이트 예시
      if (products.length > 0) {
        const newProduct = products.find(p => p.id === 308);
        if (newProduct) {
          console.log('23. 상품을 업데이트합니다.');
          return updateProduct(newProduct.id, { price: 12000, description: '업데이트된 설명' });
        }
      }
    })
    .then(() => {
      // 7. 전자제품 업데이트 예시
      if (products.length > 0) {
        const newElectronicProduct = products.find(p => p.id === 309);
        if (newElectronicProduct) {
          console.log('24. 전자제품을 업데이트합니다.');
          return updateProduct(newElectronicProduct.id, { price: 55000, description: '업데이트된 전자제품 설명' });
        }
      }
    })
    .then(() => {
      // 8. 아티클 업데이트 예시
      if (articles.length > 0) {
        const newArticle = articles.find(a => a.id === 308);
        if (newArticle) {
          console.log('25. 아티클을 업데이트합니다.');
          return updateArticle(newArticle.id, { content: '업데이트된 아티클 내용' });
        }
      }
    })
    .then(() => {
      // 9. 상품 삭제 예시
      if (products.length > 0) {
        const newProduct = products.find(p => p.id === 308);
        if (newProduct) {
          return removeProduct(newProduct.id);
        }
      }
    })
    .then(() => {
      // 10. 전자제품 삭제 예시
      if (products.length > 0) {
        const newElectronicProduct = products.find(p => p.id === 309);
        if (newElectronicProduct) {
          return removeProduct(newElectronicProduct.id);
        }
      }
    })
    .then(() => {
      // 11. 아티클 삭제 예시
      if (articles.length > 0) {
        const newArticle = articles.find(a => a.id === 308);
        if (newArticle) {
          return removeArticle(newArticle.id);
        }
      }
    })
    .then(() => {
      // 12. 좋아요 추가
      if (articles.length > 0) {
        console.log('26. 아티클에 좋아요를 추가합니다.');
        articles[0].like();
        console.log('27. 업데이트된 아티클:', articles[0]);
      }
      // 13. 찜하기 추가
      if (products.length > 0) {
        console.log('28. 상품에 찜하기를 추가합니다.');
        products[0].favorite();
        console.log('29. 업데이트된 상품:', products[0]);
      }
    })
    .catch(error => {
      console.error('작업 중 오류가 발생했습니다:', error);
    })
    .finally(() => {
      console.log('=== 작업 종료 ===');
    });
};

run();
