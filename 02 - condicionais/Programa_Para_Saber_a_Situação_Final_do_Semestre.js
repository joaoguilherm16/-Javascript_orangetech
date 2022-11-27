// Faça um Programa com a nota do aluno, para saber sua situação final no semestre.


const nota1 = 8;
const nota2 = 6;
const nota3 = 4;
const media = (nota1 + nota2 + nota3) / 3;
console.log (media);

if (media < 5) {
    console.log('Reprovação');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Passou de semestre');
}

    
















