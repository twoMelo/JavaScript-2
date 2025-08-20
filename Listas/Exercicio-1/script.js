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
// 1 - Área de um Retângulo
let largura = Number(prompt("Digite a largura do retângulo:"));
let altura = Number(prompt("Digite a altura do retângulo:"));
let area = largura * altura;
console.log("A área do retângulo é:", area);

// Operadores relacionais
let valor1 = 10;
let valor2 = 5;

console.log("Maior que:", valor1 > valor2);
console.log("Maior ou igual:", valor1 >= valor2);
console.log("Menor que:", valor1 < valor2);
console.log("Menor ou igual:", valor1 <= valor2);
console.log("Igual:", valor1 == valor2);
console.log("Diferente:", valor1 != valor2);
// 1 - Comparando dois números
function comparaNumeros(a, b) {
  console.log("a > b?", a > b);
  console.log("a <= b?", a <= b);
  console.log("a == b?", a == b);
}
comparaNumeros(10, 5);

// 2 - Maioridade
function verificaIdade(idade) {
  if (idade >= 60) {
    console.log("Idosa");
  } else if (idade >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
}
verificaIdade(65);
verificaIdade(20);
verificaIdade(15);

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
// 1 - Verificação de Maioridade
function verificaMaioridade(idade) {
  if (idade >= 18) {
    return "Você é maior de idade";
  } else {
    return "Você é menor de idade";
  }
}
console.log(verificaMaioridade(16));

// 2 - Verificação de Aprovado
function verificaAprovado(nota) {
  return nota >= 7 ? "Aprovado" : "Reprovado";
}
console.log(verificaAprovado(6));

// 3 - Verificar Temperatura
function verificaTemperatura(temp) {
  if (temp > 30) {
    return "Está quente";
  } else {
    return "Está frio";
  }
}
console.log(verificaTemperatura(31));

// 4 - Classificação de Idade
function classificacaoIdade(idade) {
  if (idade < 12) return "Criança";
  if (idade < 17) return "Adolescente";
  if (idade < 59) return "Adulto";
  return "Idoso";
}
console.log(classificacaoIdade(10));

// 5 - Sistema de Notas Escolares
function sistemaNotas(nota) {
  if (nota > 90) return "A";
  if (nota > 80) return "B";
  if (nota > 70) return "C";
  if (nota > 60) return "D";
  return "F";
}
console.log(sistemaNotas(85));

// 6 - Classificação de Pistas em Corridas
function classificacaoPista(distancia) {
  if (distancia < 400) return "Pista curta";
  if (distancia < 800) return "Pista média";
  if (distancia < 1500) return "Pista longa";
  return "Pista muito longa";
}
console.log(classificacaoPista(1000));

// 7 - Pontuação de Jogo de Vídeo Game
function classificacaoPontuacao(pontos) {
  if (pontos < 1000) return "Iniciante";
  if (pontos < 5000) return "Intermediário";
  if (pontos < 10000) return "Avançado";
  return "Mestre";
}
console.log(classificacaoPontuacao(9000));

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
// 1 - Elegível para Promoção
function elegivelPromocao(anos, projetos) {
  if (anos >= 5 || projetos > 10) {
    return "Você está elegível para promoção";
  } else {
    return "Você não está elegível para promoção";
  }
}
console.log(elegivelPromocao(6, 5));

// 2 - Entrar em um Evento
function podeEntrarEvento(idade) {
  if (idade >= 18 && idade <= 30) {
    return "Você pode entrar no evento";
  } else {
    return "Você não pode entrar no evento";
  }
}
console.log(podeEntrarEvento(20));

// 3 - Verificação de Login Avançada
function login(usuario, senha) {
  if (usuario === "admin" && senha === "1234") {
    return "Login bem-sucedido";
  } else {
    return "Nome de usuário ou senha incorretos";
  }
}
console.log(login("admin", "1234"));

// 4 - Intervalo de Valores
function verificaIntervalo(num) {
  if (num >= 10 && num <= 20) {
    return "O número está dentro do intervalo entre 10 e 20";
  } else if (num >= 30 && num <= 50) {
    return "O número está dentro do intervalo entre 30 e 50";
  } else {
    return "Ele não está dentro do intervalo de 10 e 20 nem 30 e 50";
  }
}
console.log(verificaIntervalo(15));
console.log(verificaIntervalo(40));
console.log(verificaIntervalo(9));


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
    // 1 - Dias da Semana com Números Correspondentes
function diaDaSemana(num) {
  switch (num) {
    case 1: return "Domingo";
    case 2: return "Segunda-feira";
    case 3: return "Terça-feira";
    case 4: return "Quarta-feira";
    case 5: return "Quinta-feira";
    case 6: return "Sexta-feira";
    case 7: return "Sábado";
    default: return "Número inválido. Insira um valor entre 1 e 7.";
  }
}
console.log(diaDaSemana(3));

// 2 - Classificação de Idade
function classificacaoPorIdade(idade) {
  switch (idade) {
    case 5: return "Infantil A";
    case 10: return "Infantil B";
    case 15: return "Juvenil A";
    case 20: return "Juvenil B";
    case 30: return "Adulto";
    default: return "Idade inválida. Insira 5, 10, 15, 20 ou 30.";
  }
}
console.log(classificacaoPorIdade(10));

// 3 - Turno de Trabalho
function saudacaoTurno(turno) {
  switch (turno.toUpperCase()) {
    case "M": return "Bom dia!";
    case "V": return "Boa tarde!";
    case "N": return "Boa noite!";
    default: return "Turno inválido. Insira M, V ou N.";
  }
}
console.log(saudacaoTurno("v"));

// 4 - Estações do Ano
function estacaoAno(num) {
  switch (num) {
    case 1: return "Primavera";
    case 2: return "Verão";
    case 3: return "Outono";
    case 4: return "Inverno";
    default: return "Estação inválida. Insira um número de 1 a 4.";
  }
}
console.log(estacaoAno(2));
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
    // 1 - Contador (1 a 10)
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 2 - Contagem Regressiva (10 a 1)
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// 3 - Verificação de senha
let senha;
do {
  senha = prompt("Digite a senha:");
} while (senha !== "12345");
console.log("Senha correta!");

// 4 - Sequência numérica de 0 a 100 de 5 em 5
let k = 0;
while (k <= 100) {
  console.log(k);
  k += 5;
}

// 5 - Mostrando mensagem 5 vezes
let count = 0;
while (count < 5) {
  console.log("Eu gosto de JavaScript");
  count++;
}
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
// 1 - Contador (1 a 20)
let cont = 1;
do {
  console.log(cont);
  cont++;
} while (cont <= 20);




// Laço de repetição - for
for (let contador1 = 1; contador1 <= 5; contador1++) {
    console.log("For Contador:", contador1);
}

// Array
let frutas = ["maçã", "banana", "laranja"];

console.log("Tamanho do array:", frutas.length); // tamanho do array

frutas.push("uva");       // adiciona no final
frutas.pop();             // remove o último
frutas.shift();           // remove o primeiro
frutas.unshift("manga");  // adiciona no início

// Percorrendo o array com for
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta:", frutas[i]);
}
// 1 - Filmes favoritos
let filmes = ["Matrix", "Inception", "Interestelar"];
console.log("Primeiro filme:", filmes[0]);

// 2 - Criando e acessando um array de frutas
let fruta = ["maçã", "banana", "laranja", "uva", "pera"];
console.log("Terceira fruta:", frutas[2]);

// 3 - Adicionando elementos
let cores = ["azul", "verde", "vermelho"];
cores.push("amarelo");
for (let i = 0; i < cores.length; i++) {
  console.log("Cor:", cores[i]);
}

// 4 - Removendo elementos
let numeros = [10, 20, 30, 40];
numeros.pop();
for (let i = 0; i < numeros.length; i++) {
  console.log("Número:", numeros[i]);
}