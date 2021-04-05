function removerPropriedade (objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia [nomeDaPropriedade]

    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "a")) 
console.log(removerPropriedade({
                                id: 20,
                                nome: "caneta",
                                descricao: "Não preenchido"
                                }, "descricao"))