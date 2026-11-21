function enviar(){
    let statusText = document.getElementById("aa-status");

    setTimeout(() => {
        statusText.textContent = "ENVIADO!";
    }, 3000);
}