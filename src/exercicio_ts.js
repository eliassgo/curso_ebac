"use strict";
// Função de multiplicação 
function multiplicacao(a, b) {
    return a * b;
}
// Constante para receber o resultado da multiplicação 
const resultado = multiplicacao(2, 3);
console.log(resultado);
// Função para saudação
function saudacao(nomeCompleto) {
    const nome = nomeCompleto.split(' ');
    const primeiroNome = nome[0];
    console.log(`Olá ${primeiroNome}`);
}
// Constantes para receber nome e colocar o nome na função de saudação 
const nomeCompleto = 'Elias Gomes De Oliveira Júnior';
const saudacaoMensagem = saudacao(nomeCompleto);
