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

## Aula 03 - Finaliazndo a Configuração

### Aula 03 - Lista de participantes - Vídeo 1

Nesta aula, o instrutor discute a implementação de um componente de lista de participantes em um formulário utilizando a abordagem de TDD (Test-Driven Development). Ele mostra como descrever cenários de teste, criar testes, renderizar o componente e buscar elementos na tela. O objetivo é verificar se a lista de participantes está vazia inicialmente. O instrutor também explica como criar um hook para obter a lista de participantes e simular seu comportamento nos testes. Após corrigir o teste, o instrutor destaca que o componente renderiza corretamente a lista de participantes e menciona os próximos passos do projeto.

### Aula 03 - Hora de iniciar a brincadeira - Vídeo 2

Nesta aula, o instrutor discute a implementação de um rodapé em um componente React. Ele destaca a importância de seguir o fluxo do TDD e começa criando um teste para verificar se o botão no rodapé está desabilitado quando a lista de participantes tem menos de três elementos. Em seguida, ele mostra como renderizar o componente e validar se o botão está desabilitado usando a biblioteca de testes "@testing-library/react". Após verificar que o teste falha, o instrutor implementa o componente do rodapé, adicionando um botão com o texto "Iniciar brincadeira" e um atributo "disabled" que depende do tamanho da lista de participantes. Ele refatora o código para usar a função "useListaDeParticipantes" e garante que o teste passe. No final, ele menciona que a próxima etapa será implementar a funcionalidade de navegação quando o botão for clicado.

### Aula 03 - Navegando entre rotas - Vídeo 3

Nesta aula, o instrutor finaliza a configuração do projeto e explica como navegar entre rotas no React. Ele implementa um cenário de teste para verificar se o botão de iniciar a brincadeira está habilitado quando existem participantes suficientes. Para isso, é necessário "mockar" a lista de participantes e o React Router. O instrutor mostra como verificar se o método de navegação foi chamado corretamente e como corrigir um erro ao "mockar" o useNavigate. Por fim, ele explica que o componente Rodape está pronto e que é necessário criar uma página com todos os elementos para avançar para a lógica de sorteio.

### Aula 03 - Fotografando componentes - Vídeo 4

Nesta aula, o instrutor ensina como criar uma página de configuração em um projeto React. Ele explica sobre o teste de Snapshot, que consiste em tirar uma "foto" da renderização da página e compará-la com uma foto anteriormente salva. O instrutor mostra o código do teste de Snapshot para a página de configuração e explica como corrigir um erro relacionado ao uso do método "useNavigate" do React Router. Ele também menciona que é hora de implementar a funcionalidade de sorteio na página de configuração.

### Aula 03 - Para saber mais: React Router e Recoil

Durante o desenvolvimento, utilizamos algumas bibliotecas para nos ajudar a alcançar o resultado desejado. Essas ferramentas são tão poderosas que você possui um curso dedicado para cada uma delas.

