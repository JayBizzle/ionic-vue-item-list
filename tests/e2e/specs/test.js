
describe('Logout', () => {

  it('can logout', () => {
    cy.viewport('iphone-x')

    cy.visit('/')

    cy.get('.employeeItem').should('have.length', 7)

    cy.get('ion-card-subtitle').should('contain', 7)

    cy.get('.employeeItem').first().find('ion-button').click()

    cy.get('.employeeItem').should('have.length', 6)

    cy.get('ion-card-subtitle').should('contain', 6)

    cy.get('ion-searchbar').type('Alan')

    cy.get('.employeeItem').should('have.length', 1)
    
    cy.get('ion-searchbar').clear()
    
    cy.get('.employeeItem').should('have.length', 6)

    cy.get('ion-card-subtitle').should('contain', 6)
  })
})
