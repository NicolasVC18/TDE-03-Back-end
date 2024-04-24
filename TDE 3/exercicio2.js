function somaElementosPares(array) {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            soma += array[i];
        }
    }

    return soma;
}

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(somaElementosPares(arrayNumeros));
