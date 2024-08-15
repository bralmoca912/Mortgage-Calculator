// Selecciona los botones y los divs
const clearButton = document.getElementById('clearButton');
const calcButton = document.getElementById('calculateButton');
const resultsI = document.querySelector('.resultsI');
const resultsC = document.querySelector('.resultsC');
let num0, num1, num2, payType, resultMonth, resultOver;
let r0, r1, resultMonth0, resultMonth1, resultOver0, resultOver1;

// Evento del clearButton
clearButton.addEventListener('click', function () {
  resultsC.classList.add('hidden');
  resultsI.classList.remove('hidden');
  document.getElementById('num0').value = '';
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
});

// Eventos del calcButton y e.key 'Enter'
calcButton.addEventListener('click', handleEvent);
window.addEventListener('keyup', (e) => { // Escucha el evento en todo el DOM.
  if (e.key === 'Enter') {
    handleEvent();
  }
})

// Función para las acciones del calcButton
function handleEvent() {
  resultsI.classList.add('hidden');
  resultsC.classList.remove('hidden');
  num0 = parseFloat(document.getElementById('num0').value) || 0;
  num1 = parseFloat(document.getElementById('num1').value) || 0;
  num2 = parseFloat(document.getElementById('num2').value) || 0;
  payType = parseFloat(document.querySelector('input[name="pago"]:checked')?.value);

  r0 = (num2 * 0.01);
  r1 = (1 + r0) ** num1;
  resultMonth0 = (num0 * r0 * r1) / (r1 - 1);
  resultOver0 = resultMonth0 * 12;
  resultOver1 = resultOver0 - num0;
  resultMonth1 = resultOver1 / num1;

  if (payType === 0) {
    resultMonth = resultMonth0;
    resultOver = resultOver0;
  } else {
    resultMonth = resultMonth1;
    resultOver = resultOver1;
  }

  // Mostrar el resultado
  document.getElementById('resultMonth').textContent = `$ ${resultMonth.toFixed(2)}`;
  document.getElementById('resultOver').textContent = `$ ${resultOver.toFixed(2)}`;
}

