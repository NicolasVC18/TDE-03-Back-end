function encontrarMaiorElemento(array) {
    if (array.length === 0) {
        return undefined;
    }

    let maiorElemento = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorElemento) {
            maiorElemento = array[i];
        }
    }

    return maiorElemento;
}

const arrayNumeros = [10, 5, 8, 20, 3, 15];
console.log(encontrarMaiorElemento(arrayNumeros));
