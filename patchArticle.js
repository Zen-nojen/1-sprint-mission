console.log("=== patchArticle ===");
const patchArticleRes = await articleService.patchArticle(
		  articleId,
		  "게시글 제목 1 수정",
		  "게시글 내용 1 수정",
		  "https://example.com/images/2"
);
console.log(patchArticleRes.data);
