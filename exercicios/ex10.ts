/*

Mapeamento de Tipos com Valores Opcionais:

Explicação: Você deve criar uma função que recebe um objeto e retorna um novo objeto com as mesmas chaves, 
mas todas as propriedades se tornam opcionais.

Dado Inicial de Referência:


const dados = {
    nome: 'João',
    idade: 25,
    cidade: 'São Paulo'
};

function tornarPropriedadesOpcionais<T>(objeto: T): Partial<T> {
    // Implemente a lógica de mapeamento aqui
}

    Resposta Esperada:
    Para o objeto dados, a função deve retornar:


{
    nome?: 'João',
    idade?: 25,
    cidade?: 'São Paulo'
}

*/