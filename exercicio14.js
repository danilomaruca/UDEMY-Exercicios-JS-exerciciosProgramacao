//Resolução 1
function objetoParaArray(objeto) {
    const resultado = []
    for (let chave in objeto)
    resultado.push([ chave , objeto[chave] ])
    return resultado
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    })) 
    
console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
    })) 

//Resolução 2
function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map( chave => [chave, objeto[chave]] )
    return resultado
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    })) 
    
console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
    })) 

//Resolução 3
function objetoParaArray(objeto) {
    return Object.entries(objeto)
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    })) 
    
console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
    })) 
