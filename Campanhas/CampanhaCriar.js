const btnAdicionar = document.getElementById("adicionarPlayer");
const btnRemover = document.getElementById("removerPlayer");
const container = document.getElementById("playerInputs");

btnAdicionar.addEventListener("click",() =>{
    const grupo = document.createElement("div");
    grupo.className = "input-group flex-nowrap mb-2";

    container.appendChild(grupo);
});