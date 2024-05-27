document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const heroisList = document.getElementById("herois");
  const respostaAvaliacao = document.getElementById("respostaAvaliação");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      const nomeHeroi = document.getElementById("iNome").value;
      const xpHeroi = parseInt(document.getElementById("iXp").value, 10);

      const nivelHeroi = classificarHeroi(xpHeroi);

      adicionarHeroiNaLista(
        nomeHeroi,
        xpHeroi,
        nivelHeroi.nivel,
        nivelHeroi.cor
      );
      respostaAvaliacao.textContent = `O Herói de nome ${nomeHeroi} está no nível ${nivelHeroi.nivel}`;

      form.reset();
      form.classList.remove("was-validated");
    } else {
      form.classList.add("was-validated");
    }
  });

  function classificarHeroi(xp) {
    let nivel, cor, alertClass;

    switch (true) {
      case xp <= 1000:
        nivel = "Ferro";
        cor = "list-group-item-primary";
        alertClass = "alert-primary";
        break;
      case xp <= 2000:
        nivel = "Bronze";
        cor = "list-group-item-secondary";
        alertClass = "alert-secondary";
        break;
      case xp <= 5000:
        nivel = "Prata";
        cor = "list-group-item-success";
        alertClass = "alert-success";
        break;
      case xp <= 7000:
        nivel = "Ouro";
        cor = "list-group-item-danger";
        alertClass = "alert-danger";
        break;
      case xp <= 8000:
        nivel = "Platina";
        cor = "list-group-item-warning";
        alertClass = "alert-warning";
        break;
      case xp <= 9000:
        nivel = "Ascendente";
        cor = "list-group-item-info";
        alertClass = "alert-info";
        break;
      case xp <= 10000:
        nivel = "Imortal";
        cor = "list-group-item-light";
        alertClass = "alert-light";
        break;
      default:
        nivel = "Radiante";
        cor = "list-group-item-dark";
        alertClass = "alert-dark";
        break;
    }

    return { nivel, cor, alertClass };
  }

  function adicionarHeroiNaLista(nome, xp, nivel, cor) {
    const novoItem = document.createElement("a");
    novoItem.href = "#";
    novoItem.className = `list-group-item list-group-item-action ${cor}`;
    novoItem.innerHTML = `${nome} - ${xp} XP <span class="badge text-bg-primary rounded-pill">${nivel}</span>`;

    // Adicionar o novo item no início da lista
    heroisList.insertBefore(novoItem, heroisList.firstChild);
  }

  function exibirAlertaNivel(mensagem, alertClass) {
    alertaNivel.innerHTML = `<div class="alert ${alertClass}" role="alert">${mensagem}</div>`;
  }

  function adicionarHeroiNaLista(nome, xp, nivel, cor) {
    const novoItem = document.createElement("a");
    novoItem.href = "#";
    novoItem.className = `list-group-item list-group-item-action ${cor}`;
    novoItem.innerHTML = `Herói: ${nome} - ${xp} XP      <span class="badge text-bg-primary rounded-pill">${nivel}</span>`;

    // Adicionar o novo item no início da lista
    heroisList.insertBefore(novoItem, heroisList.firstChild);
  }
});
