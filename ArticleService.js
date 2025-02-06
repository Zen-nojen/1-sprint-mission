//Article 클래스
export class Article {
    constructor({ title, content, writer, likeCount, image, createdAt }) {
        this.title = title; //제목
        this.content = content; //내용
        this.writer = writer; //작성자
        this.likeCount = likeCount; //좋아요 수
        this.image = image; //사진
        this.createdAt = new Date(); //생성일자
    }

    like() {
        this.likeCount++;
    }
}

const url = new URL('https://panda-market-api-crud.vercel.app/articles');

//기사 리스트 가져오기 메소드
export const getArticleList = (queryParams = { page: 1, pageSize: 10, keyword: '' }) => {
    return fetch(`${url}?${queryParams}`)
        .then((res) => {
            return res.json();
        })
        .catch((error) => {
            console.log(error);
        });
};

//특정 기사 가져오기 메소드
export const getArticle = (id) => {
    fetch(`${url}/${id}`)
        .then((res) => {
            return res.json();
        })
        .then((body) => {
            console.log(body);
        })
        .catch((error) => {
            console.log(error);
        });
};

//기사 만들기 메소드
export const createArticle = ({ title, content, image }) => {
    const articleData = { title, content, image };
    //Promise 체인 밖에서 return 하여 id 값을 반환
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(articleData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error('기사 생성 실패');
            }
            return res.json();
        })
        .then((body) => {
            console.log(body);
            return body.id;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

//기사 업데이트 메소드
export const patchArticle = (id, updatedData) => {
    return fetch(`${url}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error('기사 업데이트 실패');
            }
            return res.json();
        })
        .then((body) => {
            return body;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

//기사 삭제하기 메소드
export const deleteArticle = (id) => {
    return fetch(`${url}/${id}`, {
        method: 'DELETE',
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error('기사 삭제 실패');
            }
            return res.json();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};
