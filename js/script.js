const form = document.querySelector(`#form-habits`)
const nlwSetup = new NLWSetup(form)
// Selecionando o botão dentro do header
const button = document.querySelector(`header button`)

// Function após o click
button.addEventListener(`click`, add)
// Todas as vezes que o formullário for alterado, irá salvar as informações no navegador
form.addEventListener(`change`, save)

function add () {
  // Criando ma nova data, transformando-a em data brasileira e excluindo os números de ano 
  const today = new Date().toLocaleDateString(`pt-br`).slice(0, -5)
  // Verificando se o dia já existe
  const dayExists = nlwSetup.dayExists(today)

  // Se o dia já existir, não vai adiciona-lo mais
  if (dayExists === true) {
    alert(`Dia incluso`)
  } 
  // Se não existir, adicione-o
  else {
    nlwSetup.addDay(today) 
  }
}

// Todas as vezes que o formullário for alterado, irá salvar as informações no navegador
function save () {
  localStorage.setItem(`save habits`, JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem(`save habits`)) || {}
nlwSetup.setData(data)
 nlwSetup.load()