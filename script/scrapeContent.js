const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeContent(url) {
  const res = await axios.get(url);
  const $ = cheerio.load(res.data);

  let text = "";
  $("p").each((i, el) => {
    text += $(el).text() + "\n";
  });

  return text;
}

module.exports = scrapeContent;
