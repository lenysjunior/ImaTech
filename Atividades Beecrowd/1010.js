/* 
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, 
respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, 
lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let vt1 = lines.shift().split(" ");
let vt2 = lines.shift().split(" ");

let cp1 = vt1.shift();
let np1 = vt1.shift();
let vu1 = vt1.shift();
let vp1 = np1 * vu1;

let cp2 = vt2.shift();
let np2 = vt2.shift();
let vu2 = vt2.shift();
let vp2 = np2 * vu2;

let tp = vp1+vp2;

console.log("VALOR A PAGAR: R$ "+ tp.toFixed(2));