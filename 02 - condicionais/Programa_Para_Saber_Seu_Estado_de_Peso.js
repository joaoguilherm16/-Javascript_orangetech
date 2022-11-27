// Faça um Programa para saber se o seu Imc está 'Acima do Peso', 'Peso Normal', 'Acima do Peso', 'Obeso' ou em 'Obesidade Grave'.


const peso = 69;
const altura = 1.70;
const imc = peso / Math.pow(altura, 2);
console.log (imc);

if (imc < 18.5) {
    console.log ('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log ('Acima do Peso');
} else if(imc >=30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obsedidade Grave');
}





