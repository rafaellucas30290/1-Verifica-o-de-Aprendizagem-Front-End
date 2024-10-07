
function Palindromo(palavra) { 
    const tamanho = palavra.length;
    
    for (let i = 0; i < Math.floor(tamanho / 2); i++) {
        if (palavra[i] !== palavra[tamanho - 1 - i]) {
            return false; 
        }
    }
    return true; 
}

const palavra = prompt('Digite uma palavra: ')
console.log(Palindromo(palavra));