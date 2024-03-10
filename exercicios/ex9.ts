/*

Validação de Objeto com Tipagem:

    Explicação: Você deve criar uma função que recebe um objeto e uma interface que representa a estrutura desse objeto. A função deve validar se o objeto fornecido atende aos requisitos de tipagem especificados na interface.
    Dado Inicial de Referência e Interface:

    Resposta Esperada:
    Para pessoa1, a função deve retornar true, pois o objeto possui todas as propriedades necessárias e suas tipagens estão corretas.
    Para pessoa2, a função deve retornar false, pois a propriedade idade deve ser um número, mas está sendo fornecida como uma string.


    **SE ATENTE AO RETORNO**
*/

interface Pessoa {
    nome: string;
    idade: number;
    email?: string;
}

const pessoa1: Pessoa = { nome: 'João', idade: 25, email: 'joao@example.com' };
const pessoa2: Pessoa = { nome: 'Maria', idade: '30' }; // idade deve ser um número

function validarObjeto<T>(objeto: T, estrutura: T): boolean {
    // Implemente a lógica de validação aqui
}