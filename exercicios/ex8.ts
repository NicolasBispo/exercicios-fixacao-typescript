/*

Filtrar Dados por Data:

Explicação: Esta função recebe um array de objetos com uma propriedade de data e um intervalo de datas (data inicial e data final) 
e retorna um novo array contendo apenas os objetos cujas datas estão dentro desse intervalo.
Dado Inicial de Referência:


const eventos = [
    { nome: 'Evento 1', data: new Date('2024-03-01') },
    { nome: 'Evento 2', data: new Date('2024-03-15') },
    { nome: 'Evento 3', data: new Date('2024-04-05') },
    { nome: 'Evento 4', data: new Date('2024-05-20') }
];
const dataInicial = new Date('2024-03-01');
const dataFinal = new Date('2024-04-30');

Resposta Esperada:


[
    { nome: 'Evento 1', data: new Date('2024-03-01') },
    { nome: 'Evento 2', data: new Date('2024-03-15') },
    { nome: 'Evento 3', data: new Date('2024-04-05') }
]

*/