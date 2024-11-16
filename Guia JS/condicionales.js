//Condicionales SIMPLES
export function cond_simples_1() {
    let nota1;
    let nota2;
    let nota3;
    nota1 = parseInt(prompt('Ingrese primer nota'));
    nota2 = parseInt(prompt('Ingrese segunda nota'));
    nota3 = parseInt(prompt('Ingrese tercer nota'));
    let suma;
    suma = nota1 + nota2 + nota3;
    let promedio;
    promedio = suma / 3;
    if (promedio >= 7) {
        console.log('Promocionado');
    }
    else {
        console.log('desaprobado');
    }
}

export function cond_simples_2() {
    let clave1;
    let clave2;
    clave1 = prompt('Ingrese una clave:');
    clave2 = prompt('Repita la clave:');
    if (clave1 == clave2) {
        console.log('Las dos claves son iguales');
    }
    else {
        console.log('Las claves no coinciden');
    }
}


//Condicionales COMPUESTOS
export function cond_compuesto_1() {
    let num1, num2;
    num1 = parseInt(prompt('Ingrese el primer número:'));
    num2 = parseInt(prompt('Ingrese el segundo número:'));
    if (num1 > num2) {
        let suma, diferencia;
        suma = num1 + num2;
        diferencia = num1 - num2;
        console.log('La suma es:' + suma);
        console.log('La diferencia es:' + diferencia);
    } else {
        let producto, division;
        producto = num1 * num2;
        division = num1 / num2;
        console.log('El producto es ' + producto);
        console.log('La división del primero respecto al segundo es:' + division);
    }
}

export function cond_compuesto_2() {
    //Verificamos si Aprobo
    let nota1, nota2, nota3;
    nota1 = prompt('Ingrese primer nota:');
    nota1 = parseInt(nota1);
    nota2 = prompt('Ingrese segunda nota:');
    nota2 = parseInt(nota2);
    nota3 = prompt('Ingrese tercer nota:');
    nota3 = parseInt(nota3);
    let suma;
    suma = nota1 + nota2 + nota3;
    let promedio;
    promedio = suma / 3;
    if (promedio >= 4) {
        console.log('Regular');
    } else {
        console.log('Reprobado');
    }
}

export function cond_compuestos_3() {
    let num;
    num = parseInt(prompt('Ingrese un valor comprendido entre 1 y 99:'));
    if (num < 10) {
        console.log('El valor ingresado tiene un dígito');
    } else {
        console.log('El valor ingresado tiene dos dígitos');
    }
}
