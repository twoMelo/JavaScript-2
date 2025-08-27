//TESTSPEC.JS
//AQUI VAI FICAR O TESTE
it("Listagem", function() {
    expect(inteiro(1)).toBe(1)
    expect(inteiro(2)).toBe(2)
    expect(inteiro(3)).toBe(3)
    
})  
it("Fizz Buzz", function() {
    expect(divisao(1)).toBe(1)
    expect(divisao(2)).toBe(2)
    expect(divisao(3)).toBe("Fizz")
    expect(divisao(4)).toBe(4)
    expect(divisao(5)).toBe("Buzz")
    expect(divisao(6)).toBe("Fizz")
    expect(divisao(7)).toBe(7)
    expect(divisao(8)).toBe(8)
    expect(divisao(9)).toBe("Fizz")
    expect(divisao(10)).toBe("Buzz")
    
}) 
it ("Soma", function(){
    expect(soma(3,7)).toBe(10) 
    expect(soma(4,6)).toBe(10)
})