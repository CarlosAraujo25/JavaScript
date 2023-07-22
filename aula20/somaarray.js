function soma(array) {
    let soma = 0
    for(let numero of array) {
        soma += numero
    }
    return soma
}

const numeros = [2,4,6,8]
console.log(soma(numeros))