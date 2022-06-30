const TAREFAS_KEY = "tarefas";
const conteudo = document.getElementById("conteudo");
const lista = document.getElementById("lista");
let tarefas = JSON.parse(localStorage.getItem(TAREFAS_KEY));

const iniciar = () => {
  if (tarefas) {
    construir();
  } else {
    notFound();
  }
};

const construir = () => {
  console.log(tarefas);
  tarefas.forEach((item) => {
    lista.innerHTML += `
    <li class="item">
    <label id="${item.id}" class="${item.checked ? "checked_label" : ""}">
      <input id="${item.id}" type="checkbox" ${
      item.checked ? "checked" : ""
    } onclick="checkItem(this)" />
      ${item.nome}
    </label>
    <div class="categorias">
      ${(() => {
        let string = "";
        if (item.categorias) {
          item.categorias.forEach((categoria) => {
            string += `<div class="pilula">${categoria}</div>`;
          });
        }
        return string;
      })()}
    </div>
  </li>`;
  });
};

const notFound = () => {
  const paragraph = document.createElement("p");
  paragraph.textContent = "Nao existem tarefas para hoje :D.";
  conteudo.append(paragraph);
};

const gerarTarefa = (item) => {
  lista.innerHTML += `
    <li class="item">
    <label id="${item.id}">
      <input id="${item.id}" type="checkbox" ${
    item.checked ? "checked" : ""
  } onclick="checkItem(this)" />
      ${item.nome}
    </label>
  </li>`;
  if (tarefas) {
    const p = document.querySelector("p");
    conteudo.removeChild(p);
  }
};

const adicionarTarefa = () => {
  const nome = prompt("Adicione um titulo para sua tarefa!", "");
  if (nome) {
    const item = {
      id: tarefas ? tarefas.length + 1 : 1,
      nome,
      checked: false,
    };
    tarefas = tarefas ? [...tarefas, item] : [item];
    localStorage.setItem(TAREFAS_KEY, JSON.stringify(tarefas));
    gerarTarefa(item);
  } else {
    // Nao faça nada
  }
};

const checkItem = (el) => {
  const tarefa = tarefas.find((item) => item.id == el.id);
  const item = tarefas[tarefas.indexOf(tarefa)];
  const labelEl = document.getElementById(el.id);
  if (!el.checked) {
    labelEl.classList.remove("checked_label");
    item.checked = false;
  } else {
    labelEl.classList.add("checked_label");
    item.checked = true;
  }
  localStorage.setItem(TAREFAS_KEY, JSON.stringify(tarefas));
};

// Local Storage - Armazenamento local - Armazenamento do Browser
// - Contas, Login, Permissoes, Processo de cadastro

// Session Storage - Armazenamento por sessao - Armazenamento por abas
// - Dados trafegaveis

// Cookies - Armazenamento de trafego - API's - SEO

// <div class="categorias">
//   $
//   {(() => {
//     let string = "";
//     if (item.categorias) {
//       item.categorias.forEach((categoria) => {
//         string += `<div class="pilula">${categoria}</div>`;
//       });
//     }
//     return string;
//   })()}
// </div>;
