// Mock Google Search
// Simulates fetching top-ranking articles from Google

async function searchGoogle(query) {
  console.log("Mock Google search for:", query);

  return [
    "https://medium.com/",
    "https://dev.to/"
  ];
}

module.exports = searchGoogle;
