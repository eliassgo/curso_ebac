// Função Construtora
class Alunos {
    constructor(nomeAluno, notaAluno) {
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }

    // Método
    exibeNota() {
        console.log(`Aluno: ${this.nome} | nota: ${this.nota}`);
    }
    exibeNotaAprovavel() {
        console.log(`Aluno(APROVADO): ${this.nome} | nota: ${this.nota}`);
    }
}

// Função para retornar alunos com nota maior ou igual à 6
function filtraNotas(aluno) {
    return aluno.nota >= 6
}

// Array de alunos com os objetos da class Alunos
const alunos = [
    new Alunos('João', 10),
    new Alunos('Pedro', 7),
    new Alunos('Julia', 5),
    new Alunos('Maria', 4),
    new Alunos('Chris', 9),
];


// Constate para guardar os alunos com nota aprovável
const alunosNotaAprovavel = alunos.filter(filtraNotas);
//console.log(alunosNotaAprovavel)

// Saída personalizada
alunosNotaAprovavel.forEach(aluno => aluno.exibeNotaAprovavel());

// Exibindo a nota de todos os alunos
//alunos.forEach(aluno => aluno.exibeNota());
