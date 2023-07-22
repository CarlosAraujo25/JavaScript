function contarVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let char of str.toLowerCase()) {
      if (vogais.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Exemplo de uso:
  console.log(contarVogais('javascript')); // Deve exibir 3 no console
  console.log(contarVogais('Hello, World!')); // Deve exibir 3 no console
  