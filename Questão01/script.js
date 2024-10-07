function calculadora(numero1, numero2, operacao){
    if (operacao==='soma'){
        return numero1 + numero2;
    }else if(operacao==='subtracao'){
        return numero1 - numero2;
    }else if(operacao==='multiplicacao'){
        return numero1 * numero2;
    }else if(operacao==='divisao'){
        return numero1/numero2;
    }
}
console.log(calculadora(2,2,'soma'));
console.log(calculadora(1,5,'subtracao'));
console.log(calculadora(2,10,'multiplicacao'));
console.log(calculadora(8,2,'divisao'));