const pages = require('../fixtures/pages.json');

// const viewports = ['iphone-6', [1024, 768]];
const viewports = ['iphone-6'];
const slowPages = ['/resume/', '/blog/'];
viewports.forEach((viewport) => {
  describe(`Testing ${viewport}`, () => {
    beforeEach(() => {
      if (Array.isArray(viewport)) {
        cy.viewport(viewport[0], viewport[1])
      } else {
        cy.viewport(viewport)
      }
    })
    pages.forEach((page) => {
      describe(`Accessibility & navigation checks for ${page}`, () => {
        beforeEach(() => {
          cy.visit(page)
          cy.injectAxe()
          if (slowPages.includes(page)) {
            cy.wait(500)
          } else {
            cy.wait(200)
          }
        })
        it("Has no detectable a11y violations", () => {
          cy.checkA11y()
        })
      })
    })
  })
})
