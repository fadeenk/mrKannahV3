const pages = require('../fixtures/pages.json');

const viewports = ['iphone-6', [1024, 768]];
// const viewports = ['iphone-6'];
const slowPages = ['/resume/', '/blog/'];
viewports.forEach((viewport) => {
  describe(`Testing Accessibility on ${viewport === 'iphone-6' ? 'mobile' : 'desktop'} viewport`, () => {
    beforeEach(() => {
      if (Array.isArray(viewport)) {
        cy.viewport(viewport[0], viewport[1])
      } else {
        cy.viewport(viewport)
      }
      cy.wait(150)
    })
    pages.forEach((page) => {
      describe(`Accessibility checks for ${page}`, () => {
        beforeEach(() => {
          cy.visit(page)
          if (slowPages.includes(page)) {
            cy.wait(500)
          } else {
            cy.wait(200)
          }
          cy.injectAxe()
        })
        it("Has no detectable a11y violations", () => {
          cy.checkA11y()
        })
      })
    })
  })
})
