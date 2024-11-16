export function variables() {
    let nombre = 'Juan';
    let sueldo = 6500;
    console.log('Nombre:', nombre);
    console.log('Sueldo:', sueldo);
}

export function ingreso_datos() {
    let nombre;
    let edad;
    nombre = prompt('Ingrese su nombre a continuacion: ')
    edad = prompt('Ingrese su edad a continuacion: ')
    document.write(nombre + '<br>' + edad)
}

export function ope_log_1() {
    let num1, num2, num3;
        num1 = parseInt(prompt('Ingrese N°1 valor'));
        num2 = parseInt(prompt('Ingrese N°2 segundo valor'));
        num3 = parseInt(prompt('Ingrese N°3 tercer valor'));
        num3 = parseInt(num3);
        if (num1 < 10 || num2 < 10 || num3 < 10) {
            alert('Alguno de los números es menor a diez');
        }
}
