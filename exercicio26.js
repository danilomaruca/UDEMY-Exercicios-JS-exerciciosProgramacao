//Resolução 1
function removerVogais (frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

    vogais.forEach (vogal => frase = frase.replace(vogal, ''))

    return frase
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))

//Resolução 2
function removerVogais (frase) {
    return frase.replace(/[aeiou]/ig, '')
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))
