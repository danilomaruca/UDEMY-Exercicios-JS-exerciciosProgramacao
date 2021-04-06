//Resolução 1
function somarNumeros(numeros) {
    const quantidadeDeNumeros = numeros.length
    return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
    }

console.log(somarNumeros([10, 10, 10]))

//Resolução 2
function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return soma
    }

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))

//Resolução 3
function somarNumeros(numeros) {
    const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
    return soma
    }

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))
