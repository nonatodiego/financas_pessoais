let aux = sessionStorage.getItem("grupo01-29.11.2022-login");
let login = JSON.parse(aux);
if(login){
   window.location = "login.html";
}
console.log(login);