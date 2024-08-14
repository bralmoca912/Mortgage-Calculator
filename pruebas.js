
document.getElementById('calculateButton').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value) || 0;
  const num2 = parseFloat(document.getElementById('num2').value) || 0;
  const num3 = parseFloat(document.getElementById('num3').value) || 0;
  const multiplier = parseFloat(document.querySelector('input[name="option"]:checked')?.value) || 1;
  const result = num1 * (num3 / 12) * num2 * multiplier;

  // Mostrar el resultado
  document.getElementById('result').textContent = `Resultado: ${result.toFixed(2)}`;
});

// const toggleButton = document.getElementById('toggleButton');
// const contentDiv = document.getElementById('content');
//
// // Agrega un evento de clic al botón
// toggleButton.addEventListener('click', function () {
//   // Verifica si el div está oculto y alterna la clase 'hidden'
//   if (contentDiv.classList.contains('hidden')) {
//     contentDiv.classList.remove('hidden'); // Muestra el div
//     toggleButton.textContent = 'Ocultar contenido'; // Cambia el texto del botón
//   } else {
//     contentDiv.classList.add('hidden'); // Oculta el div
//     toggleButton.textContent = 'Mostrar contenido'; // Cambia el texto del botón
//   }
// });


// // Agrega un evento de clic al calcButton
// calcButton.addEventListener('click', function (action1) {
//   calcButtonAction(action1);
// });
// // Agrega un evento de keydon 'Enter' al calcButton
// calcButton.addEventListener('keydown', function (action1) {
//   if (event.key === 'Enter') { calcButtonAction(action1); }
// });
// function calcButtonAction(action1) {
//   resultsI.classList.add('hidden');
//   resultsC.classList.remove('hidden');}
