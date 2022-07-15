# Anotações sobre a aula de testes do Vendovelli

# Módulo 1: Simple Lib

### Aula 3

Na aula 3 temos uma criação de testes usando conversão de um número em uma string com `+num1`, mas podemos usar `parseInt(num1, 10)`. Qual a diferença entre eles?

> Ao ver o Stack Overflow, encontramos isso [aqui](https://stackoverflow.com/questions/6682997/what-is-the-purpose-of-a-plus-symbol-before-a-variable). O símbolo plus e minus são usados como versões unárias para trazer um valor como um número positivo ou negativo. Caso o valor não sejqa numérico, será interpretado como concatenação de strings.

> Mas temos uma pergunta ainda maior, [qual o melhor, parseInt ou unary operator?](https://stackoverflow.com/questions/17106681/parseint-vs-unary-plus-when-to-use-which). Depende do contexto e de quais situações você precisa, é melhor ler com cuidado a resposta e você mesmo decidir qual que cabe melhor em seu respectivo contexto.

Adicione a tag `--watchAll` em `yarn test` para rodar os testes e ver conforme os saves.

### Aula 4

Qual a diferençe entre `.toEquals` e `.toBe`?

> ao acompanhar a discussão em [What is the difference between 'toBe' and 'toEqual' in Jest?](https://stackoverflow.com/questions/45195025/what-is-the-difference-between-tobe-and-toequal-in-jest)
> Deparamos que `toBe` serve para fazer um teste de strictEquality, assim como `===`. enquanto o toEqual serve para ver deep quality e usa o método `Object.is`. Porém, é algo para ver com maiores detalhes depois. Para complementar, no jest tem [toStrictEqual](https://jestjs.io/docs/expect#tostrictequalvalue).
