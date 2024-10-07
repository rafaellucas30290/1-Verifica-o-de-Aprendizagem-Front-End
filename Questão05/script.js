function tabelamultiplicacao(numero){
    if (numero <= 0){
        console.log('número inválido')
        return;
    }
    
    for (let i = 1; i <= 10; i++){
        console.log(numero + ' x ' + i + ' = ' + numero * i);
    }

}
console.log(tabelamultiplicacao(0));
