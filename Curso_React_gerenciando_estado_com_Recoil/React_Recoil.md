# Curso Alura React: gerenciando estado com Recoil

## Aula 01 - Evoluindo o legado

### Aula 01 - Apresentação - Vídeo 1

Nesta aula do curso "React: gerenciando estado com Recoil", o instrutor Vinicios Neves apresenta o contexto do treinamento. Ele introduz a aplicação Alura Event Tracker, que é um calendário responsável por adicionar, remover e exibir eventos. O código original da aplicação é analisado, identificando problemas como o "prop drilling", que gera uma cadeia de propagação de propriedades entre os componentes. Para resolver esse problema, é apresentado o Recoil, uma biblioteca de gerenciamento de estado para React. O objetivo do treinamento é explorar os conceitos e funcionalidades do Recoil, aplicando-os na Alura Event Tracker para obter uma aplicação bem estruturada e com um gerenciamento de estado eficiente.

### Aula 01 - Entendendo o projeto - Vídeo 2

Nesta aula, o instrutor introduziu o tema do gerenciamento de estado com Recoil em aplicações React. Ele mostrou o projeto Alura Event Tracker que será trabalhado durante o curso e explicou a necessidade de refatoração para evitar problemas de escalabilidade. O instrutor analisou o código existente, identificando o uso do useState e o "prop drilling" como problemas. Ele propôs utilizar o Recoil para tornar o projeto mais organizado e escalável. O próximo vídeo irá abordar a implementação do Recoil no projeto.

### Aula 01 - Um mundo feito de átomos - Vídeo 3

Nesta aula, o instrutor introduziu o [Recoil](https://recoiljs.org/), uma biblioteca de gerenciamento de estado para o React. Ele mostrou como configurar o Recoil em um projeto, importando o componente RecoilRoot e envolvendo toda a aplicação nele. Em seguida, ele demonstrou como migrar o estado existente da aplicação para o Recoil, criando um átomo chamado "listaDeEventosState" para representar a lista de eventos. O instrutor também mostrou como utilizar o átomo dentro dos componentes, substituindo o useState pelo hook useRecoilValue. Ele ressaltou que o Recoil possui uma funcionalidade interna que faz com que os componentes sejam renderizados novamente sempre que o valor do átomo muda. No final, o instrutor mencionou que ainda há muito a ser feito, como adicionar, alterar e remover eventos usando o Recoil. O Recoil é uma biblioteca simples e minimalista que simplifica o acesso e a reação a um estado compartilhado, tornando o código mais organizado e fácil de manter.

### Aula 01 - Criando eventos com hooks - Vídeo 4

Nesta aula do curso "React: gerenciando estado com Recoil", o instrutor aborda a necessidade de tornar a lista de eventos dinâmica em um aplicativo de calendário. Ele cria um arquivo chamado "util.ts" para fornecer um ID incremental para cada evento e importa essa função no arquivo "Index.tsx" para obter o ID do evento. O instrutor utiliza o Recoil para definir o estado da lista de eventos, utilizando o hook "useSetRecoilState" para adicionar o novo evento à lista existente. Essa abordagem evita a necessidade de renderizar o componente a cada vez que o estado muda. O instrutor menciona que ainda há mais funcionalidades a serem implementadas nas próximas aulas, como a capacidade de alterar um evento e aplicar filtros.

### Aula 01 - Para saber mais: Cuidados com React hooks

Hooks são ótimos, pois nos ajudam a reaproveitar código e a simplificar componentes. Durante o curso, vamos conhecer alguns hooks do Recoil e até mesmo criar alguns customizados. Então, lembre-se sempre das regras dos hooks:

Apenas chame Hooks no nível mais alto. Não chame Hooks dentro de loops (for, foreach, while), condições (if, else if) ou funções aninhadas (por exemplo, numa função que é executada dado um evento de onClick).

Apenas chame Hooks a partir de componentes funcionais. Não chame Hooks a partir de funções comuns, fora de componentes React.

A [documentação](https://pt-br.legacy.reactjs.org/docs/hooks-rules.html) é sempre uma excelente fonte de conhecimento, aproveite ao máximo.

### Aula 01 - Nessa aula, você aprendeu como`:`

Analisar e entender código que outras pessoas desenvolveram

O dia a dia de pessoas desenvolvedoras requer muita leitura de código, e não somente escrever coisas novas.
Criar atoms

Átomos são as porções que compõem o estado compartilhado do recoil.
Acessar atoms

Nós utilizamos o hook useRecoilValue para ter acesso à lista de eventos.
Modificar atoms

Nós utilizamos o hook useSetRecoilState para adicionar novos itens à lista de eventos.

## Aula 02 - Manipulando os eventos

### Aula 02 - Deletando eventos - Vídeo 1
