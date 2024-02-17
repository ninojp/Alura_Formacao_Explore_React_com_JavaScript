# Curso Alura React: testando os seus componentes

## Aula 01 - Bem começado, Metade feito

### Aula 01 - Apresentação - Vídeo 1

Nesta aula do curso "React: testando os seus componentes", os participantes aprenderão a desenvolver testes para aplicações React. O curso aborda conceitos como componentes, gestão de estado e roteamento, e é adequado tanto para iniciantes quanto para aqueles que já estão familiarizados com o React. Durante o curso, os participantes terão a oportunidade de aprender várias opções e alternativas de testes que podem ser utilizados no desenvolvimento de uma aplicação. O foco principal do curso é nos testes, e o desenvolvimento do layout da aplicação será proposto como desafios para os participantes. Ao final de cada aula, será proposto um desafio relacionado ao layout do projeto. Durante as aulas, os participantes irão desenvolver testes e comportamentos dos componentes, utilizando o comando npm test. O projeto final terá testes estilizados e, embora não seja mostrado rodando durante o curso, serão apresentados testes passando. O curso abrange seis casos de testes e treze testes já desenvolvidos e funcionando corretamente. Serão abordados testes de comportamento, testes de função pura, testes de Snapshot e interação com elementos. O projeto a ser desenvolvido durante o curso é um sorteado de amigo secreto.

### Aula 01 - Olá mundo dos testes! - Vídeo 2

Nesta aula, o instrutor inicia um projeto de sorteio de amigo secreto utilizando React e TypeScript. Ele mostra o processo de instalação das dependências do projeto e apresenta o design do projeto no Figma, mostrando as duas páginas que serão desenvolvidas: uma para cadastrar os participantes e outra para realizar o sorteio. O instrutor explica que este é um curso focado em testes, portanto, ao invés de iniciar a aplicação, ele executa os testes utilizando o comando "npm test". Ele mostra o teste padrão que é gerado automaticamente ao criar um projeto React e explica o que o teste está fazendo. O instrutor também menciona que a parte de estilização não será abordada nos vídeos, mas haverá desafios para que os alunos possam estilizar a aplicação por conta própria. No final do curso, será possível ver o projeto funcionando corretamente.

### Aula 01 - Buscando elementos na tela - Vídeo 3

Nesta aula, o instrutor ensina como escrever o primeiro teste para um formulário de edição em uma aplicação React. Ele explica a importância das bibliotecas React Testing Library, testing-library e Jest para realizar asserções e fazer os testes. O objetivo do teste é verificar se, quando o input do formulário está vazio, novos participantes não podem ser adicionados. O instrutor mostra como encontrar o input e o botão no DOM, garantir que o input esteja no documento e que o botão esteja desabilitado. No final, ele menciona que o teste falhou porque o componente "formulario" ainda não foi implementado, mas isso será abordado no próximo vídeo.

### Aula 01 - Fazendo o teste passar - Vídeo 4

Esse fluxo, essa técnica chama-se **desenvolvimento orientado a testes** ou do inglês ***test driven development, TDD***. Essa é a técnica, é uma forma de escrever código orientado ao teste, primeiro fazemos o teste, o teste falha, fazemos o teste passar, ele fica verde, podemos aplicar alguma refatoração, desde que ele continue verde.

Nesta aula, o instrutor discute a importância dos testes como forma de documentação do código. Ele implementa um formulário em um novo arquivo chamado "Formulario.tsx", com um input e um botão desabilitado. O instrutor destaca a abordagem de desenvolvimento conhecida como Test Driven Development (TDD), onde o código é escrito orientado ao teste. No próximo vídeo, serão abordados conceitos relacionados aos tipos de testes.

### Aula 01 - TDD e a pirâmide de testes - Vídeo 5

Nesta aula do curso "React: testando os seus componentes", o instrutor aborda os conceitos de testes baseados na pirâmide de testes. Ele explica que na base da pirâmide estão os testes de unidade, mais rápidos e baratos de serem feitos. No meio da pirâmide estão os testes de serviços ou de integração, onde são testados os componentes em conjunto. No topo da pirâmide estão os testes de interface, mais lentos e caros. O instrutor enfatiza o desenvolvimento guiado por testes, onde primeiro é escrito o teste, que falha, em seguida é feita a refatoração. Ele destaca a importância da acessibilidade e de escrever código HTML mais acessível. O objetivo é ter uma aplicação completa, com todos os testes passando e acessível.

### Aula 01 - Para saber mais: um padrão para organizar os testes

Vimos durante a aula que, para adicionar um novo teste, basta criar uma função com essa estrutura:

```JavaScript
test('um nome que descreve o que vamos testar', () => {
    // arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)
    // agimos (realizamos clicks, definimos valores)
    // afirmamos o que queremos (onde realizamos as expectativas)
})
```

Esse padrão de organização do teste é conhecido como AAA (Arrange, Act and Assert em inglês).

Aqui no nosso sorteador, nós utilizamos a função test em todos os nossos testes, mas ela não é a única.

### Aula 01 - O que aprendemos nessa aula`:`

- Rodamos o script que executa os testes implementados;
- Encontramos elementos na tela usando a @testing-library/react;
- Analisamos a saída o script de testes;
- Diferenciamos os tipos testes existentes;
- Desenvolvemos um componente utilizando TDD.

## Aula 02 - Testando Comportamentos

### Aula 02 - Gerenciamento de estado e rotas - Vídeo 1

