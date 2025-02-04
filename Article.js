export default class Article {
  constructor(title, content, writer = "unknown", likeCount) {
    this.title = title;
    this.content = content;
    this.writer = writer;
    this._likeCount = likeCount;
  }

  set likeCount(value) {
    console.log("좋아요를 통해서만 변경할 수 있습니다.");
  }

  get likeCount() {
    return this._likeCount;
  }

  like() {
    this._likeCount++;
  }
}
