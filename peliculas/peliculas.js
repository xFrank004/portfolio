async function buscarPelicula() {
    const titulo = document.getElementById('titulo').value;
    const res = await fetch(`https://www.omdbapi.com/?apikey=4688f6bd&t=${encodeURIComponent(titulo)}`);
    const data = await res.json();
  
    if (data.Response === "True") {
      document.getElementById('pelicula').innerHTML = `
        <h2>${data.Title} (${data.Year})</h2>
        <img src="${data.Poster}" alt="Poster" style="max-width:200px">
        <p><strong>Género:</strong> ${data.Genre}</p>
        <p><strong>Sinopsis:</strong> ${data.Plot}</p>
      `;
    } else {
      document.getElementById('pelicula').innerText = 'Película no encontrada';
    }
  }