/// <reference types="cypress" />


describe('Teste para remocao do contato', () => {
    // Teste para a remoção de um contato 
    it('Deve deletar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        // Localizando o contato que você deseja remover na lista
        cy.contains('Bruna Costa')
        // Localizando o botão de remover e clicando para deletar 
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
        // Verificando se o contato ainda está na lista
        cy.contains('Bruna Costa').should('not.exist')
    })
})