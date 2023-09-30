/// <reference types="cypress" />

describe('Testes para alteração de um contato', () => {

    // Teste para alteração de um contato
    it('Deve editar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        // Localizando o contato que será editado
        cy.contains('Felice Lacerda')
        // Obtendo o botão de editar e clicando para editar
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
        // Obtendo o campo de nome e adicionando uma string 
        cy.get('input[type="text"]').type(' Silva')
        // Localizando o botão de confirmar para alterar 
        cy.get('.alterar').click()
        // Verificando se o contato foi editado
        cy.contains('Felice Lacerda Silva')
    })

})