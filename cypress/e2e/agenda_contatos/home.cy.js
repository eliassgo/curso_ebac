/// <reference types="cypress" />
// Testes para inclusão, alteração e remoção de um contato 
// Armazenar na branch: exercicio_cypress

describe('Testes para a home page', () => {

    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.reload()
    })

    it('Deve renderizar 3 contatos', () => {
        cy.get('.sc-iAEyYk ul').should('have.length', 3)
    })

})