/*O algoritmo, o usuário informa um número a ser verificado e em seguida, 
um loop while é usado para gerar a sequência de Fibonacci até que um número seja 
maior ou igual ao número informado. Em seguida, é verificado se o número informado pertence ou não à 
sequência de Fibonacci e uma mensagem é exibida no console.*/


let num = parseInt(prompt("Digite um número para verificar se ele pertence à sequência de Fibonacci: "));
let a = 0, b = 1, c;
while (a < num) {
  c = a + b;
  a = b;
  b = c;
}
if (a == num) {
  console.log(num + " pertence à sequência de Fibonacci!");
} else {
  console.log(num + " não pertence à sequência de Fibonacci!");
}