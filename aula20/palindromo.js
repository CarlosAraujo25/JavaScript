function isPalindromo(str) {
    const strReversa = str.split('').reverse().join('')
    return str === strReversa;
}

console.log(isPalindromo("arara"))
console.log(isPalindromo("amor"))