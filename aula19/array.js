function encontrarMaiorMenor(array) {
    let maior = array[0]
    let menor = array[0]

    for (let i = 1; i < array.length; i++){
        if(array[i] > maior) {
            maior = array[i]
        }

        if (array[i] < menor){
            menor = array[i]
        }

        return [maior, menor]
    }
}

const numeros = [15, 7, 23, 98, 45, 10]
const [maiorNumero, menorNumero] = encontrarMaiorMenor(numeros)

console.log("Maior numero", maiorNumero)
console.log("menor numero", menorNumero)