const teacherUsername = 'vader_loveislove';
const teacherPassword = 'aligator1';

describe('LoginPage test', () => {
  context('Test inputs', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should type the teacher username in the input[name=personname]', () => {
      cy.get('[data-testid=logout]')
        .click()
        .get('input[name=personname]')
        .type(teacherUsername)
        .should('have.value', teacherUsername);
    });

    it('should type the teacher password in the input[name=password]', () => {
      cy.get('[data-testid=logout]')
        .click()
        .get('input[name=password]')
        .type(teacherPassword)
        .should('have.value', teacherPassword);
    });

    it('should log in as a teacher', () => {
      cy.get('[data-testid=logout]')
        .click()
        .get('input[name=personname]')
        .type(teacherUsername)
        .get('input[name=password]')
        .type(teacherPassword)
        .get('input[type=submit]')
        .click()
        .get('[data-testid=students]')
        .should('exist');
    });
  });
});
