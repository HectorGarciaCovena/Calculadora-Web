let display = document.getElementById('display');

function mostrarEnDisplay(value) {
  display.value += value;
}

function limpiarDisplay() {
  display.value = '';
}

function borraElemento() {
  var contenidoActual=display.value;
  // Verificar que hay al menos un dígito antes de retroceder
  if (contenidoActual.length > 0) {
    // Eliminar el último dígito
    var nuevoContenido = contenidoActual.slice(0, -1);
    display.value = nuevoContenido;
  }
}

function agregarNumero(numero) {
  // Agregar el número al final del contenido actual
  display.value += numero;
}

// Función que calcula el Resultado
function calcularResultado() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}