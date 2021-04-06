function areaDoTriangulo(base, altura) {
    const area = (base * altura) /2

    return area.toFixed(2)      // irá arredondar para manter 2 casas decimais
}

console.log(areaDoTriangulo(10,15))
console.log(areaDoTriangulo(20,30))
console.log(areaDoTriangulo(9.25, 13.1))