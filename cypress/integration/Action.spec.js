// <reference types="cypress" />

const config = {
    'project' : '/dragon-ball-manager'
}

context('Testing shenlong invocation', () => {
    before(()=>{
        cy.visit(config.project)
    })

    //Execute Terminal: REACT_APP_PROFILE=SUCCESS npm start
    //Removal 'skip'
    it.skip('Should invocate if user have 7 dragon balls', () => {
        cy.get('[data-testid="card-shenlong"]').should('exist')
        cy.get('[data-testid="invoke-button"]').click()
        cy.get('[data-testid="shenlong"]').should('exist')
    })

    it('Should not invocate if user doesnt have 7 dragon balls', () => {
        cy.get('[data-testid="card-shenlong"]').should('exist')
        cy.get('[data-testid="invoke-button"]').click()
        cy.get('[data-testid="modaltext"]').should('contain.text', 'Você não tem todas as esferas para invocar o shenlong')
        cy.get('[data-testid="back"]').click()
    })
})