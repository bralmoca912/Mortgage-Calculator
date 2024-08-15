// Selecciona los botones y los divs
const clearButton = document.getElementById('clearButton');
const calcButton = document.getElementById('calculateButton');
const resultsI = document.querySelector('.resultsI');
const resultsC = document.querySelector('.resultsC');
var inputs = document.querySelectorAll('#formCalculator');
let resultMonth, resultOver;


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
  const num0 = parseFloat(document.getElementById('num0').value) || 0;
  const num1 = parseFloat(document.getElementById('num1').value) || 0;
  const num2 = parseFloat(document.getElementById('num2').value) || 0;
  const payType = parseFloat(document.querySelector('input[name="pago"]:checked')?.value);

  r0 = (num2 * 0.01);
  r1 = (1 + r0) ** num1;

  const resultMonth0 = (num0 * r0 * r1) / (r1 - 1);
  const resultOver0 = resultMonth0 * 12;

  const resultOver1 = resultOver0 - num0;
  const resultMonth1 = resultOver1 / num1;

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

