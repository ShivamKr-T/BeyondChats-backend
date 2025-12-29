// Mock LLM for article rewriting
// This simulates how an LLM would enhance content

async function rewrite(originalContent, ref1Content, ref2Content) {
  return `
# Updated Article (AI-Enhanced Version)

## Introduction
${originalContent?.slice(0, 300) || "This article has been enhanced using AI-based analysis."}

---

## Enhanced Content
This article has been rewritten by analyzing the structure, tone, and formatting
of top-ranking articles on Google. The content has been improved to be:
- More structured
- SEO friendly
- Easier to read
- Inspired by authoritative sources

---

## Key Improvements
- Clear headings and sections
- Improved flow and readability
- Better presentation of ideas
- Reference-based enhancement

---

## References
1. Reference Article 1
2. Reference Article 2
`;
}

module.exports = rewrite;
