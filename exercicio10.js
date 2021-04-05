// Resolução 1
function simboloMais (quantidade) {
    let resultado = ''

    for (let i = 0; i < quantidade; i++)
    resultado += '+'

    return resultado
}

console.log(simboloMais(2))
console.log(simboloMais(9))

//Resolução 2
function simboloMais (quantidade) {
    return Array(quantidade).fill('+').join('')
}

console.log(simboloMais(2))
console.log(simboloMais(9))

//Resolução 3
function simboloMais (quantidade) {
    return "+".repeat(quantidade)
}

console.log(simboloMais(2))
console.log(simboloMais(9))
