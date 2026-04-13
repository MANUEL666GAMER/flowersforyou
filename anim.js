// ====================================
// ARCHIVO: anim.js - SOLO ANIMACIONES
// ====================================
// Este archivo contiene SOLO las animaciones de las flores
// Las letras están manejadas por: lyrics-lonely-day.js

// Inicializar animaciones de flores cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  console.log("✅ Animaciones de flores inicializadas");
  
  // Las animaciones CSS ya están definidas en main.css
  // Este archivo es para cualquier lógica de animación adicional que necesites
  
  // Ejemplo: Si necesitas activar/desactivar animaciones
  var flowers = document.querySelectorAll('.flower');
  flowers.forEach(function(flower) {
    // Las animaciones ya están activas por CSS
    console.log("🌹 Flor animada:", flower.className);
  });
});

// Función auxiliar para controlar animaciones si es necesario
function toggleAnimations(enable) {
  var container = document.querySelector('.container');
  if (enable) {
    container.style.animationPlayState = 'running';
    console.log("▶️ Animaciones activadas");
  } else {
    container.style.animationPlayState = 'paused';
    console.log("⏸️ Animaciones pausadas");
  }
}

// NOTA: Las letras ahora son manejadas por lyrics-lonely-day.js
// No incluyas código de letras aquí
