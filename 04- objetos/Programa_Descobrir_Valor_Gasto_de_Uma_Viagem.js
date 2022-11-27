/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto medio de combustivel por kilometro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustivel nos dê o valor
    gasto em reais para realizar este percurso.
*/    

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
        
   }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    } 
}

const celta = new Carro('Chevrolet', 'Preto', 1 / 12)
celta.calcularGastoDePercurso(70,5);
console.log(celta.calcularGastoDePercurso(70, 5));

const palio = new Carro ('Fiat', 'Branco', 1 / 10);
console.log(palio.calcularGastoDePercurso(70, 5));
