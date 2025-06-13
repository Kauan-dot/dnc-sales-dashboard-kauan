describe('Check if profile page renders the correct components', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/cadastro')
  })

  it('should steps 1 and 2 works', () => {
    cy.get('form').should('be.visible')
    cy.get('input[type="text"]').type('Tester Cypress')
    cy.get('input[type="email"]').type('teste888@teste.com.br')
    cy.get('input[type="tel"]').type('123456789')
    cy.get('button[type="submit"]').click()
    cy.get('input[type="password"]').type('@DNCReact888#')
    cy.get('button[type="submit"]').should('be.visible')
  })
})
