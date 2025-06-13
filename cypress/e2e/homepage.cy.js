describe('Check if profile page renders the correct components', () => {
  beforeEach(() => {
    cy.login('teste1515@dnc.com.br', '@DNCReact1515#')
    cy.visit('http://localhost:5173/home')
  })

  it('should display total sales', () => {
    cy.get('#total-sales').should('be.visible')
  })
  it('should display month goals', () => {
    cy.get('#month-goal').should('be.visible')
  })
  it('should display total leads', () => {
    cy.get('#total-leads').should('be.visible')
  })
  it('should display month sales chart', () => {
    cy.get('#month-sales-chart').should('be.visible')
  })
  it('should display sales stars', () => {
    cy.get('#sales-stars').should('be.visible')
  })
  it('should display news', () => {
    cy.get('#news').should('be.visible')
  })
  it('should display years sales chart', () => {
    cy.get('#years-sales-chart').should('be.visible')
  })
})
