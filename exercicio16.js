// Resolução 1
function checarAnoBissexto (ano) {
    const dividePorQuato = ano % 4 == 0
    const dividePorCem = ano % 100 == 0
    const dividePorQuatrocentos = ano % 400 == 0

    return (dividePorQuato && !dividePorCem) || dividePorQuatrocentos
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2021))
console.log(checarAnoBissexto(1980))

//Resolução 2
function checarAnoBissexto (ano) {
    return new Date(ano, 1, 29).getDate() === 29;
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2021))
console.log(checarAnoBissexto(1980))