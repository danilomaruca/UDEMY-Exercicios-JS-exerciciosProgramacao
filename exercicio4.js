//Resolução 1
function receberNomeDoMes (numero) {
    switch (numero) {
        case 1:
            return "janeiro";
        case 2:
            return "fevereiro";
        case 3: 
            return "março";
        case 4:
            return "abril";
        case 5:
            return "maio";
        case 6:
            return "junho";
        case 7:
            return "julho";
        case 8:
            return "agosto";
        case 9:
            return "setembro";
        case 10:
            return "outubro";
        case 11: 
            return "novembro";
        case 12:
            return "dezembro";
        default: 
            return "Mês inválido";
    }
}

console.log(receberNomeDoMes(2))
console.log(receberNomeDoMes(5))
console.log(receberNomeDoMes(13))
console.log(receberNomeDoMes(7))

//Resolução 2
function receberNomeDoMes2 (numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 
                        'setembro', 'outubro', 'novembro', 'dezembro']
    
    return mapeamento [--numero]
}

console.log(receberNomeDoMes2(4))
console.log(receberNomeDoMes2(6))
console.log(receberNomeDoMes2(1))
console.log(receberNomeDoMes2(14))