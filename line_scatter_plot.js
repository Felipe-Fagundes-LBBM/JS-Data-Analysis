// Comentário de linha única

/* 
   Comentário
   de múltiplas
   linhas
*/




//Variáveis e Constantes

let x = 5;
var y = 10;
const PI = 3.14;

let nome = "João";
let idade = 25;



//Tipos de Dados

let inteiro = 10;
let decimal = 3.14;
let texto = "Oii";
let booleano = true;
let array = [1,2,3];
let objeto = {chave: "valor"};



//Operadores:

let soma = 5 + 3;
let subtracao = 10 - 4;
let multiplicacao = 3 * 4;
let divisao = 12 / 3;
let modulo = 10 % 3;

let igualdade = (5 === 5);
let diferente = (10 !== 5);



      //Estrutura de Controle

// Condicional if
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// Loop for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Loop while
let contador = 0;
while (contador < 5) {
  console.log(contador);
  contador++;
}


           //Funções

function saudacao(nome) {
  return "Olá, " + nome + "!";
}

let mensagem = saudacao("Maria");
console.log(mensagem);
