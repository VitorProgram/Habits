const form = document.querySelector(`#form-habits`)
const nlwSetup = new NLWSetup(form)

const data = {
  run: [`01-01`, `01-02`, `01-03`, `01-04`, `01-05`, `01-06`, `01-07`, `01-08`],
}

nlwSetup.setData(data)
nlwSetup.load()