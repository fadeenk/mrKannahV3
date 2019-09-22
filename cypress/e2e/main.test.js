const pages = require('../fixtures/pages.json');

const viewports = ['iphone-6', [1024, 768]];
const slowPages = ['/resume/', '/blog/'];
pages.forEach((page) => {
  describe(`Testing ${page}`, () => {
    viewports.forEach((viewport) => {
      describe(`Accessibility & navigation checks for ${viewport}`, () => {
        const isMobile = viewport === 'iphone-6';
        const navigationSelector = isMobile ? '#mobileNav' : '#navigation > div > div > div';
        const drawerButtonSelector = '#drawerButton';
        beforeEach(() => {
          if (Array.isArray(viewport)) {
            cy.viewport(viewport[0], viewport[1])
          } else {
            cy.viewport(viewport)
          }
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
        it.skip("should display navigation correctly", () => {
          const expectedChildren = isMobile ? 7 : 5
          if (isMobile) {
            cy.get(drawerButtonSelector).click()
          }
          cy.get(navigationSelector).children(':visible').should('have.length', expectedChildren)
          cy.checkA11y()
        })
        it.skip("should check the submenu works properly and is accessible", () => {
          if (isMobile) {
            cy.get(drawerButtonSelector).click()
            cy.get('#toggle\\/about\\/').click()
          } else {
            cy.get(navigationSelector).children(':visible').contains('About').click();
            cy.get('#dropdown\\/about\\/ > div > ul').children(':visible').should('have.length', 3)
          }
          cy.get(navigationSelector).children(':visible').should('have.length', 5)
          cy.checkA11y()
        })
      })
    })
  })
})
