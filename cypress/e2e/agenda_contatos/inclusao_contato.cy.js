/// <reference types="cypress" />

describe('Teste de inclusão de um contato', () => {
    // Teste para inclusão de um contato
    it('Deve adicionar um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        // executando uma ação nos elementos obtidos com 'cy.get'
        cy.get('input[type="text"]').type('elias gomes')
        cy.get('input[type="email"]').type('eliasgo221@gmail.com')
        cy.get('input[type="tel"]').type('00 000000000')
        cy.get('.adicionar').click()
        cy.contains('elias gomes')
        cy.contains('00 000000000')
        cy.contains('eliasgo221@gmail.com')
    })

})