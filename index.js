// Se asigna a variable display lo que tenga el contenga el display de la calculadora 
let display = document.getElementById('display');

// Se le da un valor primitivo a los objetos ingresados al display de la calculadora
function agregarObjeto(value) {
  display.value += value;
}

// Función para Limpiar display de la calculadora
function limpiarDisplay() {
  display.value = '';
}

// Función para Limpiar el ultimo elemento de la calculadora
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