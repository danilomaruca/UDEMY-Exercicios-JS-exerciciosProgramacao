// Resolução 1
function multiplicar (numeroA, numeroB) {
    let resultado = 0

/* a otimização feita para diminuir a quantidade de chamadas recursivas pode ser realizada 
aqui para diminuir a quantidade de loops */
    for (let i=0; i < numeroB; i++)
    resultado += numeroA

    return resultado
}

console.log(multiplicar(2, 3))
console.log(multiplicar(5, 5))

// Resolução 2
function multiplicar2 (numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0

    return multiplicador === 1 ? numero : numero + multiplicar2(numero, multiplicador-1)
}

console.log(multiplicar2(7, 3))
console.log(multiplicar2(8, 8))

// Resolução 3
function multiplicar3 (numeroA, numeroB) {
    if (numeroA === 0 || numeroB === 0) return 0

    const maiorNumero = Math.max(numeroA, numeroB)
    const menorNumero = Math.min(numeroA, numeroB)

    function multiplicarRecursivamente(numero, multiplicador) {
        return (
            multiplicador === 1 ?
            numero :
            numero + multiplicarRecursivamente(numero, multiplicador-1)
        )
    }

    /* nessa versão, garantimos que o multiplicador será o menor número, portanto o mínimo de chamadas
    recursivas return multiplicaRecursivamente(maiorNumero, menorNumero) */
}

console.log(multiplicar3(5, 5))
console.log(multiplicar3(9, 2))
