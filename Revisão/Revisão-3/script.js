//função declarativa
function saudacao(){
    console.log("Ola")
}

saudacao()

//função com parâmento e retorno
function dobrar (numero){
    return numero * 2
}
let resultado = dobrar (5)
console.log(resultado)

//função anônima 
let mostrarMensagem = function() {
    console.log("Função anônima")
}
mostrarMensagem()

//arrow function
const somar = (a, b) => {
    return a + b
}
console.log(somar(3,7))

//manipulação do dom
let paragrafo = document.getElementById("mensagem")
paragrafo.innerText = "Texto Alterado"

let titulo = document.getElementById("titulo")
titulo.style.color = "blue"
titulo.style.fontsize = "30px"

let novoItem = document.createElement("li")
novoItem.innerText = "Novo item"
document.body.appendChild(novoItem)

let apagar = document.getElementById("apagar")
apagar.remove()

//eventos do dom
let botao = document.getElementById("botao")

botao. addEventListener("click", function() {
alert("Você clicou no botãq")

})

function mostrarNome () {
let nome = document.getElementById("nome") .value
document.getElementById("resposta").innerText = "Você digitou: " + nome
}

function mudarCor () {
document.getElementById("caixa").style.
backgroundColor = "blue"}

function corOriginal(){
document. getElementById("caixa") .style.
backgroundColor = "red"
document.getElementById("caixa").style.color = "Passou o mouse"
}

function corOriginal() {
    document.getElementById("caixa").style.backgroundColor = "red"
    document.getElementById("caixa").innerText = "passe o mouse aqui"
}