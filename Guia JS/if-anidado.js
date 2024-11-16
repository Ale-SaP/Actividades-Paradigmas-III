export function verificarSiEsNavidad() {
    let dia = parseInt(prompt("Ingrese el día:"));
    let mes = parseInt(prompt("Ingrese el mes:"));
    let anio = parseInt(prompt("Ingrese el año:"));

    // Verificar si es Navidad
    if (dia===24 && mes===12) {
        alert("La fecha ingresada corresponde a Navidad.");
    } else {
        alert("No es navidad aún.");
    }
}