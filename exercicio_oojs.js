// Definindo a classe tênis
function Tenis(marca, modelo, cor, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.tipo = tipo;
    // Método
    this.adquirir = function () {
        console.log("Comprar");
    }
}

// Classes herdeiras
function TenisSportwear(marca, modelo, cor) {
    Tenis.call(this, marca, modelo, cor);
    this.tipo = 'Sportwear';
}

function TenisCasual(marca, modelo, cor) {
    Tenis.call(this, marca, modelo, cor);
    this.tipo = 'Casual';
}
function TenisCorrida(marca, modelo, cor) {
    Tenis.call(this, marca, modelo, cor);
    this.tipo = 'Ruuning';
}

// Instâncias(objetos)
const tenisDoJoao = new TenisCorrida('Adidas', 'Pureboost', 'Halo Silver');
const tenisDaMaria = new TenisSportwear('Adidas', 'Ultraboost', 'Off white');
const tenisDoPedro = new TenisCasual('Nike', 'Air Force', 'White');

console.log(tenisDoJoao)
console.log(tenisDaMaria)
console.log(tenisDoPedro)