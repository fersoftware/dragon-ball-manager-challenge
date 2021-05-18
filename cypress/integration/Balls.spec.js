// <reference types="cypress" />

import React from "react";

const config = {
    'project' : '/dragon-ball-manager'
}

context('Testing dragon balls', () => {
    before(()=>{
        cy.visit(config.project)
    })

    it('Should render all dragon balls',() =>{
        cy.get('[data-cy="card"]').should('have.length',7)
    })

    it('Should show not found balls label and button', () => {
        cy.get('[data-cy="msg-not-found"]').should('have.length.greaterThan',0)
        cy.get('[data-cy="msg-success"]').should('have.length.greaterThan',0)
    })

    it('Should open modal to validate', () => {
        cy.get('[data-cy="btn-found-ball"]').eq(0).click()
        cy.get('[data-testid="validateBall"]').should('exist')
        cy.get('[data-testid="backValidateBall"]').click()
    })

    it('Should show error if you enter the wrong code', () => {
        cy.get('[data-cy="btn-found-ball"]').eq(0).click()
        cy.get('[data-testid="code"]').type('3')
        cy.get('[data-testid="validateBall"]').click()
        cy.get('[data-testid="modaltextError"]').should('contain.text', 'Código inválido!')
        cy.get('[data-testid="backError"]').click()
        cy.get('[data-testid="backValidateBall"]').click()
    })

    it('Should enter the current code dragon ball', () => {
        cy.get('[data-cy="btn-found-ball"]').eq(0).should('exist')
        cy.get('[data-cy="btn-found-ball"]').eq(0).click()
        cy.get('[id="code"]').type('2')
        cy.get('[data-testid="validateBall"]').click()
        cy.get('[data-cy="msg-success"]').eq(1).should('contain.text', 'Encontrada')
    })
})

context('Should filter balls',() => {
    before(() => {
        cy.visit(config.project)
    })

    it('Should visible my balls',() =>{
        cy.get('[data-testid="filter"]').select('me')
        cy.get('[data-cy="card"]').should('have.length',4)
    })

    it('Should visible not me balls',() =>{
        cy.get('[data-testid="filter"]').select('notme')
        cy.get('[data-cy="card"]').should('have.length',3)
    })

    it('Should visible all balls',() =>{
        cy.get('[data-testid="filter"]').select('all')
        cy.get('[data-cy="card"]').should('have.length',7)
    })
})