const mockTest = require('../mocks/mocks');

describe('Test creation', () => {
  it('should make a test with the informtion given', () => {
    cy.visit('/')
      .get('[data-testid=create-test-btn]')
      .click()
      .get('[name=question]')
      .type(mockTest.qs[0].question)
      .get('[name=a')
      .type(mockTest.qs[0].ops[0].op)
      .get('[name=b')
      .type(mockTest.qs[0].ops[1].op)
      .get('[name=c')
      .type(mockTest.qs[0].ops[2].op)
      .get('[name=d')
      .type(mockTest.qs[0].ops[3].op)
      .get('[name=answer]')
      .select('a')
      .get('button')
      .contains(/Add Question/i)
      .click()
      .get('[data-testid=question-card]')
      .get('[data-testid=question-card-title]')
      .should('have.text', mockTest.qs[0].question)
      .get('[data-testid=question-card-q]')
      .eq(0)
      .should('have.text', mockTest.qs[0].ops[0].op)
      .get('[data-testid=question-card-q]')
      .eq(1)
      .should('have.text', mockTest.qs[0].ops[1].op)
      .get('[data-testid=question-card-q]')
      .eq(2)
      .should('have.text', mockTest.qs[0].ops[2].op)
      .get('[data-testid=question-card-q]')
      .eq(3)
      .should('have.text', mockTest.qs[0].ops[3].op)
      .get('[name=question]')
      .clear()
      .type(mockTest.qs[1].question)
      .get('[name=a')
      .clear()
      .type(mockTest.qs[1].ops[0].op)
      .get('[name=b')
      .clear()
      .type(mockTest.qs[1].ops[1].op)
      .get('[name=c')
      .clear()
      .type(mockTest.qs[1].ops[2].op)
      .get('[name=d')
      .clear()
      .type(mockTest.qs[1].ops[3].op)
      .get('[name=answer]')
      .select('b')
      .get('button')
      .contains(/Add Question/i)
      .click()
      .get('[name=question]')
      .clear()
      .type(mockTest.qs[2].question)
      .get('[name=a')
      .clear()
      .type(mockTest.qs[2].ops[0].op)
      .get('[name=b')
      .clear()
      .type(mockTest.qs[2].ops[1].op)
      .get('[name=c')
      .clear()
      .type(mockTest.qs[2].ops[2].op)
      .get('[name=d')
      .clear()
      .type(mockTest.qs[2].ops[3].op)
      .get('[name=answer]')
      .select('c')
      .get('button')
      .contains(/Add Question/i)
      .click()
      .get('[name=question]')
      .clear()
      .type(mockTest.qs[3].question)
      .get('[name=a')
      .clear()
      .type(mockTest.qs[3].ops[0].op)
      .get('[name=b')
      .clear()
      .type(mockTest.qs[3].ops[1].op)
      .get('[name=c')
      .clear()
      .type(mockTest.qs[3].ops[2].op)
      .get('[name=d')
      .clear()
      .type(mockTest.qs[3].ops[3].op)
      .get('[name=answer]')
      .select('d')
      .get('button')
      .contains(/Add Question/i)
      .click()
      .get('[data-testid=question-create-title]')
      .type(mockTest.title)
      .get('button')
      .contains(/Save Test/i)
      .click();
  });
});
