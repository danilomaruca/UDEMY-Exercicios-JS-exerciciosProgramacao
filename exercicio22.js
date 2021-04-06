/*mais informações sobre gerar números aleatórios dentro de uma certa faixa
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function funcaoDaSorte(numeroEscolhido) {
    const min = 1
    const max = 10
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)
    return (numeroEscolhido === numeroAleatorio ?
    `Parabéns! O número sorteado foi o ${numeroAleatorio}` :
    `Que pena, o número sorteado foi o ${numeroAleatorio}`
    )
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(4))
console.log(funcaoDaSorte(5))