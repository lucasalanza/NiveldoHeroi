function classificarHeroi(xp) {
  let nivel;

  switch (true) {
    case xp <= 1000:
      nivel = "Ferro";
      break;
    case xp <= 2000:
      nivel = "Bronze";
      break;
    case xp <= 5000:
      nivel = "Prata";
      break;
    case xp <= 7000:
      nivel = "Ouro";
      break;
    case xp <= 8000:
      nivel = "Platina";
      break;
    case xp <= 9000:
      nivel = "Ascendente";
      break;
    case xp <= 10000:
      nivel = "Imortal";
      break;
    default:
      nivel = "Radiante";
      break;
  }

  return nivel;
}

function avaliarHeroi(nome, xp) {
  const nivel = classificarHeroi(xp);
  return `O Herói de nome ${nome} está no nível ${nivel}`;
}

module.exports = {
  avaliarHeroi,
};

if (require.main === module) {
  const nome = process.argv[2];
  const xp = parseInt(process.argv[3], 10);

  if (nome && !isNaN(xp)) {
    console.log(avaliarHeroi(nome, xp));
  } else {
    console.log("Por favor, forneça o nome do herói e a quantidade de XP.");
  }
}
