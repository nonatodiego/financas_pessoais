function salvarEntrada() {

    let novaEntrada = {};
 
    novaEntrada.usuario = "admin";
    novaEntrada.categorias = document.querySelector("#categorias").value;
    novaEntrada.valor = document.querySelector("#valor").value;
    novaEntrada.date = document.querySelector("#date").value;
    novaEntrada.desc = document.querySelector("#desc").value;
 
 
    let entradasExistentesJson = sessionStorage.getItem("entradas");
    let todasEntradasArray
 
    if (entradasExistentesJson == null) {
       todasEntradasArray = []
    } else {
       todasEntradasArray = JSON.parse(entradasExistentesJson);
    }
 
    todasEntradasArray.push(novaEntrada);
 
    sessionStorage.setItem("entradas", JSON.stringify(todasEntradasArray));
    alert("Entrada cadastrada com sucesso!")
 }
 