describe('Login Flow Correct Credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with valid creditials', () => {
    cy.get('input[type="email"]').type('teste1515@dnc.com.br')
    cy.get('input[type="password"]').type('@DNCReact1515#')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/home')
    cy.get('header').should('be.visible')
  })
})

describe('Login Flow Invalid Credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with valid creditials', () => {
    cy.get('input[type="email"]').type('um@dnc.com.br')
    cy.get('input[type="password"]').type('@DNCeact888#')
    cy.get('button[type="submit"]').click()
    cy.contains().should('Enail e/ou senha inválidos').should('be.visible')
  })
})