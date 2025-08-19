function carregarNavbar(caminhoNavbar, idDiv){
    fetch(caminhoNavbar)
    .then(Response => Response.text())
    .then(data => {
        document.getElementById(idDiv).innerHTML = data;
    });
}