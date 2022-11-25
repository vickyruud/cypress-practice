
describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

  })
  it('passes', () => {
    const typedText = 'Buy Milk'

    cy.get('[data-cy="input"]')
      .type(typedText)
    .should('have.value', typedText)
  })
})