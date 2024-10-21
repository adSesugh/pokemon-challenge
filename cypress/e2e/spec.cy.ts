describe("Visit the PokeDex app", () => {
  it('passes', () => {
    cy.viewport('macbook-13')
    cy.visit('http://127.0.0.1:3000')

    cy.wait(3000)

    cy.get("input").type("Bulbasaur").wait(1000)

    //  Verify that the value has been updated
    cy.get('input').should('have.value', 'Bulbasaur')

    cy.wait(500)

    cy.get('#search').click()
  })
})
