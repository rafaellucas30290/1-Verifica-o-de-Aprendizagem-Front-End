var tarefas = [];
do{
    var tarefa = prompt('Digite uma tarefa: ');
    tarefas.push(tarefa);

}while(tarefas.length < 5);
console.log(tarefas);
const verificar = prompt("Qual tarefa você deseja marcar como concluida?");
switch(verificar){
    case 1:
        tarefas.shift();
        console.log('lista atualizada:' + tarefas);
        break;
    case 2:
        tarefas.splice(2,1);
        console.log('Lista atualizada: ' + tarefas);
        break;
    case 3:
        tarefas.splice(3,1)
        console.log("Lista atualizada: " + tarefas);
        break;
    case 4:
        tarefas.splice(4,1)
        console.log("Lista atualizada: " + tarefas);
        break;
    case 5:
        tarefas.splice(5,1)
        console.log("Lista atualizada" + tarefas);
        break;
    
}