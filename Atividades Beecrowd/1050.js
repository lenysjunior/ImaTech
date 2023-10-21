/* 
Leia um número inteiro que representa um código de DDD para discagem interurbana. 
Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:




Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
DDD nao cadastrado

Entrada
A entrada consiste de um único valor inteiro.

Saída
Imprima o nome da cidade correspondente ao DDD existente na entrada. I
mprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let ddd = parseInt(lines.shift());

switch (ddd){
    case 61: console.log("Brasilia"); break;
    case 71: console.log("Salvador"); break;
    case 11: console.log("Sao Paulo"); break;
    case 21: console.log("Rio de Janeiro"); break;
    case 32: console.log("Juiz de Fora"); break;
    case 19: console.log("Campinas"); break;
    case 27: console.log("Vitoria"); break;
    case 31: console.log("Belo Horizonte"); break;
    default: console.log("DDD nao cadastrado");
}