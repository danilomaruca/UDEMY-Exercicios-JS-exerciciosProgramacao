// Resolução 1
function estaEntre (minimo, maximo, numero, inclusivo = false) {
    if (inclusivo) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}

console.log(estaEntre(10, 50, 20))
console.log(estaEntre(50, 10, 5))
console.log(estaEntre(10, 100, 30, true))
console.log(estaEntre(50, 100, 90, false))

// Resolução 2
function estaEntre2 (minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}

console.log(estaEntre(10, 50, 20))
console.log(estaEntre(50, 10, 5))
console.log(estaEntre(10, 100, 30, true))
console.log(estaEntre(50, 100, 90, false))