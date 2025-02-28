console.log("< getArticle >");
const getArticleRes = await articleService.getArticle(articleId);
console.log(getArticleRes.data);
