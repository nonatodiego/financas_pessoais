let formulário = document.querySelector("form");

function usuárioVálido(username, senha){
    return username === "admin" && senha === "1234";
}

function submissão(evento){
   evento.preventDefault();
   let username = document.querySelector("#username").value;
   let senha = document.querySelector("#senha").value;
   if (usuárioVálido(username, senha)){
      sessionStorage.setItem("grupo01-29.11.2022-login", true);
      window.location = "index.html";
   }
   else{
    sessionStorage.setItem("grupo01-29.11.2022-login", false);  
    alert ("Usuário ou senha inválidos");

   }


}

formulário.addEventListener("submit", submissão);

