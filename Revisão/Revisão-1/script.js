// script.js

// Variáveis
let nome = "Juliana";
let idade = 24;
let valor = prompt("Digite um valor:");

// Concatenação
console.log("Meu nome é", nome, "e tenho", idade, "anos");
console.log("Valor digitado:", valor);

// Operações aritméticas
let num1 = 2;
let num2 = 3;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto da divisão:", resto);

// Operadores relacionais
let valor1 = 10;
let valor2 = 5;

console.log("Maior que:", valor1 > valor2);
console.log("Maior ou igual:", valor1 >= valor2);
console.log("Menor que:", valor1 < valor2);
console.log("Menor ou igual:", valor1 <= valor2);
console.log("Igual:", valor1 == valor2);
console.log("Diferente:", valor1 != valor2);

// Estrutura condicional
let idade1 = 18;
if (idade1 >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// Condicional com número
let numero = Number(prompt("Digite um número:"));
if (numero > 0) {
    console.log("É maior que 0");
} else if (numero < 0) {
    console.log("É menor que 0");
} else {
    console.log("O número é 0");
}

// Operadores lógicos
let alunoSesi = true;
let ensinoMedio = true;

if (alunoSesi && ensinoMedio) {
    console.log("Pode fazer o técnico");
} else {
    console.log("Não pode fazer o técnico");
}

let numero1 = Number(prompt("Informe um número:"));
if (numero1 >= 10 && numero1 <= 20) {
    console.log("Está entre 10 e 20");
}

let numero2 = Number(prompt("Informe outro número:"));
if (numero2 == 10 || numero2 == 20) {
    console.log("O número é 10 ou 20");
}

// Switch case
let opcao = 2;
switch (opcao) {
    case 1:
        console.log("Você escolheu a opção 1");
        break;
    case 2:
        console.log("Você escolheu a opção 2");
        break;
    default:
        console.log("Opção inválida");
        break;
}

let letra = "a";
switch (letra) {
    case "a":
        console.log("Vogal");
        break;
    case "b":
        console.log("Consoante");
        break;
    default:
        console.log("Não é uma letra válida");
        break;
}

// Laço de repetição - while (1 a 10)
let numero3 = 1;
while (numero3 <= 10) {
    console.log(numero3);
    numero3++;
}

// Laço de repetição - decrescente de 10 a 1
let numero4 = 10;
while (numero4 >= 1) {
    console.log(numero4);
    numero4--;
}

// While com prompt de saída
let resposta = "não";
while (resposta == "não") {
    resposta = prompt("Deseja sair? (sim/não)");
}

// Laço de repetição - do while
let contador = 0;
do {
    console.log("Contador:", contador);
    contador++;
} while (contador < 5);

