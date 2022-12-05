function salvarDespesa() {

    let novaDespesa = {};
 
    novaDespesa.usuario = "admin";
    novaDespesa.categorias = document.querySelector("#categorias").value;
    novaDespesa.valor = document.querySelector("#valor").value;
    novaDespesa.date = document.querySelector("#date").value;
    novaDespesa.desc = document.querySelector("#desc").value;
 
 
    let despesasExistentesJson = sessionStorage.getItem("despesas");
    let todasDespesasArray
 
    if (despesasExistentesJson == null) {
       todasDespesasArray = []
    } else {
       todasDespesasArray = JSON.parse(despesasExistentesJson);
    }
 
    todasDespesasArray.push(novaDespesa);
 
    sessionStorage.setItem("despesas", JSON.stringify(todasDespesasArray));
    alert("Despesa cadastrada com sucesso!")
 }
 