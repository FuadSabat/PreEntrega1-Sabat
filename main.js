// Función que sirve para obligar al usuario a que ingrese bien el dato que pedimos
//En este caso numero

function pedirPorNumero(texto, max, tipo) {
  let num = parseFloat(prompt(texto));

  while (isNaN(num) || num > max) {
    let mensajeError;

    switch (tipo) {
      case "monto":
        mensajeError = `Dato mal ingresado, el monto supera el $${max}, elige una opción válida`;
        break;

      case "tasa":
        mensajeError = `La tasa no puede ser mayor a ${max}%, elige una opción válida`;
        break;
      case "anios":
        mensajeError = `Los años no pueden ser mayor a ${max}, elige una opción válida`;
        break;
      default:
        mensajeError = "Dato mal ingresado";
    }

    alert(mensajeError);
    num = parseFloat(prompt(texto));
  }

  return num;
}

while (true) {
  let monto = pedirPorNumero(
    "Ingrese el monto del depósito ($): ",
    1000000,
    "monto"
  );
  let tasaAnual = pedirPorNumero(
    "Ingrese la tasa de interés anual (%): ",
    10,
    "tasa"
  );
  let anios = pedirPorNumero("Ingrese el número de años ", 30, "anios");

  const tasaDecimal = tasaAnual / 100;

  const intereses = monto * tasaDecimal * anios;

  const montoTotal = monto + intereses;

  //  Mostrar resultados al usuario mediante alert()
  alert("Monto Total al Final del Plazo: $" + montoTotal.toFixed(2));
  alert("Intereses Ganados: $" + intereses.toFixed(2));

  // Preguntar al usuario si desea hacer otro cálculo
  const continuar = confirm("¿Deseas realizar otro cálculo?");
  if (!continuar) {
    break; // Salir del bucle si el usuario no desea continuar
  }
}
