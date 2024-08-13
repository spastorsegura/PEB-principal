// Obtener todas las opciones y los divs
const opciones = Array.from({ length: 11 }, (_, i) =>
  document.querySelectorAll(`.opcion${i + 1}`)
);
const divs = Array.from({ length: 11 }, (_, i) =>
  document.getElementById(`div${i + 1}`)
);

// Añadir eventos a las opciones
opciones.forEach((grupoOpciones, index) => {
  grupoOpciones.forEach((opcion) => {
    opcion.addEventListener("click", function () {
      // Ocultar todos los divs
      divs.forEach((div) => {
        div.classList.add("d-none");
        div.classList.remove(`mostrar${div.dataset.index}`);
      });

      // Mostrar el div correspondiente
      divs[index].classList.remove("d-none");
      divs[index].classList.add(`mostrar${index + 1}`);
    });
  });
});

// Manejar el botón de "atrás"
document.querySelectorAll(".back").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    const section = button.closest("section");
    section.classList.add("d-none");

    // Esperar a que la transición se complete antes de ir hacia atrás
    setTimeout(() => {
      window.history.back();
    }, 500); // 500ms coincide con la duración de la transición
  });
});

document.querySelectorAll('.offcanvas-body a').forEach(link => {
  link.addEventListener('click', function() {
    // Cerrar el offcanvas usando Bootstrap
    const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvas'));
    const carousel = document.querySelector("#carouselExample")
    offcanvas.hide();
    carousel.hide();
  });
});



// backend Express
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, este es mi sitio web en Node.js!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


