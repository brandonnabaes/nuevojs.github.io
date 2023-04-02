// Definimos un objeto para almacenar las operaciones
const calculator = {
    // Función para sumar dos números
    sum: function(a, b) {
      return a + b;
    },
  
    // Función para restar dos números
    subtract: function(a, b) {
      return a - b;
    },
  
    // Función para multiplicar dos números
    multiply: function(a, b) {
      return a * b;
    },
  
    // Función para dividir dos números
    divide: function(a, b) {
      return a / b;
    }
  };
  
  // Definimos un array para almacenar los números
  const numbers = [];
  
  // Pedimos al usuario que ingrese dos números
  for (let i = 0; i < 2; i++) {
    numbers.push(parseFloat(prompt(`Ingrese el número ${i + 1}:`)));
  }
  
  // Pedimos al usuario que seleccione una operación
  const operation = prompt(`Seleccione una operación:
    1. Suma
    2. Resta
    3. Multiplicación
    4. División`);
  
  // Realizamos la operación seleccionada
  let result;
  switch (operation) {
    case '1':
      result = calculator.sum(numbers[0], numbers[1]);
      break;
    case '2':
      result = calculator.subtract(numbers[0], numbers[1]);
      break;
    case '3':
      result = calculator.multiply(numbers[0], numbers[1]);
      break;
    case '4':
      result = calculator.divide(numbers[0], numbers[1]);
      break;
    default:
      alert('Operación no válida');
  }
  
  // Mostramos el resultado al usuario
  if (result) {
    alert(`El resultado es: ${result}`);
  }
