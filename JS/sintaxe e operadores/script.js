function comprararNumero(n1, n2) {
    const primeiraFrase = criarPrimeira(n1, n2);
    const segundaFrase = criarSegunda(n1, n2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criarPrimeira(n1, n2) {
    let saoiguais = '';

    if (n1 !== n2) {
        saoiguais = "Não!"
    }

    return `Os números ${n1} e ${n2} ${saoiguais} são iguais!`
};

function criarSegunda(n1, n2) {
    const soma = n1 + n2;

    let resultmenor = "menor";
    let resultmaior = "maior";

    const compara10 = soma < 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultmenor = "menor";
    }

    if (compara20) {
        resultmaior = "maior";
    }
    return ` Sua soma é ${soma}, e é ${resultmenor} que 10 e  ${resultmaior} que 20.`
}

console.log(comprararNumero(10, 10))