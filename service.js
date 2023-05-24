const Chance = require("chance");
const chance = new Chance();

const buildLine = consumerId => `"${chance.hash({ length: 12 })}","${consumerId}"
`;

const generateFile = (size = 1) => {
  const header = '"amplitude_id","user_id"';
  const consumers = [];

  for (let i = 0; i < size; i += 1) {
    consumers.push(chance.hash());
  }

  const data = `${header}
${consumers.map(buildLine).join('')}`;

  return data;
};

const genereteCohorts = () => {
  return [
    {
      id: "acf4eeb",
      name: "Pessoas que não foram recompensadas no estilo",
      description: null,
      size: 0,
      lastComputed: 1569505062,
      published: true
    },
    {
      id: "9law9ns",
      name: "Massa de Homologação Completa",
      description:
        "Todos os consumers da planilha de homologação do Xewards Journey",
      size: 35,
      lastComputed: 1576171445,
      published: true
    },
    {
      id: "ar7cz55",
      name: "teste-bb-troca-facil-i",
      description: null,
      size: 4,
      lastComputed: 1579546965,
      published: true
    }
  ];
};

module.exports = {
  generateFile,
  genereteCohorts
};
