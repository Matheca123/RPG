const btnAdicionar = document.getElementById("adicionarPlayer");
const btnRemover = document.getElementById("removerPlayer");
const container = document.getElementById("playerInputs");

btnAdicionar.addEventListener("click",() =>{
    if (container.children.length >= 15){
        return alert ("Numero de Players excedido");
    }
    const grupo = document.createElement("div");
    grupo.className = "input-group flex-nowrap mb-2";

    const span = document.createElement("span");
    span.className = "input-group-text";
    span.innerText = "@";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "form-control";
    input.placeholder = "Nome do Player"; 

    const emailinput = document.createElement("input");
    emailinput.type = "email";
    emailinput.className ="form-control";
    emailinput.placeholder = "Email"
    

    container.appendChild(grupo);
    grupo.appendChild(span);
    grupo.appendChild(input);
    grupo.appendChild(emailinput);
});