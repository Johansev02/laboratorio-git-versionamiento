const button = document.getElementById("messageButton"); const message = document.getElementById("message");

const messages = [
"Git permite guardar versiones del proyecto.",
"Con git add preparas los archivos para el commit.", "Con git commit guardas una versión del proyecto.", "Con git push subes tus cambios al repositorio remoto.", "Con git pull traes cambios desde el repositorio remoto."
];

let index = 0;
button.addEventListener("click", function () { message.textContent = messages[index];

index++;

if (index === messages.length) { index = 0;
}
});
