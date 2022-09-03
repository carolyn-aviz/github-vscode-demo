function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const person1 = {
    nome: 'John',
    idade: 20,
};

const person2 = {
    nome: 'Will',
    idade: 30,
};

const animal = {
    nome: 'Bob',
    idade: 10,
    rac: 'Pug',
};

console.log(calculaIdade.call(person2, 20));