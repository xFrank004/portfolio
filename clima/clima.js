async function buscarClima() {
    const ciudad = document.getElementById('ciudad').value;
    const res = await fetch(`https://wttr.in/${ciudad}?format=j1`);
    const data = await res.json();
    const clima = data.current_condition[0];
    document.getElementById('resultado').innerText =
      `Temp: ${clima.temp_C}°C, Condición: ${clima.weatherDesc[0].value}`;
  }