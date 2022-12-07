document.getElementById("contactMeButton").addEventListener("click", (e) => {
    document.getElementById("offcanvasWithBothOptions").focus();
});
//LOGIN EVENTS HANDLERS
const logInButton = document.getElementById("logInButton");
const logInModalComponent = document.getElementById("formLoginModal");
const formLoginBtn = document.getElementById("formLoginBtn");
formLoginBtn.addEventListener("click", () => {
    window.alert("Verificacion en el servidor del usuario");
});
const formLoginBtnCancel = document.getElementById("formLoginBtnCancel");
formLoginBtnCancel.addEventListener("click", () => {
    window.alert("Cancelar envio del formulario de verificacion de administrador");
    logInModalComponent.style.display = "none";
});
logInButton.addEventListener("click", () => {
    logInModalComponent.style.display = "flex";
});
