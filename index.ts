document.getElementById("contactMeButton").addEventListener("click", (e) => {
  document.getElementById("offcanvasWithBothOptions").focus();
});

//LOGIN EVENTS HANDLERS

const logInButton = document.getElementById("logInButton") as HTMLElement;
const logInModalComponent = document.getElementById("formLoginModal") as HTMLElement;

const formLoginBtn = document.getElementById("formLoginBtn") as HTMLElement;
formLoginBtn.addEventListener("click", () => {
  window.alert("Verificacion en el servidor del usuario");
});
const formLoginBtnCancel = document.getElementById("formLoginBtnCancel") as HTMLElement;
formLoginBtnCancel.addEventListener("click", () => {
  window.alert("Cancelar envio del formulario de verificacion de administrador");
  logInModalComponent.style.display = "none";
});

logInButton.addEventListener("click", () => {
  logInModalComponent.style.display = "flex";
});
