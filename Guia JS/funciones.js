//Funciones
export function funciones_1() {
    
    function mostrarRango() {
        let start = parseInt(prompt("Ingrese valor inicial"))
        let finish = parseInt(prompt("Ingrese valor final"))
        for (let f = start; f <= finish; f++) {
            console.log(f)
        }
    }
    mostrarRango();
}

//Funciones con Parametros
export function funciones_parametros_1() {
    function mostrarMenor(x1, x2, x3) {
        if (x1 < x2 && x1 < x3) {
            console.log('El menor de los tres valores es :' + x1);
        } else {
            if (x2 < x3) {
                console.log('El menor de los tres valores es :' + x2);
            } else {
                console.log('El menor de los tres valores es :' + x3);
            }
        }
    }
    //Mostramos los resultados:
    let valor1 = parseInt(prompt('Ingrese primer valor:'));
    let valor2 = parseInt(prompt('Ingrese segundo valor:'));
    let valor3 = parseInt(prompt('Ingrese tercer valor:'));
    console.log('Los tres valores ingresados son ' + valor1 + ' ' + valor2 + ' ' + valor3 + '<br>');
    mostrarMenor(valor1, valor2, valor3);
}


export function funciones_parametros_2() {
        function mostrarOrdenados(x1, x2, x3) {
            if (x1 < x2 && x1 < x3) {
                console.log(x1 + ' ');
                if (x2 < x3) {
                    console.log(x2 + ' ' + x3);
                } else {
                    console.log(x3 + ' ' + x2);
                }
            } else {
                if (x2 < x3) {
                    console.log(x2 + ' ');
                    if (x1 < x3) {
                        console.log(x1 + ' ' + x3);
                    } else {
                        console.log(x3 + ' ' + x1);
                    }
                } else {
                    console.log(x3 + ' ');
                    if (x1 < x2) {
                        console.log(x1 + ' ' + x2);
                    } else {
                        console.log(x2 + ' ' + x1);
                    }
                }
            }
        }
        //Mostramos los resultados:
        let valor1 = parseInt(prompt('Ingrese primer valor:'));
        let valor2 = parseInt(prompt('Ingrese segundo valor:'));
        let valor3 = parseInt(prompt('Ingrese tercer valor:'));
        console.log('Los tres valores ingresados son ' + valor1 + ' ' + valor2 + ' ' + valor3 + '<br>');
        console.log('Los valores ordenados de menor a mayor son: ');
        mostrarOrdenados(valor1, valor2, valor3);
}

//Funciones con retorno
export function funciones_retornan_1() {
    function retornarMayor(x1, x2, x3) {
        if (x1 > x2 && x1 > x3) {
            return x1;
        } else {
            if (x2 > x3) {
                return x2;
            } else {
                return x3;
            }
        }
    }

    //Mostramos los resultados:
    let valor1 = parseInt(prompt('Ingrese primer valor:'));
    let valor2 = parseInt(prompt('Ingrese segundo valor:'));
    let valor3 = parseInt(prompt('Ingrese tercer valor:'));
    console.log('Los tres valores ingresados son ' + valor1 + ' ' + valor2 + ' ' + valor3 + '<br>');
    let may = retornarMayor(valor1, valor2, valor3);
    console.log('El mayor de los tres es :' + may);

}
export function funciones_retornan_2() {
    function retornarPerimetro(lado) {
        let perimetro;
        perimetro = lado * 4;
        return perimetro;
    }

    let lado = parseInt(prompt('Ingrese la medida del lado de un cuadrado:'));
    console.log('El perímetro del cuadrado es:' + retornarPerimetro(lado));
}