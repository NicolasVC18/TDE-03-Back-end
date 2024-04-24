function validarDados(funcaoValidacao, objeto) {
    return funcaoValidacao(objeto);
}

function validarNome(objeto) {
    return objeto.nome && objeto.nome.length > 3;
}

const usuario = {
    nome: "João",
    idade: 30
};

console.log(validarDados(validarNome, usuario));
