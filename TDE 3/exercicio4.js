function filtrarArray(funcaoFiltro, array) {
    const novoArray = [];

    for (let i = 0; i < array.length; i++) {
        if (funcaoFiltro(array[i])) {
            novoArray.push(array[i]);
        }
    }

    return novoArray;
}

function filtroMaiorQueCinco(numero) {
    return numero > 5;
}

const arrayOriginal = [2, 6, 8, 3, 1, 7, 9];
const arrayFiltrado = filtrarArray(filtroMaiorQueCinco, arrayOriginal);
console.log(arrayFiltrado);
