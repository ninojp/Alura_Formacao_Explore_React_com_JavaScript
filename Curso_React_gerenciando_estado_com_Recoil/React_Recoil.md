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

Nesta aula, o instrutor ensinou como implementar a funcionalidade de exclusão de eventos em um componente de lista usando o Recoil. Ele mostrou como criar a função excluirEvento e usar o useSetRecoilState para atualizar o estado da lista de eventos. A função de exclusão remove o evento da lista usando o método filter. O instrutor também fez algumas alterações nos arquivos relacionados para remover props e callbacks desnecessários. A funcionalidade de exclusão foi testada e está funcionando corretamente. No próximo vídeo, o instrutor irá abordar a implementação da funcionalidade de atualização dos eventos quando o usuário interagir com um checkbox.

### Aula 02 - Atualizando o evento - Vídeo 2

Nesta aula, o instrutor discute a implementação de uma funcionalidade de atualização de eventos em um aplicativo utilizando a biblioteca Recoil. Ele mostra como fazer essa atualização substituindo o antigo método de passar o estado através de props. É criada uma função chamada "alterarStatus" que é executada quando o evento é clicado, e essa função atualiza o estado da lista de eventos. O instrutor também menciona a existência de um bug relacionado à atualização da lista de eventos quando o usuário arrasta um evento no calendário.

### Aula 02 - Corrigindo o bug - Vídeo 3

Nesta aula, o instrutor discute a correção de um bug em um calendário. Ele encontra um comportamento inesperado e utiliza um callback chamado "onEventDragFinish" para corrigi-lo. O instrutor copia um exemplo de código da documentação, faz algumas modificações e atualiza o estado do evento no componente de checkbox. Ele destaca a preocupação com a duplicação de código e a falta de reutilização, e menciona que a próxima etapa será extrair essa rotina de atualização do evento para um código reaproveitável.

### Aula 02 - Refatorando código duplicado - Vídeo 4

