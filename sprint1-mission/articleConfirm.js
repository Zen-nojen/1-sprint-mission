console.log("< Article >");
const getArticleListRes = await articleService.getArticleList(1, 10);
const articles = getArticleListRes.data.list.map((element) => {
		  const article = new Article(element.title, element.content);
		  article.like();
		  article.like();
		  return article;
});
console.log(articles);
