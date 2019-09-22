const request = require('graphql-request').request;
const fs = require('fs');
const query = `{
  allSitePage {
    edges {
      node {
        path
      }
    }
  }
}`;
const excludedPages = ["/dev-404-page/", "/goals/"];
request('http://localhost:8000/___graphql', query).then(data => {
  const pages = data.allSitePage.edges.map((edge) => edge.node.path).filter((page) => {
    return !excludedPages.includes(page)
  }).sort();
  fs.writeFileSync('./cypress/fixtures/pages.json', JSON.stringify(pages))
});
