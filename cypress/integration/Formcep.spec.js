// <reference types="cypress" />
const config = {
    'project' : '/form-cep'
}

context('Testing page CEP', () => {
    before(()=>{
        cy.visit(config.project)
    })
    const cep ='04062003',
        bairro = 'Indianópolis',
        logradouro = 'Avenida Indianópolis';

    it('should response URL JSON',()=>{
        cy.get('[data-testid="cep"]').type(cep)
        cy.request('https://viacep.com.br/ws/'+cep+'/json/').as('resp')
        cy.get('@resp').should((response) => {
            expect(response.body).to.have.property('bairro', bairro)
            expect(response.body).to.have.property('logradouro', logradouro)
        })

    })

    it('should result cep',()=>{
        cy.get('[data-testid="bairro"]').should('have.value',bairro)
        cy.get('[data-testid="logradouro"]').should('have.value',logradouro)
    })
})