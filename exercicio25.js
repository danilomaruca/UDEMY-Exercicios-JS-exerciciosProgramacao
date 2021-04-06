//Resolução 1
function buscarPalavrasSemelhantes(inicio, palavras) {
    const resultado = []

    for (let palavra of palavras)
    if (palavra.includes(inicio))
    resultado.push(palavra)

    return resultado
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "profissional", "apropriado"]))
console.log(buscarPalavrasSemelhantes("vac", ["vacation", "vacina", "volume"]))

//Resolução 2
function buscarPalavrasSemelhantes(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "profissional", "apropriado"]))
console.log(buscarPalavrasSemelhantes("vac", ["vacation", "vacina", "volume"]))