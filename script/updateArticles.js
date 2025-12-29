const axios = require("axios");

async function getArticles() {
  const res = await axios.get("http://localhost:5000/articles");
  return res.data;
}

module.exports = getArticles;
