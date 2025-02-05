//Article 클래스
export class Article {
    constructor({ title, content, writer, likeCount, image, createdAt }) {
        this.title = title; //제목
        this.content = content; //내용
        this.writer = writer; //작성자
        this.likeCount = likeCount; //좋아요 수
        this.image = image; //사진
        this.createdAt = createdAt; //생성일자
    }

    like() {
        this.likeCount++;
    }
}
