let logado = sessionStorage.getItem("grupo01-29.11.2022-login");

if (!logado) {
    window.location = "login.html";
}
