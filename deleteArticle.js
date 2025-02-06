console.log("< deleteArticle >");
const deleteArticleRes = await articleService.deleteArticle(articleId);
console.log(deleteArticleRes.data);
