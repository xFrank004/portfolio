const ideas = [
    "Una app para encontrar plantas según tu estado de ánimo",
    "Una red social para perros influencers",
    "Un delivery de memes curados a mano",
    "Un juego donde ganás si dejás de jugar",
    "Una app que adivina tu comida favorita por tu historial de YouTube"
  ];
  
  function generarIdea() {
    const resultado = document.getElementById("ideaResultado");
    const indice = Math.floor(Math.random() * ideas.length);
    resultado.textContent = ideas[indice];
  }

  function obtenerClima() {
    const ciudad = document.getElementById("ciudad").value;
    const url = `https://wttr.in/${encodeURIComponent(ciudad)}?format=%C+%t\n`;
  
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const resultado = document.getElementById("resultadoClima");
        resultado.textContent = `Clima en ${ciudad}: ${data}`;
      })
      .catch(() => {
        document.getElementById("resultadoClima").textContent = "Error al obtener el clima.";
      });
  }

  function buscarPelicula() {
    const titulo = document.getElementById("pelicula").value;
    const url = `https://www.omdbapi.com/?apikey=4688f6bd&t=${encodeURIComponent(titulo)}`;
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const contenedor = document.getElementById("resultadoPelicula");
        if (data.Response === "False") {
          contenedor.textContent = "Película no encontrada.";
          return;
        }
        contenedor.innerHTML = `
          <h3>${data.Title} (${data.Year})</h3>
          <img src="${data.Poster}" alt="Poster de ${data.Title}" style="max-width:200px; border-radius:8px;">
          <p><strong>Género:</strong> ${data.Genre}</p>
          <p><strong>Sinopsis:</strong> ${data.Plot}</p>
        `;
      })
      .catch(() => {
        document.getElementById("resultadoPelicula").textContent = "Error al buscar la película.";
      });
  }