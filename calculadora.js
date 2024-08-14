// Selecciona los botones y los divs
const clearButton = document.getElementById('clearButton');
const calcButton = document.getElementById('calculateButton');
const resultsI = document.querySelector('.resultsI');
const resultsC = document.querySelector('.resultsC');
var inputs = document.querySelectorAll('#formCalculator');

var numInputs = Array.from(document.querySelectorAll('#myForm input[type="number"]'));
var radioButtons = Array.from(document.querySelectorAll('#myForm input[type="radio"]'));

// Evento del clearButton
clearButton.addEventListener('click', function () {
  resultsC.classList.add('hidden');
  resultsI.classList.remove('hidden');
});

// Eventos del clearButton y e.key 'Enter'
calcButton.addEventListener('click', handleEvent);
window.addEventListener('keyup', (e) => { // window escucha el evento keyup en todo el documento (window).
  if (e.key === 'Enter') {
    handleEvent();
  }
})

function handleEvent() {
  resultsI.classList.add('hidden');
  resultsC.classList.remove('hidden');
  const num1 = parseFloat(document.getElementById('num1').value) || 0;
  const num2 = parseFloat(document.getElementById('num2').value) || 0;
  const num3 = parseFloat(document.getElementById('num3').value) || 0;
  const payType = parseFloat(document.querySelector('input[name="pago"]:checked')?.value) || 1;
  const resultMonth = num1 * (num3 / 12) * num2 * payType;

  // Mostrar el resultado
  document.getElementById('resultMonth').textContent = `${resultMonth.toFixed(2)}`;
}

