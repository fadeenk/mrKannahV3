describe(`Navigation checks for mobile viewport`, () => {
  const navigationSelector = '#mobileNav';
  const drawerButtonSelector = '#drawerButton';
  beforeEach(() => {
    cy.viewport('iphone-6')
    cy.visit('/')
    cy.injectAxe()
  })
  it("should display navigation correctly", () => {
    const expectedChildren = 7
    cy.get(drawerButtonSelector).click()
    cy.get(navigationSelector).children(':visible').should('have.length', expectedChildren)
    cy.checkA11y()
  })
  it("should check the submenu works properly and is accessible", () => {
    cy.get(drawerButtonSelector).click()
    cy.get('#toggle\\/about\\/').click()
    cy.get(navigationSelector).children(':visible').should('have.length', 5)
    cy.checkA11y()
  })
})

describe(`Navigation checks for desktop viewport`, () => {
  const viewport = [1024, 768];
  const navigationSelector = '#navigation > div > div';
  const aboutDropdownSelector = '#dropdown\\/about\\/ > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul'
  beforeEach(() => {
    cy.viewport(viewport[0], viewport[1])
    cy.visit('/')
    cy.injectAxe()
  })
  it("should display navigation correctly", () => {
    const expectedChildren = 5
    cy.get(navigationSelector).children(':visible').should('have.length', expectedChildren)
    cy.checkA11y()
  })
  it("should check the submenu works properly and is accessible", () => {
    cy.get(navigationSelector).children(':visible').contains('About').click();
    cy.get(aboutDropdownSelector).children(':visible').should('have.length', 3)
    cy.get(navigationSelector).children(':visible').should('have.length', 5)
    cy.checkA11y()
  })
})


