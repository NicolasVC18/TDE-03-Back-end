function mapearArray(funcao, array) {
    const novoArray = [];

    for (let i = 0; i < array.length; i++) {
        novoArray.push(funcao(array[i]));
    }

    return novoArray;
}

function dobrar(numero) {
    return numero * 2;
}

const arrayOriginal = [1, 2, 3, 4, 5];
const arrayDobrado = mapearArray(dobrar, arrayOriginal);
console.log(arrayDobrado);


