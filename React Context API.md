# Curso Alura React: gerencie estados globalmente com Context API

## Aula 01 - Entendendo a Context API

### Aula 01 - Apresentação - Video

Nesta aula de introdução ao curso de React, ministrado por Neilton Seguins, também conhecido como Nei, é apresentado o objetivo do curso, que é aprender a gerenciar estados globais de uma aplicação utilizando a Context API. Nei explica que o problema a ser resolvido é o "prop drilling", que ocorre quando os estados e funções são passados via props para outros componentes, gerando uma estrutura complexa e pouco eficiente. Serão utilizados hooks customizados e o hook useReducer para lidar com estados de forma mais personalizada. É necessário ter uma noção básica de React e conhecimento em JavaScript. Nei convida os espectadores a participarem da comunidade no Discord para interação com instrutores, monitores e outros estudantes.

### Aula 01 - Conhecendo a aplicação - Video 1

Nesta aula, o instrutor apresentou a aplicação Meteora, um e-commerce de moda casual. Ele mostrou a interface da aplicação, com a barra de navegação e os links para as diferentes páginas. No entanto, algumas páginas ainda não foram construídas e exibem um erro 404. O instrutor também destacou a funcionalidade de pesquisa e o ícone do carrinho de compras, que abre um modal com os produtos adicionados. Em seguida, ele explorou a estrutura do projeto no Visual Studio Code, mencionando as pastas e arquivos importantes. O arquivo "App.jsx" foi detalhado, mostrando os estados relacionados ao carrinho de compras e as funções para manipulá-los. O instrutor também abordou o problema do "prop drilling" e a necessidade de corrigi-lo. Na próxima aula, ele irá falar mais sobre o "prop drilling" e apresentar uma alternativa para lidar com esse problema.

### Aula 01 - Entendendo o prop drilling - Video 2

Nesta aula, foi discutido o problema do "prop drilling", que ocorre quando precisamos compartilhar estados entre componentes distantes. A solução para esse problema é a elevação de estado, onde definimos os estados no componente de nível mais alto e passamos para os componentes filhos via props. Foi apresentado um esquema exemplificando o prop drilling e comparado com a situação de pintar uma casa. A solução para esse problema é utilizar o Context API, que permite colocar as props em um lugar comum e torná-las acessíveis a todos os componentes. O próximo vídeo abordará mais sobre o Context API.

### Aula 01 - Funcionamento da Context API - Video 3

Nesta aula, o professor discute sobre o Context API, um recurso do React que permite compartilhar estados da aplicação entre componentes de forma mais eficiente. O Context API funciona como uma fonte de dados centralizada, onde os estados são definidos e podem ser acessados por todos os componentes. Para utilizar o Context API, é necessário definir um contexto e utilizar o componente Provider para compartilhar o contexto com os componentes filhos. O uso do Context API evita a necessidade de passar as propriedades manualmente para cada componente, tornando o código mais limpo e organizado.

### Aula 01 - Para saber mais: se aprofundando na Context API

Vamos pensar em um aplicativo de lista de tarefas, onde você tem diferentes seções para tarefas urgentes e não urgentes. Tem uma seção geral onde você consegue visualizar todas as tarefas mas tem também seções individuais onde você consegue ver as tarefas urgentes e não urgentes de forma separada. Porém, você deseja compartilhar a capacidade de marcar uma tarefa como concluída em ambas as seções.

Como garantir que, ao marcar uma tarefa como concluída em sua própria seção, ela também seja marcada como concluída na seção geral sem passar manualmente a informação entre os componentes?

Aqui entra a Context API do React. É como ter uma marcação global em suas tarefas, onde, ao marcar como concluída em um lugar, automaticamente afeta todos os outros lugares que exibem a mesma tarefa.

A Context API é uma maneira de compartilhar dados globalmente entre componentes sem a necessidade de passar propriedades manualmente. Ela ajuda a evitar a "prop drilling", tornando o compartilhamento de informações mais direto.

Quando Usar a Context API:  
Houver a necessidade de compartilhar informações ou estado entre componentes que estão distantes na árvore de componentes.
Evitar a "prop drilling" (passar propriedades através de vários níveis de componentes) se tornar impraticável ou confuso.

Dicas para Melhor Uso:  
Use a Context API para compartilhar dados que são verdadeiramente globais na aplicação.
Avalie a necessidade de re-renderização de componentes dependentes do contexto ao realizar atualizações.

Dê uma lida na [documentação](https://react.dev/learn/passing-data-deeply-with-context) para reforçar seus aprendizados.

Se você quiser dar um mergulho mais profundo nesses conceitos, recomendo que você acesse a [documentação do Context API](https://react.dev/learn/passing-data-deeply-with-context#before-you-use-context) clicando neste link e divirta-se!

### Aula 01 - Nessa aula, você aprendeu como`:`

Ocorre o problema de prop drilling em suas aplicações React.
O prop drilling pode ser prejudicial para seu código o tornando menos eficiente e difícil de manter.
Funciona a Context API do React.
A Context API ajuda a evitar o problema de prop drilling em suas aplicações.
Criar um contexto usando a Context API e como compartilhar ele por meio do Provider.

## Aula 02 - Entendendo a Context API

### Aula 02 - Apresentação - Video