>npm i recoil react-router-dom
>RECOIL: Modulo para gerenciamente do estado (de forma global) da nossa API.
>REACT-ROUTER-DOM: Modulo para o gerenciamento de rotas da nossa API

Nesta aula, o instrutor discute sobre a organização da aplicação e a preparação para a codificação. Ele limpa o arquivo "App.js" e exclui arquivos desnecessários. Em seguida, menciona a necessidade de controlar o estado da aplicação e instrui a instalação das bibliotecas "recoil" e "react-router-dom". Após a instalação, o instrutor modifica o componente "App.tsx" para utilizar o roteamento e define as rotas utilizando o componente "Routes". Ele também adiciona um evento de submit ao formulário e destaca a importância de escrever testes para essa funcionalidade.

### Aula 02 - Evoluindo o formulário - Vídeo 2

Nesta aula, o instrutor ensina como implementar um estado global utilizando a biblioteca Recoil. Ele cria um átomo chamado "listaParticipantesState" que representa uma lista de participantes. Em seguida, ele cria um hook customizado chamado "useAdicionarParticipante" que utiliza o setter "setLista" para adicionar um novo participante à lista. O objetivo é encapsular a lógica de adicionar um participante ao estado global, permitindo que qualquer componente utilize esse hook. No próximo vídeo, o instrutor mostrará como utilizar esse hook para adicionar um novo nome à lista quando o usuário submeter um formulário.

### Aula 02 - Testando o comportamento - Vídeo 3

Nesta aula, o instrutor aborda a implementação de testes para a funcionalidade de adicionar um participante em um formulário. Ele explica passo a passo como implementar o teste, utilizando o React Testing Library. O instrutor mostra como inserir valores no input, clicar no botão e verificar as expectativas. O teste implementado verifica se o input está com o foco ativo e sem valor após a submissão do formulário. O instrutor menciona que irá implementar a rotina de adicionar um participante à lista de sorteio no próximo vídeo.

### Aula 02 - useRef e o foco no input - Vídeo 4

Nesta aula, o instrutor aborda a implementação de uma rotina para adicionar participantes em um formulário utilizando React. Ele explica como linkar um input com o estado local usando o hook useState e como desabilitar o botão de adicionar caso o campo de nome esteja vazio. O instrutor também utiliza o hook useRef para lidar com o evento de submit do formulário, criando uma referência para o input. Ele mostra como limpar o valor do input após o submit e como setar o foco novamente no input. Além disso, o instrutor menciona a necessidade de conectar o estado de adicionar participante com o estado do formulário, utilizando a função useAdicionarParticipante. Ele destaca a importância de utilizar o Recoil Root para utilizar o Recoil e mostra como renderizar o formulário dentro do Recoil Root para que o teste funcione corretamente. Por fim, o instrutor menciona a necessidade de tratar a duplicidade de nomes na lista de participantes, exibindo uma mensagem de erro quando alguém tentar adicionar um nome que já existe.

### Aula 02 - Tratando duplicidade - Vídeo 5

Nesta aula, o instrutor discute sobre a validação da duplicidade de nomes em um formulário. Ele mostra como testar se nomes duplicados não podem ser adicionados à lista. O instrutor utiliza o evento "change" para preencher o campo do formulário com o nome "Ana Catarina" duas vezes e clica no botão correspondente. Ele espera que uma mensagem de erro seja exibida nesse cenário e utiliza o método getByRole para obter o elemento de alerta e verificar o texto da mensagem de erro. O instrutor utiliza o Recoil para armazenar a mensagem de erro em um estado chamado erroState. Ele cria um hook chamado "useMensagemDeErro.ts" para acessar o estado de erro e utiliza esse hook no componente do formulário para exibir a mensagem de erro em um parágrafo. O instrutor também adiciona a propriedade role="alert" ao elemento de parágrafo que exibe a mensagem de erro para corrigir um erro nos testes.

### Aula 02 - Testes assíncronos - Vídeo 6

Nesta aula, o instrutor aborda a implementação de testes para verificar se uma mensagem de erro desaparece após um determinado período de tempo. Ele explica a importância de cada teste falhar por um único motivo e utiliza o Jest para simular a passagem do tempo. O instrutor também introduz o conceito de queryByRole para buscar elementos e utiliza o act para envolver código assíncrono. Além disso, ele demonstra como agrupar os testes de forma semântica utilizando o método describe.

### Aula 02 - Para saber mais: Roles - Porque acessibilidade conta

Realizar as buscas pelas roles é uma boa prática porque, além de testar a sua aplicação, você garante a sua acessibilidade. As especificações relacionadas à acessibilidade estão definidas na W3C (World Wide Web Consortium) como WAI-ARIA.

WAI-ARIA quer dizer Accessible Rich Internet Applications (Aplicações Ricas para uma Internet Acessível). O conjunto ARIA oferece a maneira de tornar as aplicações mais acessíveis a uma maior diversidade de pessoas, incluindo quem utiliza tecnologias assistivas, como leitores de telas e lentes de aumento.

[Aqui](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) você confere uma lista de todas as possíveis roles.

### Aula 02 - O que aprendemos nessa aula`:`

- Instalamos as bibliotecas necessárias para gerir as rotas e o estado;
- Criamos um hook que encapsula o acesso ao estado global de participantes;
- Utilizamos o useRef para interagir com o DOM e definir foco a um input;
- Executamos código assíncrono com o setTimeout;
- Lidamos com temporizadores nos testes com Jest.
