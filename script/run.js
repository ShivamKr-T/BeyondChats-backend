require("dotenv").config();
const getArticles = require("./updateArticles");
const searchGoogle = require("./googleSearch");
const scrapeContent = require("./scrapeContent");
const rewrite = require("./rewriteArticle");
const axios = require("axios");

(async () => {
  const articles = await getArticles();

  for (let article of articles) {
    const links = await searchGoogle(article.title);

    const ref1 = await scrapeContent(links[0]);
    const ref2 = await scrapeContent(links[1]);

    const updatedContent = await rewrite(article.content, ref1, ref2);

    await axios.post("http://localhost:5000/articles", {
      title: article.title,
      content: updatedContent,
      isUpdated: true,
      references: links
    });

    console.log("Updated:", article.title);
  }
})();
