/*
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. 
Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, 
caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". 
Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, 
com uma mensagem correspondente conforme exemplo abaixo. 
Imprima sempre o final de linha após cada mensagem.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const valores = input.split(' ');

const A = parseFloat(valores[0]);
const B = parseFloat(valores[1]);
const C = parseFloat(valores[2]);

const delta = B * B - 4 * A * C;

if (A === 0 || delta < 0) {
  console.log("Impossivel calcular");
} else {
  const raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
  const raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
  console.log("R1 = " + raiz1.toFixed(5));
  console.log("R2 = " + raiz2.toFixed(5));
}