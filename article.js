// article.js

class Article {
    constructor(id, title, content, writer = '', likeCount = 0, createdAt = new Date()) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.writer = writer;
      this.likeCount = likeCount;
      this.createdAt = createdAt;
      this.images = [];
    }
  
    like() {
      this.likeCount += 1;
    }
  }
  
  export { Article };
  