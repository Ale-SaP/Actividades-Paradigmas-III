export function switch_1() {
    let palabra;
    palabra = prompt('Ingrese una de estas palabras (casa, mesa, perro, gato) para traducirlas en ingles');
    switch (palabra) {
        case 'casa':
            alert('house');
            break;
        case 'mesa':
            alert('table');
            break;
        case 'perro':
            alert('dog');
            break;
        case 'gato':
            alert('cat');
            break;
        default:
            alert('Solo se puede traducir (casa, mesa, perro, gato)');
            break;
    }
}