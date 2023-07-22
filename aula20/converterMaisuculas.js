function converterMaiusculas(array) {
    return array.map(str => str.toUpperCase())
}

const palavras = ["gato", "cachorro", "pássaro'"]
console.log(converterMaiusculas(palavras))