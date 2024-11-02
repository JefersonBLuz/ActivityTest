describe('ActivityTest', () => {
beforeEach(() => {
  cy.visit('http://localhost:3000')
})


 it('Cenários de teste com Cypress', () => {
  cy.get('#email').type("rafael@email.com")
  cy.get('[type="password"]').type('Rafael123')
  cy.get('[type="button"] > a').click()
  cy.get('#firstName').type("Rafael")
  cy.get('#lastName').type("Santana")
  cy.get('#email').type('rafael@email.com')
  cy.get('#password').type('Rafael123')
  cy.get('#confirmPassword').type('Rafael123')
  cy.get('#cpf').type('000.000.000-00')
  cy.get('button').click()


  })
})