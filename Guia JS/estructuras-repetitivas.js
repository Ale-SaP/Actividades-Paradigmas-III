//Acumulador
export function acumulador_1() {
    let x = 0;
    let cant1 = 0;
    let cant2 = 0;
    while (x < 10) {
        let nota;
        nota = parseInt(prompt('Ingrese nota'));
        if (nota >= 7) {
            cant1 = cant1 + 1;
        } else {
            cant2 = cant2 + 1;
        }
        x = x + 1;
    }
    alert('Cantidad de alumnos con notas mayores o iguales a 7:' + cant1);
    alert('Cantidad de alumnos con notas menores a 7:' + cant2);
}


export function acumulador_2() {
    let x = 0;
    let suma = 0;
    while (x < 5) {
        let altura;
        altura = parseInt(prompt('Ingrese la altura en centímetros(Ej. 175)'));
        suma = suma + altura;
        x = x + 1;
    }
    let promedio = suma / 5;
    alert('La altura promedio de las cinco personas es:' + promedio);
}

//For
export function for_1() {
    let conta1 = 0;
    for (let f = 1; f <= 3; f++) {
        let base = parseInt(prompt('Ingrese la base:'));
        let altura = parseInt(prompt('Ingrese la altura:'));
        let superficie = base * altura / 2;
        if (superficie > 12) {
            conta1++;
        }
        alert('Triángulo nro: ' + f );
        alert('Base: ' + base );
        alert('Altura: ' + altura);
        alert('Superficie: ' + superficie);
    }
    alert('Cantidad de triángulos con superficie mayor a 12:' + conta1);
}

//While
export function while_1() {
    let serie;
    serie = 11;
    let x;
    x = 1;
    while (x <= 25) {
        alert(serie);
        x = x + 1;
        serie = serie + 11;
    }
}

export function while_2() {
    let multiplo;
    multiplo = 8;
    while (multiplo <= 500) {
        alert(multiplo);
        multiplo = multiplo + 8;
    }
}

//Do-While
export function do_while() {
    let valor;
    let suma = 0;
    do {
        valor = parseInt(prompt('Ingrese un valor (9999 para finalizar)'));
        if (valor != 9999) {
            suma = suma + valor;
        }
    } while (valor != 9999);
    alert('Valor acumulado total:' + suma);
    if (suma > 0) {
        alert('El valor acumulado es mayor a cero');
    } else {
        if (suma == 0) {
            alert('El valor acumulado es cero');
        } else {
            alert('El valor acumulado es menor a cero');
        }
    }
}

