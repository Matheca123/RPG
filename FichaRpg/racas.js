const racas = [
  {
    nome: "Humano - HARD MODE",
    imagem: "../img/humano.png",
    vida: "15",
    sanidade: "15",
    pe: "15",
    passivas: "2",
    habilidades: "2",
    passivasIniciais: [],
    habilidadesIniciais: [],
    descricao: "Os humanos apresentam uma ampla diversidade em tamanhos, cores de pele e cabelo, além de variações físicas e mentais. Sua incrível capacidade de adaptação os torna extremamente versáteis.",
    dinheiroInicial: "100d20"
  },
  {
    nome: "Parasyta Completo",
    imagem: "../img/parasytacompleto.jpg",
    vida: "30",
    sanidade: "0",
    pe: "30",
    passivas: "1",
    habilidades: "1",
    passivasIniciais: [
      {
        nome: "Roubo de vida",
        descricao: "Toda fonte de dano com base no seu corpo recupera metade do dano causado ao alvo inimigo. Além disso, por não possuir sanidade, todo dano com base na sanidade é sofrido na vida."
      },
      {
        nome: "Aluguel atrasado",
        descricao: "Quando seus PE's ou vida acabarem você se separa do hospedeiro virando uma gosma viva e com consciência."
      }
    ],
    habilidadesIniciais: [
      
    ],
    descricao: "???",
    dinheiroInicial: "0"
  }
];


function renderizarCards(racas) {
  const container = document.getElementById("racasContainer");
  if (!container) {
    console.error("Elemento com id 'racasContainer' não encontrado.");
    return;
  }

  racas.forEach(raca => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";

    let atributos = "";
    if (raca.vida) atributos += `— Vida - ${raca.vida}<br>`;
    if (raca.sanidade) atributos += `— Sanidade - ${raca.sanidade}<br>`;
    if (raca.pe) atributos += `— Pontos de Esforço (PE) - ${raca.pe}<br>`;
    if (raca.passivas) atributos += `— Passivas - ${raca.passivas}<br>`;
    if (raca.habilidades) atributos += `— Habilidades - ${raca.habilidades}<br>`;
    if (raca.dinheiroInicial) atributos += `<br>Dinheiro inicial ${raca.dinheiroInicial}<br>`;

    let passivaHtml = "";
    if (raca.passivasIniciais && raca.passivasIniciais.length > 0) {
      passivaHtml += `<br><strong>Passivas Iniciais:</strong>`;
      raca.passivasIniciais.forEach(p => {
        passivaHtml += `<br>• <strong>${p.nome}</strong>: <em>${p.descricao}</em>`;
      });
    }

    let habilidadesHtml = "";
    if (raca.habilidadesIniciais && raca.habilidadesIniciais.length > 0) {
      habilidadesHtml += `<br><strong>Habilidades Iniciais:</strong>`;
      raca.habilidadesIniciais.forEach(h => {
        habilidadesHtml += `<br>• <strong>${h.nome}</strong>: <em>${h.descricao}</em>`;
      });
    }

    card.innerHTML = `
      <img src="${raca.imagem}" class="card-img-top" style="height: 300px;" alt="raça_${raca.nome.toLowerCase()}">
      <div class="card-body">
        <h5 class="card-title">${raca.nome}</h5>
        <p class="card-text">
          ${atributos}
          ${passivaHtml}
          ${habilidadesHtml}
          <br><strong>Descrição:</strong><br>
          ${raca.descricao}
        </p>
        <a href="#" class="btn btn-primary">Selecionar a Raça</a>
      </div>
    `;

    container.appendChild(card);
  });
}

renderizarCards(racas);
