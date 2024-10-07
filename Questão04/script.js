var aluno = {
    nome: '',
    notas: [],

}
aluno.nome = "Edson Arantes do Nascimento";
aluno.notas = [8,7,5];
console.log(aluno.nome);
console.log(aluno.notas);
function media(){
    let soma = 0;
    for (let i = 0; i < aluno.notas.length; i++){
        soma += aluno.notas[i];

    }
    return soma / aluno.notas.length;
};
console.log(media("média do aluno: " + aluno.notas));