// Sincronizar las letras con la canción "Lonely Day" de System of a Down
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
// Tiempos sincronizados correctamente con: sound/System-of-a-Down-Lonely-Day.mp3
var lyricsData = [
  // Sección 0:00
  { text: "Such a lonely day", time: 14 },
  { text: "And it's mine", time: 16 },
  { text: "The most loneliest day of my life", time: 19 },
  
  // Sección 0:26
  { text: "Such a lonely day", time: 26 },
  { text: "Should be bad", time: 28 },
  { text: "It's a day that I can't stand", time: 31 },
  
  // Sección 0:39
  { text: "The most loneliest day of my life", time: 39 },
  { text: "The most loneliest day of my life", time: 43 },
  
  // Sección 0:51
  { text: "Such a lonely day", time: 51 },
  { text: "Shouldn't exist", time: 53 },
  { text: "It's a day that I'll never miss", time: 56 },
  
  // Sección 1:04
  { text: "Such a lonely day", time: 64 },
  { text: "And it's mine", time: 66 },
  { text: "The most loneliest day of my life", time: 69 },
  
  // Sección 1:17
  { text: "And if you go", time: 77 },
  { text: "I wanna go with you", time: 79 },
  { text: "And if you die", time: 82 },
  { text: "I wanna die with you", time: 84 },
  
  // Sección 1:30
  { text: "Take your hand and walk away", time: 90 },
  
  // Sección 1:47
  { text: "The most loneliest day of my life", time: 107 },
  { text: "The most loneliest day of my life", time: 111 },
  
  // Sección 2:13
  { text: "The most loneliest day of my life", time: 133 },
  { text: "Such a lonely day", time: 136 },
  { text: "And it's mine", time: 138 },
  
  // Sección 2:32
  { text: "It's a day that I'm glad I survived", time: 152 },
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  
  // Busca la línea actual basada en el tiempo
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var timeIntoLine = time - currentLine.time;
    var opacity = Math.min(1, timeIntoLine / fadeInDuration);

    // Aplica el efecto de aparición suave
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Actualizar las letras cada 100ms para una sincronización más suave
var lyricsInterval = setInterval(updateLyrics, 100);

// Función para ocultar el título después de cierto tiempo
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000);
  }
}

// Llama a la función después de 15 segundos
setTimeout(ocultarTitulo, 15000);

// Función para reiniciar cuando la canción termina
audio.addEventListener("ended", function () {
  lyrics.style.opacity = 0;
  lyrics.innerHTML = "";
  clearInterval(lyricsInterval);
  
  // Mostrar el título nuevamente si lo deseas
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.display = "block";
    titulo.style.animation = "fadeIn 3s ease-in-out forwards";
  }
});

// Validar que el audio esté disponible
if (!audio) {
  console.error("❌ Error: No se encontró el elemento de audio");
} else {
  console.log("✅ Audio cargado correctamente:", audio.src);
  console.log("✅ Sistema de letras inicializado");
}
