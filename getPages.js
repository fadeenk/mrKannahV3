const { request } = require("graphql-request");
const fs = require("fs");

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
const excludedDynamicPages = ["/tags/", "/categories/", "/blog/"];
const templatePagesToTest = [
  "/tags/startup/",
  "/categories/personal/",
  "/blog/developer-week-conference-recap",
];

request("http://localhost:8000/___graphql", query).then((data) => {
  const paths = data.allSitePage.edges.map((edge) => edge.node.path).sort();
  let pages = paths.filter((page) => {
    if (excludedPages.includes(page)) {
      return false;
    }
    return excludedDynamicPages.every((dynamicPage) => {
      return (
        !page.startsWith(dynamicPage) ||
        (page.startsWith(dynamicPage) && page.endsWith(dynamicPage))
      );
    });
  });
  pages = [...pages, ...templatePagesToTest];
  fs.writeFileSync("./cypress/fixtures/pages.json", JSON.stringify(pages));
});
