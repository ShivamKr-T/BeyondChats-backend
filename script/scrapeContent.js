// Mock reference article scraping
// Avoids 403 errors from Medium / Dev.to

async function scrapeContent(url) {
  console.log("Mock scraping reference:", url);

  return `
This is mock reference content scraped from ${url}.
The content represents a high-quality, well-structured article
used as inspiration for rewriting the original article.
`;
}

module.exports = scrapeContent;
