"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Função Construtora
var Alunos = /*#__PURE__*/function () {
  function Alunos(nomeAluno, notaAluno) {
    _classCallCheck(this, Alunos);
    this.nome = nomeAluno;
    this.nota = notaAluno;
  }

  // Método
  _createClass(Alunos, [{
    key: "exibeNota",
    value: function exibeNota() {
      console.log("Aluno: ".concat(this.nome, " | nota: ").concat(this.nota));
    }
  }, {
    key: "exibeNotaAprovavel",
    value: function exibeNotaAprovavel() {
      console.log("Aluno(APROVADO): ".concat(this.nome, " | nota: ").concat(this.nota));
    }
  }]);
  return Alunos;
}(); // Função para retornar alunos com nota maior ou igual à 6
function filtraNotas(aluno) {
  return aluno.nota >= 6;
}

// Array de alunos com os objetos da class Alunos
var alunos = [new Alunos('João', 10), new Alunos('Pedro', 7), new Alunos('Julia', 5), new Alunos('Maria', 4), new Alunos('Chris', 9)];

// Constate para guardar os alunos com nota aprovável
var alunosNotaAprovavel = alunos.filter(filtraNotas);
//console.log(alunosNotaAprovavel)

// Saída personalizada
alunosNotaAprovavel.forEach(function (aluno) {
  return aluno.exibeNotaAprovavel();
});

// Exibindo a nota de todos os alunos
//alunos.forEach(aluno => aluno.exibeNota());