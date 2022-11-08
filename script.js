//Exemplo de objeto:
const estudante = {
    nome:"Arthur Jordí",
    sobrenome:"Alves Silva",
    numeroMatricula:1515,
    notasDoSemestre:[8, 10]

}
//adicionando propriedade ao objeto existente:
estudante.modulo = 'JavaScript'

console.log(estudante.nome)
console.log(estudante.notasDoSemestre[1])
console.log(estudante.modulo)
console.log(estudante)

const novoEstudante = {
    ...estudante,
    nome: "Astrodev",
    notasDoSemestre: [...estudante.notasDoSemestre, 9],
    modulo:"HTML"
}

console.log(novoEstudante)

const estudantesLabenu = [estudante,novoEstudante]

console.log(estudantesLabenu[0].nome)

const teste = [{nome:'arthur', idade: 23}]

const arrayTeste = [
    {
        nome:'Fernanda',
        idade: 20
    },
    {
        nome:'Matheus',
        idade: 10
    }
]

console.log(arrayTeste)


const carrinho ={
    nomeCliente:"Arthur",
    formaDePagamento:"cartão de crédito",
    endereco:"rua 000"
}
carrinho.compras = [{
        nomeProduto:"caderno",
        precoProduto:20.00 ,
        quantidadeProduto:2
    },
    {
        nomeProduto:"caneta preta",
        precoProduto: 6.00,
        quantidadeProduto: 2
    },
    {
        nomeProduto:"borracha",
        precoProduto:3.00,
        quantidadeProduto:3
    }
]
console.log(carrinho)
console.log(carrinho.compras.length)

const carrinhoPresente ={
    ...carrinho,
    nomeCliente:"Jordí",
    formaDePagamento:"cartão presente"
}

console.log(carrinhoPresente)