/// <reference types="cypress" />
//  npm run cypress run
// npm run cypress open 


// Descrição de qual teste será executado
describe('Testes para a home', () => {
    // Executar uma ação antes de cada teste 
    beforeEach(() => {
        // Buscar o site que será executado o teste 
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    // 1º teste - Descrição do resultado do teste
    it('Deve renderizar 4 vagas', () => {
        // Obtendo o elemento que será testado (> li = será testado apenas o filho direto da class) 
        // e o que deverá ser o resultado 
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })

    // 2º teste - Descrição do resultado do teste
    it('Deve filtrar por fullstack', () => {
        // Obtendo os elementos da class que será filtrada.
        // type = escrever no elemento da class a palavra: 'fullstack'
        cy.get('.FormVagas_form__JLt5x').type('fullstack')
        // procurar o elemento button de type submit e executar um click
        cy.get('button[type="submit"]').click()
        // esperar o elemento da class obtida tenha apenas 1 elemento li
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    })
})