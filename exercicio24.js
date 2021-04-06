//Resolução 1
function contarCaractere(caractereBuscado, frase) {
    let contador = 0

    for (let i=0; i < frase.length; i++)
       if (frase.charAt(i) === caractereBuscado)
       contador++
    
    return contador
}

console.log(contarCaractere("r", "O rato roeu a roupa do rei de Roma"))
console.log(contarCaractere("C", "Conhece-te a ti mesmo"))

//Resolução 2
function contarCaractere(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
}

console.log(contarCaractere("r", "O rato roeu a roupa do rei de Roma"))
console.log(contarCaractere("C", "Conhece-te a ti mesmo"))
