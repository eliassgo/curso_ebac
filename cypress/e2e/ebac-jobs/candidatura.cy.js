/// <reference types="cypress" />

// Descrição de qual teste será executado
describe('Testes para a página de candidatura', () => {
    // Executar uma ação antes de cada teste 
    beforeEach(() => {
        // Buscar o site que será executado o teste 
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    // 1º teste - Descrição do resultado do teste
    it('Deve levar o usuário até a página de inscrição', () => {
        // Executando um clique no primeiro elemento da class 
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        // expectativa do teste. Todo teste deve ter uma expectativa
        cy.get('input').should('have.length', 7)
        // Tirar print do teste 
        cy.screenshot('tela-incricao')
    })

    // 2º teste - Descrição do resultado do teste
    it('Deve preencher o formulário de inscrição', () => {
        // Executando um clique no primeiro elemento da class 
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        // executando uma ação nos elementos obtidos com 'cy.get'
        cy.get('input[name="nome-completo"]').type('elias gomes')
        cy.get('input[name="email"]').type('eliasgo221@gmail.com')
        cy.get('input[name="telefone"]').type('00 000000000')
        cy.get('input[name="endereco"]').type('Imperatriz/Ma')
        cy.get('#windows').check()
        cy.get('select[name="escolaridade"]').select('bacharelado')
        cy.get('.Aplicacao_button__tw2AE').click()

        // Capturando um evento de alerta na janela do navegador
        cy.on('window:alert', (conteudo) => {
            // Verificando se o conteúdo do alerta contém a mensagem 'Obrigado pela candidatura!'
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-incricao-preenchido')
    })
})