let nome = prompt("qual teu nome?")
console.log(nome)

const botao = document.getElementById("botao")
const input = document.getElementById("input")
const mensagem = document.getElementById("mensagem")
const valor= document.getElementById("valor")
const converter = document.getElementById("converter")
const result = document.getElementById("result")
const data = document.getElementById("data")
const dataAtual = document.getElementById("dataAtual")
const hoje = new Date()
const dataPassada = new Date("2025-06-15")
const diferenca = hoje - dataPassada
const diasPassados = Math.floor(diferenca/(1000*60*60*24))

function mostrarTexto(){
    mensagem.innerText = input.value
}

converter.addEventListener("click", ()=>{
    let texto = valor.value
    let numero = Number(texto)
    let dobro = numero*2
    result.innerText = dobro
})

let frase = "eu gosto de A metamorfose"
console.log(frase)
console. log(frase.length) 
console. log(frase. toUpperCase()) 
console.log(frase.toLowerCase()) 
console.log(frase.includes("gosto")) 
console.log(frase.charAt(5))
console.log(frase.replace("gosto de", "amo")) 

let arredondar1 = Math.round(4.6)
let arredondar2 = Math.round(4.2)
let arredondar3 = Math.floor(2.9)
let arredondar4 = Math.ceil(3.1)

console.log(arredondar1)
console.log(arredondar2)
console.log(arredondar3)
console.log(arredondar4)

let maior = Math.max(1,24,254,254,3,782,78,6,752,574,6,7852,7,856,786,5,57,87,2,53,7,532,78,5354)
let menor = Math.min(1,24,254,254,3,782,78,6,752,574,6,7852,7,856,786,5,57,87,2,53,7,532,78,535)
console.log (maior)
console.log (menor)

let raiz = Math.sqrt(25)
let absoluto = Math.abs(-8)
console.log(raiz)
console.log(absoluto)

let aleatorio = Math.floor(Math.random()*10)+1
console.log(aleatorio)

data.addEventListener("click", ()=>{
    const agora = new Date()
    const dataFormada = agora.getDate() +"/"+(agora.getMonth()+1)+"/"+agora.getFullYear()
    dataAtual.innerText = dataFormada
})

console.log(diasPassados)