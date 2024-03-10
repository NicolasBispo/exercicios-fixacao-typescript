/*

Filtrar por Vários Valores:

Explicação: Esta função recebe um array de objetos e um objeto de filtro, onde as chaves são nomes de propriedades 
e os valores são os valores que devem corresponder. A função deve retornar um novo array contendo apenas os objetos que correspondem 
a todos os critérios de filtro fornecidos.

Dado Inicial de Referência:


const produtos = [
    { nome: 'Notebook', preço: 2500, marca: 'Dell' },
    { nome: 'Celular', preço: 1200, marca: 'Samsung' },
    { nome: 'Tablet', preço: 800, marca: 'Apple' },
    { nome: 'Monitor', preço: 600, marca: 'LG' }
];
const filtro = { preço: 800, marca: 'Apple' };

Resposta Esperada:
[
    { nome: 'Tablet', preço: 800, marca: 'Apple' }
]

*/