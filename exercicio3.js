function calcularSalarioLiquido (horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100

    return `Salário igual a R$ ${salarioLiquido}`
}

console.log(calcularSalarioLiquido(200, 5.9))
console.log(calcularSalarioLiquido(200, 7))