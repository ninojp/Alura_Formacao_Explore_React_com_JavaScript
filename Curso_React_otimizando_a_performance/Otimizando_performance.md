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

## Aula 02 - Memoização

### Aula 02 - Reconciliação - Vídeo 1

Nesta aula, o instrutor explica sobre o conceito de Virtual DOM no React. Ele menciona que o Virtual DOM é responsável por fazer a verificação do estado atual do React e realizar a reconciliação com o estado anterior. A reconciliação é o processo de comparar o Virtual DOM com o estado atual e fazer as atualizações necessárias no DOM real do navegador. O instrutor também mostra um exemplo prático no código, utilizando um console.log condicional para mostrar o título de um item do cardápio apenas quando o ID for igual a 1.

### Aula 02 - Para saber mais: imutabilidade

Vamos começar pelo processo de estruturação e renderização do React:

Estruturação

Podemos definir a estrutura de componentes do React literalmente como uma árvore, assim como o DOM faz.

No final das contas, a estrutura(html, DOM) é bem parecida! Só que, no React, temos este meio de campo da div com id root (que, utilizando create-react-app, você não precisa se preocupar, mas ela está dentro do arquivo html dentro de public/index.html) e do ReactDOM.render! Após isto, na prática, o código é bem parecido!

O React foi criado de uma forma que seja ao mesmo tempo fácil de desenvolver e performática para o navegador (por isto ele é tão utilizado). A facilidade de desenvolver tem a ver com a gente não se preocupar em ter que selecionar um elemento para mudar algo dentro dele (aquele famoso document.querySelector(...), e para isto, a cada renderização, ele faz uma comparação entre um DOM Virtual (em memória) e o DOM real, mudando exatamente o que deve ser mudado. Mas, não se engane! Se o React tem controle de tudo que o elemento tem o tempo todo, na verdade, a gente dá alguns “pontos” que o React pode mudar, e estes pontos são os states!

A gente basicamente fala: “Olha React, este ponto aqui poderá ser mudado em algum momento, então, fica de olho e, sempre que atualizar o ponto, atualiza a tela para mim”, e estes pontos são estados, e eles são imutáveis!

Aí que nos enganamos! Imutabilidade não significa que o estado não muda, significa que o estado sempre é trocado por um estado novo.

>let [estado, setEstado] = useState(‘Olá aluno!’);
>…
>estado = ‘Hello World!’;
Mesmo utilizando o estado, estamos mudando o estado diretamente, de forma mutável, logo, o React não renderizará a tela, mas e se fizermos assim?
>const [estado, setEstado] = useState(‘Olá aluno!’);
>…
>setEstado(‘Hello World!’);
Neste caso, estamos mudando o estado estado com a função setEstado, e ela “destrói” completamente o estado anterior e cria um estado totalmente novo. Isto é imutabilidade! E é aí que o React é avisado que este ponto precisa mudar e ele entra fazendo a comparação do Virtual DOM com o DOM Real, e esta comparação é feita em TODA A ESTRUTURA REACT A PARTIR DO ESTADO MUDADO.

E por que é feita uma comparação em toda a estrutura ao invés de ser só no componente?

Porque a gente, já conhecendo que esta estrutura é de cima para baixo, sabemos que um estado mudado no componente pai pode causar uma reação em componente filho, certo? Como por exemplo, sempre que o estado mudar, o filho pode fazer uma animação, diminuir, desaparecer etc.

### Aula 02 - React.memo - Vídeo 2

Nesta aula, o instrutor aborda o problema da renderização desnecessária de componentes no React e como utilizar o Memo para evitar esse problema. Ele explica que o React não faz uma comparação profunda das propriedades dos componentes para determinar se eles precisam ser renderizados novamente. Para resolver esse problema, ele introduz o conceito de Memo, que é uma função fornecida pelo React. O Memo é recomendado principalmente quando se lida com listas ou quando se trabalha com renderização condicional. O instrutor mostra como utilizar o Memo, exportando o componente com a função Memo ao invés de exportá-lo diretamente. Ele ressalta que o Memo deve ser utilizado com sabedoria, pois pode impactar a performance da aplicação. Em resumo, a renderização condicional e o uso do Memo são técnicas importantes para otimizar a performance de aplicações React, evitando renderizações desnecessárias de componentes.

### Aula 02 - Detalhes do memo - Vídeo 3

Nesta aula, o instrutor explicou sobre o uso do React Memo. Ele mostrou que o Memo aceita uma função que retorna o JSX e uma função que recebe as props anteriores e as próximas props. O Memo compara as props anteriores com as próximas props para determinar se o componente precisa ser renderizado novamente. O Memo utiliza a reconciliação do Virtual DOM para realizar essa comparação. O instrutor também falou sobre como controlar a performance do Memo, definindo quando o componente deve ser atualizado ou não. No próximo vídeo, ele irá explicar mais detalhes sobre o uso do atributo "key" e como isso afeta o desempenho do Memo.

### Aula 02 - O que aprendemos nessa aula`:`

- O que é Reconciliation;
- O que é Imutabilidade e o que isto tem a ver com React;
- O que é memoização e como utilizar o React.memo;
- Como controlar com memo quando um componente deve atualizar ou não.

## Aula 03 - Memo em listas

### Aula 03 - Explicando a prop key - Vídeo 1

Nesta aula, o instrutor aborda o conceito de "key" no React e explica sua importância na renderização de listas. Ele mostra um problema que ocorreu ao mudar a propriedade "key" de um componente React e explica como o React precisa fazer comparações entre o Virtual DOM e o DOM real para renderizar corretamente os componentes. O uso da propriedade "key" estabelece essa ligação entre o Virtual DOM e o DOM real. O instrutor também mostra na prática como utilizar o "key" em um exemplo de renderização de itens de um cardápio. Ele destaca a importância de utilizar uma chave única que represente a identidade do componente, especialmente em casos de listas que podem ser filtradas. O vídeo conclui destacando a importância de entender o ciclo de vida dos componentes e a necessidade de utilizar corretamente o "key" para evitar problemas de renderização desnecessária.

### Aula 03 - Para saber mais: ref e key

A prop ref, assim como a prop key, é uma prop que não é reconhecida como prop no componente filho, e ela pode ser usada em qualquer elemento. Ao contrário do key, ela não é uma prop obrigatória, e sim uma prop opcional que pode ser utilizada a qualquer momento.

A palavra ref é uma abreviação de reference, ou referência em português, e ela serve exatamente para isso: fazer uma referência ao elemento real. Isso mesmo! Com o ref, você consegue acessar todos os atributos do DOM real dentro do React, como se estivesse utilizando o document.querySelector ou seletores parecidos!

Ref é uma arma poderosíssima para acessar o elemento diretamente, mas ela não é recomendada! O objetivo do React é abstrair o DOM e fazer tudo de forma declarativa, e o ref faz o exato oposto, agindo de forma imperativa.

Por que ele existe e por que eu usaria? Aí que está! Existem momentos em que ele é necessário, como por exemplo:

- Quando precisamos dar foco a um elemento input;
- Quando precisamos executar algo imperativo como forçar uma animação etc;
- Quando precisamos reproduzir uma mídia ou um vídeo ou algo relacionado a isto (como o Picture-in-picture por exemplo);
- Quando precisamos integrar o React com alguma biblioteca de terceiros e esta biblioteca exige imperatividade.

### Aula 03 - React Developer Tools - Vídeo 2

Nesta aula, o instrutor aborda a otimização de renderização desnecessária de componentes no React utilizando a função memo e o React Developer Tools. Ele explica como identificar os componentes que estão sendo renderizados desnecessariamente e como utilizar a função memo para evitar essa renderização desnecessária, melhorando assim a performance da aplicação. Os componentes "Filtros" e "Ordenador" são exemplos de componentes que são memorizados com o memo para evitar renderizações desnecessárias. No entanto, ainda existem outros componentes que serão abordados nos próximos vídeos.

### Aula 03 - O que aprendemos nessa aula`:`

- O que é e para que serve a prop key;
- O que é a extensão React Developer Tools;
- Como utilizar a aba components da extensão;
- Como utilizar a aba profiler da extensão;
- Como avaliar se um componente está renderizando ou não utilizando a extensão.

