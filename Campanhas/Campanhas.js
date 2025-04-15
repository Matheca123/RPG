let contagem = 0;

function contar (){
    contagem++;
    document.querySelector("#contador").innerText = contagem;

    if (contagem >= contar){
        contagem--;
    }
}
