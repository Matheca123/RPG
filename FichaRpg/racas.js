const racas = [
  {
    nome: "Humano",
    imagem: "../img/humano.png",
    vida: "20",
    sanidade: "20",
    pe: "20",
    passivas: "1",
    habilidades: "2",
    passivasIniciais: [
      {
        nome: "Resiliência humana",
        descricao: "Na primeira vez em que você cair em combate. No seu turno, role 1d100. Se o resultado for 80 ou mais, você se levanta imediatamente, pronto para lutar mais uma vez mas com 1 de vida."
      }
    ],
    habilidadesIniciais: [],
    descricao: "Os humanos apresentam uma ampla diversidade em tamanhos, cores de pele e cabelo, além de variações físicas e mentais. Sua incrível capacidade de adaptação os torna extremamente versáteis, capazes de evoluir e se transformar em algo ainda inexplorado ou desconhecido.",
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
        descricao: "Quando seus Pontos de Vida ou PE chegarem a zero, você se separa do hospedeiro, assumindo a forma de uma gosma viva e consciente. Nessa forma, o Parasyta perde completamente o acesso a suas habilidades e sofre uma redução temporária de 50% em todos os atributos e status. Para retornar à forma de combate, é necessário encontrar um cadáver próximo e se fundir a ele. Ao fazer isso, você recupera sua forma original, mas com apenas metade dos status atuais."
      }
    ],
    habilidadesIniciais: [],
    descricao: "???",
    dinheiroInicial: "0"
  },
  {
    nome: "Transmutadores",
    imagem: "../img/transmutadores.jpg",
    vida: "20",
    sanidade: "20",
    pe: "20",
    passivas: "2",
    habilidades: "1",
    passivasIniciais: [],
    habilidadesIniciais: [
      {  
        nome: "Transmutação",
        descricao: "Gastando 8 PE, você pode copiar perfeitamente a aparência de um ser, a capacidade de mudar psiquicamente a formação de suas células biológicas para mudar sua aparência. Dessa forma você sempre consegue assumir a forma outros seres humanos e animais",
      }
      ],
    descricao:" Uma criatura de pele azulada que copia a aparência de outros seres, sendo fisicamente avantajado. Esses seres desconhecidos copiam (normalmente) humanos, ou seres parecidos com humanos. Tomando seu lugares de suas vidas, ou perturbando seus alvos.",
    dinheiroInicial: "10d20"
  },
  {
    nome: "Homunculus",
    imagem: "../img/homunculus.jpg",
    vida: "30",
    sanidade: "10",
    pe: "20",
    passivas: "1",
    habilidades: "2",
    passivasIniciais: [
      {
        nome: "Reconstrução corporal",
        descricao: "A cada turno próprio, você pode lançar 1d15 para recuperar sua vida. Não ultrapassa o máximo de vida.",
      }
    ],
    habilidadesIniciais: [],
    descricao:"Os Homúnculos são seres artificiais criados por alquimistas a partir de um ritual proibido. Moldados com base em conceitos humanos e infundidos com fragmentos de poder místico ou alquímico, eles desafiam as leis da natureza. Cada homúnculo possui uma ligação simbiótica com a emoção ou conceito que representa, ganhando habilidades que refletem essa essência.",
    dinheiroInicial: "50d20"
  },
  {
    nome: "Marionete",
    imagem: "../img/marionete.jpg",
    vida: "15",
    sanidade: "25",
    pe: "20",
    passivas: "1",
    habilidades: "2",
    passivasIniciais: [],
    habilidadesIniciais: [
      {
        nome: "Invisibilidade",
        descricao: "Gaste 10 PE, ao utilizar essa habilidade o usuário torna-se totalmente invisível e recebe +1 ação de movimento que dura até o final do turno. A invisibilidade sairá quando o mesmo atacar, usar uma habilidade ou quando o seu turno acabar. (Roupas e itens utilizados pela  marionete também ficam invisíveis)",
      }
    ],
    descricao:"Há muito tempo, um artesão isolado criou um boneco para servir como presente para seu filho. Este brinquedo deveria trazer alegria, mas algo deu errado. Ao usar um cristal enfeitiçado para animar o boneco, o artesão despertou uma força sombria que transformou o presente em uma criatura maligna.",
    dinheiroInicial: "0"
  },
  {
    nome: "Desligotacticos",
    imagem: "../img/desligotacticos.jpg",
    vida: "15",
    sanidade: "20",
    pe: "25",
    passivas: "1",
    habilidades: "1",
    passivasIniciais: [],
    habilidadesIniciais: [
      {
        nome: "Ligotáctico",
        descricao: "O Desligotático pode alternar entre uma forma humanamente aceitável e sua forma verdadeira. Ao assumir sua forma verdadeira, ele recebe temporariamente um bônus de +1 em Força, Agilidade ou Intelecto, conforme a escolha do jogador. Além disso, o Desligotático ganha +1 adicional nesses atributos se estiver próximo de uma fonte de energia, como magias ou formas elétricas. A potência do fortalecimento pode aumentar proporcionalmente à intensidade da energia disponível, como a quantidade de watts fornecidos.",
      },
      {
        nome: "Glitizado",
        descricao: "Ataques baseados em energia realizados pelo Desligotático têm uma chance de aplicar a condição Paralisado ao alvo. Para evitar o efeito, o inimigo deve realizar um teste de Vontade (DT: 10), com a dificuldade aumentando em +1 a cada nível do Desligotático.",
      }
    ],
    descricao:"Os Desligotáticos são seres formados por uma energia única, distinta da comum, semelhante a uma eletricidade imbuída com uma essência sombria, maligna e amaldiçoada. Essa raça é pouco conhecida, pois já foi caçada devido à energia finita presente em seus corpos. Preferem se ocultar em locais muito iluminados, já que possuem a habilidade de transitar por energias e similares, além de consumir ou canalizar trovões para aumentar sua força.",
    dinheiroInicial: "10d100"
  },
  {
    nome: "Inseto Antropoide",
    imagem: "../img/insetoantropoide.jpg",
    vida: "???",
    sanidade: "30",
    pe: "???",
    passivas: "1",
    habilidades: "2",
    passivasIniciais: [
      {
        nome: "Direito de nascença",
        descricao: "Você terá que jogar 1d100 para decidir o quão forte foi a pessoa ou animal no qual vc se alimentou e herdou as características."
      }
    ],
    habilidadesIniciais: [],
    descricao:"Uma raça criada através da manipulação genética. Elas surgem quando uma formiga comum se alimenta de um ser humano ou animal altamente poderoso. Esse processo permite que a  herde as habilidades e características da vítima, resultando em um ser híbrido com poderes variados e únicos. Os insetos Antropides possuem uma hierarquia bem definida, liderada pela formiga rainha, e são organizadas em colônias. Elas demonstram inteligência avançada e capacidades físicas sobre-humanas, o que as torna ameaças significativas no mundo",
    dinheiroInicial: "10d100"
  },
  {
    nome: "Yokai",
    imagem: "../img/yokai.jpg",
    vida: "10",
    sanidade: "25",
    pe: "25",
    passivas: "1",
    habilidades: "1",
    passivasIniciais: [],
    habilidadesIniciais: [
      {
        nome: "VOCÊ E EU!",
        descricao: "Gaste 10 de PE, o Yokai avança em direção a um aliado-alvo em até 10 m, tornando-se inalvejável por qualquer ataque enquanto conectada ao companheiro, ela e o aliado no qual o Yokai esta dentro recebe Resistência do Escudo e Cura. Se quiser trocar de aliado, você terá que gastar a metade da quantia de PE e a duração vai ser a mesma. Além disso, se a contagem de turnos acabar você será expulso do corpo do aliado. (Cura quando entra no aliado: 1d15+MAG) (Escudo recebido: 5) (duração da habilidade 1d2+1) (após ser expulso ou decidir sair do corpo do aliado, você não poderá usar essa habilidade por 1d2+1 de turnos)"
      },
      {
        nome: "Energia negativa",
        descricao: "Gaste 10 de PE, o Yokai pode enviar energias negativas para um alvo, fazendo com que o mesmo tenha 1 desvantagem em testes de pericia. (Duração da habilidade: 1d2+1) (após ser expulso ou decidir sair do corpo do aliado, você não poderá usar essa habilidade por 1d2+1 de turnos)."
      }
    ],
    descricao:"Yokais são seres místicos e sobrenaturais do folclore, habitantes do mundo espiritual, que ocasionalmente interagem com o mundo humano. Eles são criaturas diversas, cada uma com sua própria forma e natureza, variando desde animais místicos e espíritos da natureza até entidades humanoides e monstruosas. A formação dos Yokais pode estar associada a diferentes origens como  Energias Espirituais, Almas Perdidas, Objetos Ancestrais,  Crenças Populares, Fenômenos Naturais e Dualidade e Simbolismo",
    dinheiroInicial: "10d100"
  },
  {
    nome: "Nereliths",
    imagem: "../img/nerelith.jpg",
    vida: "30",
    sanidade: "10",
    pe: "20",
    passivas: "1",
    habilidades: "2",
    passivasIniciais: [
      {
        nome: "Respiração aquática",
        descricao: "Você e outros da sua raça possuem as mesmas características que os peixes. Portanto, respiram de baixo d'água por meio guelras e nadam mais rapidamente que peixes e tritões, dentro d'água, Bestas aquáticas recebem o dobro do deslocamento e +1 em um atributo a escolha."
      },
    ],
    habilidadesIniciais: [],
    descricao: "Originários das profundezas abissais entre Typora e Blaviken, os Nereliths são seres anfíbios de escamas iridescentes, olhos adaptados à escuridão e nadadeiras que se moldam à vontade do oceano. Reverenciados como descendentes diretos dos antigos guardiões marinhos, sua presença impõe respeito em todo o reino subaquático. No entanto, quando emergem à superfície, são tratados com desconfiança e hostilidade pelos povos da terra, que temem o desconhecido e desprezam aquilo que foge à sua compreensão.",
    dinheiroInicial: "40d35 mexilhãozinhos"
  },
  {
    nome: "Lumariano",
    imagem: "../img/lumariano.jpg",
    vida: "1",
    sanidade: "30",
    pe: "30",
    passivas: "1",
    habilidades: "1",
    passivasIniciais: [
      {
        nome: "Dash",
        descricao: "O Esqueleto pode esquivar de qualquer tipo de ataque independente do dano, mas ao fazer isso o mesmo irá gastar 5 de PE. Além disso o HP o Lumariano sempre será 1, não podendo mudar independente da fonte fornecida."
      },
      
    ],
    habilidadesIniciais: [
      {
        nome: "Gaster Blaster",
        descricao: "O Lumariano pode invocar caveiras de Esqueleto para atirar contra seus alvos causando 2d4 + MAG gastando 5 de PE. Também pode ser realizado com maior potência usando mais caveiras, mas para fazer isso você gasta mais 5 de PE para cada caveira adicional (max: 4)"
      }
    ],
    descricao: "Os Lumarianos são uma raça mística que habitam o mesmo reino etéreo dos yokais e seus olhos irradiam uma luz suave. Possuindo corpos etéreos, sua forma pode variar de padrões de luz e energia, sendo capazes de manifestar características humanoides quando interagem com nosso plano de existência. Os Lumarianos são esqueletos com poderes cósmicos e habilidades psíquicas, canalizando energias para propósitos benevolentes ou cômicos.",
    dinheiroInicial: "0"
  },
],
  {
    nome: "Terranoxianos",
    imagem: "../img/",
    vida: "???",
    sanidade: "???",
    pe: "???",
    passivas: "?",
    habilidades: "?",
    passivasIniciais: [
      {
        nome: "???",
        descricao: ""
      },
    ],
    descricao: "?",
    dinheiroInicial: "0"
  },
];
{
    nome: "Ainur",
    imagem: "../img/",
    vida: "???",
    sanidade: "???",
    pe: "???",
    passivas: "?",
    habilidades: "?",
    passivasIniciais: [
      {
        nome: "Condicional",
        descricao: "O mesmo terá uma área em volta de si que rouba 5 de PE para si mesmo (Essa passiva estará sempre ativa, além disso, você poderá escolher os alvos que perderam PE, sendo no máximo 2 alvos)"
      },
      {
        nome: "Enraizado",
        descricao: "Ataques físicos não o afetam o ainur, somente ataques mágicos ou imbuidos em mágia surtem efeito no usuário"
      },
    ],
    descricao: "?",
    dinheiroInicial: "0"
  },
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
