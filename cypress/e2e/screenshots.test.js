const pages = require("../fixtures/pages.json");

const viewports = ["iphone-6", [1024, 768]];
const VIEWPORT_NAMES = { DESKTOP: "desktop", MOBILE: "mobile" };

// const viewports = ['iphone-6'];
const slowPages = [
  "/resume/",
  "/blog/",
  "/blog/developer-week-conference-recap",
];
viewports.forEach((viewport) => {
  const viewPortName =
    viewport === "iphone-6" ? VIEWPORT_NAMES.MOBILE : VIEWPORT_NAMES.DESKTOP;
  const failureThresholds = {
    "/": {
      [VIEWPORT_NAMES.DESKTOP]: 0.5,
      [VIEWPORT_NAMES.MOBILE]: 0.2,
    },
    "/blog/developer-week-conference-recap": {
      [VIEWPORT_NAMES.DESKTOP]: 2.6,
      [VIEWPORT_NAMES.MOBILE]: 3.2,
    },
  };
  describe(`Testing Accessibility on ${viewPortName} viewport`, () => {
    beforeEach(() => {
      if (Array.isArray(viewport)) {
        cy.viewport(viewport[0], viewport[1]);
      } else {
        cy.viewport(viewport);
      }
      cy.wait(150);
    });
    pages.forEach((page) => {
      describe(`Screenshots for ${page}`, () => {
        beforeEach(() => {
          cy.visit(page);
          if (slowPages.includes(page)) {
            cy.wait(2000);
          } else {
            cy.wait(700);
          }
        });
        it("Should match previous screenshot", () => {
          const options = { failureThresholdType: "percent" };
          if (failureThresholds[page]) {
            options.failureThreshold = failureThresholds[page][viewPortName];
          }
          cy.matchImageSnapshot(viewPortName + page.replace("/", "-"), options);
        });
      });
    });
  });
});
