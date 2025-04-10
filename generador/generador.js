const ideas1 = ["Una pizza", "Un dragón", "Un auto"],
      ideas2 = ["volador", "espacial", "inteligente"];

function generarIdea() {
  const i1 = ideas1[Math.floor(Math.random() * ideas1.length)];
  const i2 = ideas2[Math.floor(Math.random() * ideas2.length)];
  document.getElementById('idea').innerText = `${i1} ${i2}`;
}