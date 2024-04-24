function gerarLista(n, funcaoGeracao) {
    const lista = [];
    
    for (let i = 0; i < n; i++) {
        lista.push(funcaoGeracao(i));
    }

    return lista;
}

function gerarValorPorIndice(indice) {
    return indice * 2;
}

const tamanhoLista = 5;
const listaGerada = gerarLista(tamanhoLista, gerarValorPorIndice);
console.log(listaGerada);
