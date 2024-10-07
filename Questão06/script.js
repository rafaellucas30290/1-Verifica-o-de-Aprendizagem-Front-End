const pessoas = [];

function coletordeDados(){
    for (let i = 0; i < 5; i++){
        const nome = prompt('Digite o nome da pessoa ' + (i+1) + ':');
        const idade = parseInt(prompt('Digite a idade da pessoa ' + (i+1) + ':'));
        
        pessoas.push({nome: nome, idade: idade});

    }
}
function Maioridade(){
    console.log('Pessoas com 18 anos ou mais');
    for (let i = 0; i < pessoas.length; i++){
        if (pessoas[i].idade > 18){
            console.log(pessoas[i].nome);
        }
    }
}
coletordeDados();
Maioridade();
