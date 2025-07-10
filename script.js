// ========== NAVBAR SCROLL TRANSPARENTE ==========
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    nav.style.backgroundColor = window.scrollY > 50
      ? 'rgba(0, 0, 0, 0.8)'
      : 'transparent';
  });
});

// ========== RELOJ CUENTA REGRESIVA ==========
function actualizarCuentaRegresiva() {
  const fechaObjetivo = new Date("2025-09-07T00:00:00").getTime();
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    document.getElementById("mensaje-dia").textContent = "¡El día ha llegado!";
    ["days", "hours", "minutes", "seconds"].forEach(id => {
      document.getElementById(id).textContent = "00";
    });
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = dias.toString().padStart(2, "0");
  document.getElementById("hours").textContent = horas.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutos.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = segundos.toString().padStart(2, "0");
}

setInterval(actualizarCuentaRegresiva, 1000);
actualizarCuentaRegresiva(); // Al cargar

// ========== CARRUSEL DE IMÁGENES ==========
let indiceActivo = 0;

function actualizarCarrusel() {
  const carrusel = document.getElementById("galeria-scroll");
  const imagenes = carrusel.querySelectorAll("img");

  imagenes.forEach((img, index) => {
    img.classList.toggle("activo", index === indiceActivo);
  });

  const anchoImagen = 270; // ancho de imagen + margen
  const offset = (indiceActivo - 1) * anchoImagen;
  carrusel.style.transform = `translateX(-${offset}px)`;
}

function moverCarrusel(direccion) {
  const imagenes = document.querySelectorAll("#galeria-scroll img");
  const total = imagenes.length;
  indiceActivo = (indiceActivo + direccion + total) % total;
  actualizarCarrusel();
}

window.addEventListener("load", actualizarCarrusel);
