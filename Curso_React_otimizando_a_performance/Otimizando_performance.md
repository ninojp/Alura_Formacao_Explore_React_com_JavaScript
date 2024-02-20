# Curso Alura React: otimizando a performance

## Aula 01 - Entendendo a Estrutura

### Aula 01 - Apresentação - Vídeo 1

Nesta aula do curso "React: otimizando a performance", serão abordados diversos tópicos para melhorar a performance de aplicações desenvolvidas com React. Serão ensinadas técnicas como renderização no React, estrutura da árvore de componentes, virtual DOM, reconciliação e imutabilidade. Também será apresentado o uso do Memo e do Use Memo para otimizar a renderização de componentes. Além disso, será mostrado como utilizar o React Developer Tools para visualizar as renderizações em tempo real e analisar a linha do tempo das renderizações. Durante a etapa de build, serão discutidas técnicas como renderizações dinâmicas, renderizações preguiçosas, lazy loading e dynamic imports. Este curso é indicado para desenvolvedores que desejam aprimorar suas habilidades em React e se destacar no desenvolvimento de aplicações com alto desempenho.

### Aula 01 - O que é JSX - Vídeo 2

Nesta aula, o instrutor explora o funcionamento do React, utilizando como exemplo um componente chamado "cardápio". Ele explica o conceito de JSX, que permite escrever elementos HTML junto com JavaScript. Mostra como o JSX é compilado pelo Babel para a função React.createElement, que representa objetos React. Também demonstra como visualizar esses objetos no console do navegador e como o React faz comparações entre objetos para atualizar os componentes apenas quando necessário. A importância de entender como o React trata esses objetos para melhorar a performance da aplicação é ressaltada. O próximo vídeo abordará o pacote React DOM e como otimizar a renderização dos componentes.

### Aula 01 - Para saber mais: importação do React

Uma coisa que talvez você possa ter percebido e ter se perguntado o porquê é: quando importamos o React depois da versão 17, ele aparece isto daqui:

> React is defined but never used

A partir da versão 17 do React, ele mudou a forma de trabalhar por debaixo dos panos. Antes, sem utilizarmos o React em nada no nosso arquivo, nós precisávamos importar o React, pois o JSX estava sendo convertido para React.createElement, mas agora ele está fazendo de forma diferente!

Esta mudança traz duas melhorias:

- Não precisamos importar mais o React apenas para utilizar JSX!
- Existe algumas [melhorias de performance](https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md#motivation) que o React.createElement não aceitava.

### Aula 01 - Entendendo a estrutura React - Vídeo 3

Nesta aula, o instrutor discute a hierarquia de componentes e a estrutura de componentes do React. Ele explica que um componente no React é transformado em um objeto JSX e menciona que o componente "router" é um componente pai que possui vários filhos, incluindo o componente "routes". O instrutor destaca que o componente "routes" é dinâmico e pode alternar entre diferentes componentes. Ele também menciona o arquivo "index.tsx" e explica que o ReactDOM é responsável por interpretar os componentes do React e injetá-los em um elemento específico. O instrutor destaca a abordagem performática do React para lidar com as mudanças nos componentes.

### Aula 01 - Explicando Virtual DOM - Vídeo 4

Nesta aula, o instrutor explicou como o React é performático ao atualizar apenas as partes necessárias da aplicação. Ele destacou que o React trabalha com props e states, atualizando e renderizando somente quando há mudanças nessas variáveis. O instrutor também introduziu o conceito de Virtual DOM, que é uma cópia em memória da estrutura da aplicação. O React compara o Virtual DOM com o DOM atual para identificar as mudanças necessárias, atualizando apenas o que precisa ser alterado. Compreender o Virtual DOM é importante para otimizar a renderização dos elementos. Nos próximos vídeos, o instrutor promete abordar questões mais a fundo sobre a checagem de propriedades e states.

### Aula 01 - O que aprendemos nessa aula, você aprendeu`:`

- Como funciona o JSX;
- O que é React.createElement;
- Como o React transforma os códigos JSX em objetos;
- O que é Virtual DOM;
- Como funciona uma estrutura React.
