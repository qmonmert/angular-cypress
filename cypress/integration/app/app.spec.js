describe('App Test', () => {
  it('clicking "Cypress" navigates to a new url', () => {
    cy.visit('');

    cy.contains('Cypress').click();

    cy.url().should('include', '/cypress')
  })
});