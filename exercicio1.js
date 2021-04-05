//Resolução 1
function cumprimentar (nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}

console.log(cumprimentar("Leonardo"))

//Resolução 2
function cumprimentar (nome) {
    return "Olá, " + nome + "!"
}

console.log(cumprimentar("José"))

//Resolução 3
function cumprimentar (nome) {
    return `Olá, ${nome}!`
}

console.log(cumprimentar("Rafael"))