Nesta aula, o instrutor discute a importância de evitar o uso de "copy and paste" no código e a necessidade de criar código reaproveitável. Ele propõe a criação de um hook chamado "useAtualizarEvento.ts" que terá acesso ao estado do Recoil e retornará uma função que atualiza o evento. O instrutor demonstra como utilizar esse hook em diferentes partes do código, como no calendário e no checkbox do evento. Ele destaca a importância de encapsular o Recoil em hooks para deixar o código mais organizado e as responsabilidades bem definidas. O princípio "DRY" (Don't Repeat Yourself) é mencionado, enfatizando a importância de evitar código duplicado. Por fim, o instrutor ressalta a necessidade de expandir essa abordagem para o restante da aplicação, encapsulando em hooks os métodos de adicionar, excluir e alterar, para que não fiquem acoplados ao Recoil.

### Aula 02 - Para saber mais: SOLID e Clean Code

Durante essa aula, nós vimos um princípio chamado DRY, acrônimo para “não se repita”. Esses termos normalmente são relacionados ao backend, mas também são muito importantes na arquitetura dos projetos de frontend. Um bom embasamento de orientação a objetos, padrões de projetos e boas práticas vai te ajudar no dia a dia da profissão.

Apesar de estar focado no backend, você consegue entender os conceitos mais a fundo neste [artigo](https://www.alura.com.br/artigos/o-que-e-clean-code).

### Aula 02 - Nessa aula, você aprendeu como`:`

- Remover eventos do estado  
  Existem várias formas de operar listas, e nós removemos utilizando o método filter. Se quiser se aprofundar mais nesses tipos de algoritmos, vale a pena conhecer os seguintes métodos:
  - indexOf: para obter um determinado índice de um elemento num array.
  - slice: para obter, a partir de um índice ou intervalo, uma quantidade N de elementos.

- Atualizar um evento específico  
  Vimos que a lista que recebemos é imutável, mas podemos definir uma nova lista reposicionando o evento alterado.

- Hook customizado  
Criamos um hook reaproveitável e responsável por atualizar um evento, inclusive encapsulando o recoil.

## Aula 03 - Acoplamento e Coesão

### Aula 03 - Encapsulando a adição de eventos - Vídeo 1

Nesta aula, o instrutor discute a importância de evitar gargalos técnicos ao escalar uma aplicação. Ele propõe a criação de um hook personalizado chamado "useAdicionarEvento" para encapsular a lógica de validação de eventos com data retroativa. O hook adiciona o ID do evento antes de adicioná-lo à lista e valida que a data de início não pode ser menor que a data atual. O instrutor mostra como utilizar o hook no código do formulário, substituindo a chamada para o método "setListaDeEventos". Ele destaca a importância de ter um código reaproveitável e dividir as responsabilidades adequadamente. Isso facilita a manutenção e escalabilidade da aplicação.

### Aula 03 - Lista de eventos via hook - Vídeo 2

Nesta aula, o instrutor finaliza a implementação de um Hook personalizado chamado "useListaDeEventos" para encapsular o uso do Recoil, uma biblioteca de gerenciamento de estado para React. Esse Hook retorna a lista de eventos armazenada no átomo "listaDeEventosState". Com a substituição do uso do "useRecoilValue" pelo "useListaDeEventos" nos componentes "Calendário" e "ListaDeEventos", o código fica mais limpo e coeso, pois os componentes não precisam conhecer o Recoil diretamente. A separação de responsabilidades resulta em uma aplicação mais enxuta e melhora a manutenibilidade do código. O instrutor destaca a importância dos princípios de baixo acoplamento e alta coesão no desenvolvimento de software.

### Aula 03 - Boas práticas - Vídeo 3

Nesta aula, o instrutor discute a importância de extrair a lógica de acesso ao Recoil para hooks customizados. Isso traz benefícios como uma melhor definição das responsabilidades dos componentes e uma maior coesão. Agora, a responsabilidade do formulário é transformar os inputs do usuário em um objeto de evento e chamar o hook correspondente. Já o hook useAdicionarEventos é responsável por receber e validar o evento, adicionando-o ao estado se estiver válido. O instrutor destaca a importância da alta coesão, onde os componentes têm responsabilidades bem definidas. Em relação ao acoplamento, o Recoil está encapsulado, o que significa que se houver a necessidade de trocar a ferramenta utilizada, como o Jotai, Redux ou Context API, será preciso mexer apenas nos hooks e não nos componentes. O objetivo é diminuir o acoplamento entre os componentes e as ferramentas utilizadas. Por fim, o instrutor menciona que ainda falta implementar o filtro na aplicação e que isso será abordado na próxima aula.

### Aula 03 - Nessa aula, você aprendeu como`:`

Diminuir o acoplamento da aplicação

Ao extrair a comunicação com o recoil em hooks, estamos desacoplados da lib em si. Se trocarmos por qualquer outra solução, estaremos prontos. Só precisamos alterar os hooks, e não os componentes.
Aumentar a coesão

Ao remover a responsabilidade de alterar o estado para os hooks, nossos componentes ficam mais coesos e não precisam se preocupar com as implementações relacionadas a manipular o estado.

## Aula 04 - Filtrando Eventos

### Aula 04 - Um átomo para a todos filtrar - Vídeo 1

Nesta aula, o instrutor explica como implementar um filtro em uma aplicação utilizando o Recoil. Ele começa mostrando o componente de formulário pronto para submeter o filtro. Em seguida, cria uma interface chamada "IFiltroDeEventos" que representa o filtro de eventos, com uma propriedade opcional chamada "data" do tipo "Date".

Utilizando o Recoil, o instrutor cria um átomo chamado "filtroDeEventos" do tipo "IFiltroDeEventos" com valor padrão vazio. No componente de formulário, utiliza o hook "useSetRecoilState" para obter a função "setFiltroDeEvento" que permite alterar o valor do átomo.

Ele substitui a chamada do método "aoFiltroAplicado" pelo "setFiltroDeEvento" e cria a constante "filtro" que é um objeto do tipo "IFiltroDeEventos". Verifica se o campo de data foi preenchido e, se sim, atribui o valor ao filtro, caso contrário, atribui nulo. Por fim, chama a função "setFiltroDeEvento" passando o filtro como argumento para atualizar o estado do átomo.

O instrutor também faz correções nos componentes relacionados ao filtro e menciona a necessidade de implementar a lógica de filtragem na lista de eventos.

### Aula 04 - Aplicando o filtro - Vídeo 2

Nesta aula, o instrutor discute a implementação de um filtro para eventos em uma lista. Ele explica como obter o valor do filtro usando o hook "useRecoilValue" e utiliza o método "filter" para filtrar os eventos com base na data. O instrutor testa o filtro aplicando diferentes valores de data e verifica se a lista de eventos reage corretamente. No entanto, ele menciona que o filtro não está sendo aplicado ao calendário e sugere copiar o código para o arquivo do calendário, mas ressalta que essa não é a melhor abordagem. Ele menciona que na próxima aula será abordada a melhor forma de aplicar o filtro sem replicar código.

### Aula 04 - Filtrando com seletores - Vídeo 3

Nesta aula, o instrutor aborda a criação de um estado derivado no Recoil, uma biblioteca de gerenciamento de estado para React. Ele mostra como criar um seletor utilizando a função "selector" do Recoil, que permite acessar os valores do Recoil, como a lista de eventos e o filtro. O instrutor também destaca a importância de manter a coesão e o baixo acoplamento ao utilizar um hook que retorna os eventos filtrados em vez de retornar a lista completa. Ele demonstra como modificar o hook existente para retornar apenas os eventos filtrados e como utilizar esse novo hook na aplicação. Por fim, o instrutor menciona que ensinará como inicializar a lista de eventos com valores padrões obtidos do servidor no próximo trecho do vídeo.

### Aula 04 - Nessa aula, você aprendeu como`:`

Derivar estados com seletores

Mantendo assim a responsabilidade bem definida para cada parte do sistema.
Adicionar funcionalidades de forma incremental

Primeiro, colocamos o filtro para funcionar. Na sequência, melhoramos a implementação e extraímos a lógica.
