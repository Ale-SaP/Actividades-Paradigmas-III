export function array_1() {
    function cargar(vec) {
        for (let f = 0; f < vec.length; f++) {
            let valor = prompt('Ingrese componente:');
            vec[f] = parseInt(valor);
        }
    }

    function sumar(vec) {
        let suma = 0;
        for (let f = 0; f < vec.length; f++) {
            suma = suma + vec[f];
        }
        console.log('Valor acumulado de las componentes:' + suma);
    }

    function sumarMayor36(vec) {
        let suma = 0;
        for (let f = 0; f < vec.length; f++) {
            if (vec[f] > 36) {
                suma = suma + vec[f];
            }
        }
        console.log('Valor acumulado de las componentes mayores a 36:' + suma );
    }

    function cantidadMayores50(vec) {
        let cant = 0;
        for (let f = 0; f < vec.length; f++) {
            if (vec[f] > 50) {
                cant = cant + 1;
            }
        }
        console.log('Cantidad de componentes mayores a 50:' + cant );
    }

    let vec = new Array(8);
    cargar(vec);
    sumar(vec);
    sumarMayor36(vec);
    cantidadMayores50(vec);
}

export function array_2() {
    function cargarVectores(vec1, vec2) {

        for (let f = 0; f < vec1.length; f++) {
            let valor = prompt('Ingrese componente del primer vector:', '');
            vec1[f] = parseInt(valor);
        }
        for (let f = 0; f < vec2.length; f++) {
            let valor = prompt('Ingrese componente del segundo vector:', '');
            vec2[f] = parseInt(valor);
        }
    }

    function sumarVectores(vec1, vec2, vecsuma) {
        for (let f = 0; f < vecsuma.length; f++) {
            vecsuma[f] = vec1[f] + vec2[f];
        }
    }

    function imprimirVector(vecsuma) {
        for (let f = 0; f < vecsuma.length; f++) {
            console.log(vecsuma[f] + ' ');
        }
    }

    let vec1 = new Array(5);
    let vec2 = new Array(5);
    let vecsuma = new Array(5);
    cargarVectores(vec1, vec2);
    sumarVectores(vec1, vec2, vecsuma);
    imprimirVector(vecsuma);
}

export function date_1() {
    let fecha
    fecha = new Date();
    let mes = fecha.getMonth();
    if (mes < 4) {
        console.log('Nos encontramos en el primer cuatrimestre del año');
    } else {
        if (mes < 8) {
            console.log('Nos encontramos en el segundo cuatrimestre del año');
        } else {
            console.log('Nos encontramos en el tercer cuatrimestre del año');
        }
    }
}

export function date_2() {
    function retornarDiaSemana(dia) {
        switch (dia) {
            case 0:
                return 'Domingo';
            case 1:
                return 'Lunes';
            case 2:
                return 'Martes';
            case 3:
                return 'Miércoles';
            case 4:
                return 'Jueves';
            case 5:
                return 'Viernes';
            case 6:
                return 'Sábado';
            default:
                return 'día inválido';
        }
    }

    function retornarMes(mes) {
        switch (mes) {
            case 0:
                return 'Enero';
            case 1:
                return 'Febrero';
            case 2:
                return 'Marzo';
            case 3:
                return 'Abril';
            case 4:
                return 'Mayo';
            case 5:
                return 'Junio';
            case 6:
                return 'Julio';
            case 7:
                return 'Agosto';
            case 8:
                return 'Septiembre';
            case 9:
                return 'Octubre';
            case 10:
                return 'Noviembre';
            case 11:
                return 'Diciembre';
            default:
                return 'mes inválido';
        }
    }

    function retornarFechaTexto() {
        let fecha = new Date();
        let cadena = 'Hoy es ' + retornarDiaSemana(fecha.getDay()) + ' ' + fecha.getDate() + ' de ' +
            retornarMes(fecha.getMonth()) + ' de ' + fecha.getFullYear();
        return cadena;
    }

    alert(retornarFechaTexto());

}