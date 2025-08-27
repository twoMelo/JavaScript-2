function inteiro(inteiro){
    return(inteiro)
}
function divisao(inteiro){
    if(inteiro % 3 == 0 && inteiro % 5 == 0){
        return("FizzBuzz")
    }else if(inteiro % 3 == 0){
        return("Fizz")
    }else if(inteiro % 5 == 0){
        return("Buzz")
    }
    return inteiro
}
function soma(a,b){
    return a + b
}