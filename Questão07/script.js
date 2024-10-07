const produtos = [
   {
        nome: 'Feijão',
        quantidade_estoque: 100,
        preco: 7
    },
    {
        nome: 'Arroz',
        quantidade_estoque: 100,
        preco: 5
    },
    {
        nome: 'Peito de Frango',
        quantidade_estoque: 75, 
        preco: 29
    }

];
function calcularvalor(arrayprodutos){
    let total = 0;

    for (let i = 0; i < arrayprodutos.lenght; i++){
        const produto = arrayprodutos[i];
        total += produto.preco * produto.quantidade_estoque;
    }
    return total;
}
const valorTotal = calcularvalor(produtos);
console.log('Valor total do estoque é: R$' + valorTotal);