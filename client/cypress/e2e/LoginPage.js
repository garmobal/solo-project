describe('LoginPage', () => {
  it('can visit the login page', () => {
    cy.visit('/')
      .get('[data-testid=logout]')
      .should('exist')
      .click()
      .get('input[name=personname]')
      .type('vader_loveislove')
      .get('input[type=submit]')
      .click()
      .get('[data-testid=logout]')
      .should('exist');
  });
});
