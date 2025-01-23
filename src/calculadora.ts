// Función principal para realizar los cálculos
function calculater(operation: string): void {
    // Capturamos los valores de los inputs
    const num1Input = document.getElementById("num1") as HTMLInputElement;
    const num2Input = document.getElementById("num2") as HTMLInputElement;
    const resultDisplay = document.getElementById("result") as HTMLElement;
  
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
  
    // Validamos si los valores son números válidos
    if (isNaN(num1) || isNaN(num2)) {
      resultDisplay.textContent = "Por favor, ingresa números válidos.";
      return;
    }
  
    // Calculamos el resultado basado en la operación
    let result: number;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          resultDisplay.textContent = "No se puede dividir entre 0.";
          return;
        }
        result = num1 / num2;
        break;
      default:
        resultDisplay.textContent = "Operación no válida.";
        return;
    }
  
    // Mostramos el resultado en pantalla
    resultDisplay.textContent = result.toString();
  }
  