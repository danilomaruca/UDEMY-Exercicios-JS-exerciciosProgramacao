//Resolução 1
function inverter (objeto) {
    const objetoInvertido = {}

    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0,
              valor = 1
        
        objetoInvertido [parChaveValor[valor]] = parChaveValor[chave]
    })

    return objetoInvertido
}

console.log(inverter({a: 1, b: 2, c: 3}))

//Resolução 2
function inverter (objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map(parChaveValor => parChaveValor.reverse())

    return Object.fromEntries(paresDeChaveValorInvertidos)
}

console.log(inverter({a: 1, b: 2, c: 3}))
