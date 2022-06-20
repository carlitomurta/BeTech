const TAREFAS_KEY = "tarefas";

const tarefas = localStorage.getItem(TAREFAS_KEY);

const checkItem = (el) => {
  const labelEl = document.getElementById(el.id);
  if (!el.checked) {
    labelEl.classList.remove("checked_label");
  } else {
    localStorage.setItem(TAREFAS_KEY, JSON.stringify({ id: el.id, value: el.checked }));
    labelEl.classList.add("checked_label");
  }
};

// Local Storage - Armazenamento local - Armazenamento do Browser
// - Contas, Login, Permissoes, Processo de cadastro

// Session Storage - Armazenamento por sessao - Armazenamento por abas
// - Dados trafegaveis

// Cookies - Armazenamento de trafego - API's - SEO