Quer aprender a gerenciar o estado com Recoil? Se liga [aqui](https://cursos.alura.com.br/course/react-gerenciando-estado-recoil).

E se quiser usar todo o poder do React Router Dom, cola [aqui](https://cursos.alura.com.br/course/react-biblioteca-react-router).

### Aula 03 - O que aprendemos nessa aula`:`

- Preparamos o mock de um hook customizado;
- Validamos se métodos são chamados pelo componente testado;
- Lidamos com a navegação do react router dom durante os testes;
- Realizamos testes de snapshot.

## Aula 04 - Sorteando amigos secretos

### Aula 04 - Página de sorteio - Vídeo 1

Nesta aula do curso "React: testando os seus componentes", o instrutor discute o conceito de TDD (Test-Driven Development) e inicia a implementação de testes para a página de sorteio de um projeto. Ele cria um novo arquivo de teste chamado "Sorteio.test.tsx" e o objetivo inicial é verificar se todos os participantes podem exibir o seu amigo secreto. Para isso, é necessário ter um select com opções para cada participante. O instrutor utiliza a função render para renderizar a página de sorteio e a função screen.queryAllByRole para buscar as opções dentro do select. Ele menciona a necessidade de "mockar" o hook useListaDeparticipantes para retornar os participantes corretos durante o teste. Em seguida, ele implementa a página de sorteio, criando um formulário com um select e as opções correspondentes aos participantes. A lógica de sorteio será abordada no próximo vídeo.

### Aula 04 - Um hook para a todos sortear - Vídeo 2

Nesta aula, o instrutor implementa a lógica de sorteio para um amigo secreto em um projeto React. Ele cria um novo hook chamado "useSorteador.ts" que será responsável por sortear os participantes. O instrutor utiliza o hook "useListaParticipantes()" para obter a lista de participantes e, em seguida, embaralha essa lista utilizando a biblioteca "just-shuffle". Depois, ele define quem cada participante sorteou, formando assim o par de amigos, e armazena esse resultado em um atom do Recoil. O próximo passo será testar essa lógica de sorteio utilizando uma função pura.

### Aula 04 - Extraindo a regra de negócio - Vídeo 3

Nesta aula, o instrutor explica como extrair um teste para uma função pura que possa ser testada de forma simples, sem estar atrelada a um hook. Ele cria uma nova pasta chamada "helpers" para armazenar as funções auxiliares. O objetivo é criar uma função que realiza um sorteio de amigo secreto, onde cada participante não sorteie o próprio nome. O instrutor descreve o cenário de teste e define uma constante chamada "participantes" com os nomes dos participantes. Em seguida, ele chama a função "realizarSorteio" passando a lista de participantes e atribui o resultado a uma constante chamada "sorteio". O instrutor utiliza um loop "forEach" para percorrer cada participante e obter o amigo secreto correspondente através do método "get" do objeto "sorteio". Ele então utiliza a função "expect" para verificar se o amigo secreto não é igual ao próprio participante. Em seguida, o instrutor implementa a função "realizarSorteio" que recebe a lista de participantes como parâmetro e retorna o resultado. Ele utiliza a função "shuffle" para embaralhar a lista de participantes e retorna o resultado. O instrutor faz o import da função "realizarSorteio" no arquivo de teste e verifica se o teste passa. Por fim, ele menciona que a lógica do sorteio pode ser removida do hook e substituída pela chamada da função "realizarSorteio". Ele destaca a importância de ter as regras de negócio em funções puras, pois são mais fáceis de testar.

### Aula 04 - Validando o sorteio - Vídeo 4

Nesta aula do curso "React: testando os seus componentes", o instrutor discute a implementação de um hook de sorteio e a importância de garantir que ele seja chamado corretamente. É proposto a criação de um mock do sorteio para verificar se ele foi chamado uma vez. No componente "Rodape", é adicionada a linha const sortear = useSorteador() para utilizar o hook de sorteio. Após implementar essa funcionalidade, será necessário exibir o resultado do sorteio, o que será abordado no próximo vídeo.

### Aula 04 - Exibindo o amigo secreto - Vídeo 5

Nesta aula, o instrutor ensina como testar a exibição do amigo secreto em um componente de sorteio no React. Ele cria um novo caso de teste, renderiza o componente e realiza a seleção do participante. Em seguida, ele implementa o botão de sorteio e a função onSubmit para evitar o carregamento da página. Também adiciona um hook chamado useResultadoSorteio para obter o resultado do sorteio e atualizar o estado do amigo secreto. Após implementar essas alterações, o instrutor realiza novamente o teste e verifica que o amigo secreto é exibido corretamente. Ele também menciona a importância de implementar o mock do resultado do sorteio. No final, são deixados desafios para implementar testes adicionais e a próxima aula será sobre a publicação do projeto na internet.

### Aula 04 - Para saber mais: expectativas do Jest

O Jest é uma biblioteca muito conhecida no mundo dos testes e nos oferece várias expectativas já prontinhas para serem utilizadas. Nós já vimos algumas durante nossos testes, mas [confira aqui](https://jestjs.io/pt-BR/docs/expect) a lista na íntegra.

Além dessas, você tem também todo o complemento do [jest-dom](https://github.com/testing-library/jest-dom), como por exemplo o toBeInTheDocument que utilizamos em aula.

E tenha em mente que, se o teste está muito grande ou difícil demais de ser implementado, talvez exista espaço para refatorar o código atual e decompor o componente em componentes menores.

### Aula 04 - O que aprendemos nessa aula`:`

- Buscamos elementos `<option>` pela role;
- Testamos se o fluxo da aplicação está sendo executado como o esperado;
- Refatoramos código para facilitar a escrita de testes;
- Escrevemos html acessível utilizando o conceito de roles.
