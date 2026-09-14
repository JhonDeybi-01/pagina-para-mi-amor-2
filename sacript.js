function mostrarMensaje() {

    const mensaje = document.getElementById("mensaje");

    mensaje.classList.remove("oculto");

    mensaje.scrollIntoView({
        behavior: "smooth"
    });

}


// Crear corazones automáticamente

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

  corazon.innerHTML = "♥";

    corazon.style.left = Math.random() * 100 + "vw";

    corazon.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    corazon.style.animationDuration =
        (Math.random() * 3 + 4) + "s";

    document.querySelector(".corazones")
        .appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 7000);

}

setInterval(crearCorazon, 500);