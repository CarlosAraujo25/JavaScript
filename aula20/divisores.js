function exibirDivisores(numero){
    for(let i = 1; i <= numero; i++){
        if(numero % i === 0){
            console.log(i)
        }
    }
}
exibirDivisores(10)