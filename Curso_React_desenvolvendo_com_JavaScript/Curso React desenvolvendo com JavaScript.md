# Curso Alura React: desenvolvendo com JavaScript

## Aula 01: Uma bliblioteca declarativa

### Aula 01: Apresentação - Video 1

Nesta aula, Vinny Neves e Paulo Silveira introduzem o curso de React na Alura. O curso é voltado para desenvolvedores Front-End que já possuem conhecimento em DOM, JavaScript e CSS e desejam aprender React. O objetivo é criar uma aplicação completa para gerenciar colaboradores da Alura, desde o Terminal até o deploy na internet. Vinny será o professor e Paulo participará como aluno, trazendo conceitos do JavaScript. Durante o curso, eles utilizarão um layout do Figma e abordarão os conceitos principais do React, além de cobrar conhecimentos de JavaScript. O curso é focado no JavaScript, mas há uma formação em React com TypeScript disponível na Alura. No final, eles incentivam os alunos a publicarem o projeto no LinkedIn e/ou GitHub. O Organo será publicado na Versel e eles ensinarão como desenvolvê-lo do zero e disponibilizá-lo na internet. Há outras formações disponíveis na Alura para aprofundamento no assunto.

### Aula 01: Olá mundo! - Video 2

> IMPORTANTE!, não se deve colocar dois elementos HTML SEPARADOS(um abaixo do outro)
  Para se usar elementos separados deve-se 'ENVELOPAR', com uma div ou um container  
  O React tem para isso o Fragment /Fragment ou <> </>

Nesta aula, Paulo e Vinicius introduzem o curso de React e falam sobre o uso do Figma no desenvolvimento Front-End. Eles explicam como criar um projeto React utilizando o comando "npx create-react-app" e mostram como iniciar o projeto com o comando "npm start". Também mencionam a importância dos componentes React e como o React mantém o servidor e o Front-End alinhados. É um bom ponto de partida para aprender React e desenvolver aplicações Front-End.

### Aula 01: Primeiro componente: Banner - Video 3

Nesta aula do curso "React: desenvolvendo com JavaScript", os instrutores Paulo e Vinícios explicam o conceito de componente no React, que é uma mistura de CSS, JavaScript e HTML organizada de forma mais eficiente. Eles mostram como criar o primeiro componente, o "Banner", utilizando JSX e como estilizá-lo com CSS. No final, eles incentivam os espectadores a personalizarem o projeto de acordo com suas preferências e publicá-lo em seus portfólios.

### Aula 01: Explorando o projeto - Video 4

Nesta aula de React, os instrutores Paulo e Vinicios discutem sobre a organização dos arquivos e pastas do projeto. Eles mostram quais arquivos podem ser removidos, como o "App.js", "App.css", "App.test.js", "logo.svg", "reportWebVitals" e "setupTest.js". Além disso, explicam a função de cada um deles. Os instrutores ressaltam a importância de entender os conceitos do React antes de avançar para etapas mais avançadas do desenvolvimento.

### Aula 01: Campo de texto - Video 5

Nesta aula do curso React: desenvolvendo com JavaScript, os instrutores Paulo e Vinicios discutem a importância de criar componentes reutilizáveis em um projeto React. Eles mostram como criar um componente de campo de texto utilizando arrow functions e exportando-o como uma constante. Também abordam a importância de nomear corretamente os componentes e como organizar os arquivos para facilitar a importação. Além disso, ensinam como estilizar o componente utilizando CSS e como passar parâmetros para personalizar o texto da label do campo de texto. A explicação sobre a passagem de parâmetros é deixada para o próximo vídeo.

### Aula 01: Parâmetros de componente - Video 6

Nesta aula, Paulo e Vinicios discutem sobre como fazer um componente de campo de texto em React receber parâmetros. Eles explicam que os componentes em React são funções e, portanto, é possível passar parâmetros para eles. Ao passar uma propriedade para o componente CampoTexto, eles mostram que é possível acessar essa propriedade através do objeto "props" que é implicitamente entregue pelo React. Eles também mostram como imprimir o valor da propriedade no HTML e como passar o valor da propriedade para o atributo "placeholder" do input. Além disso, eles explicam a convenção de utilizar o nome "props" para o objeto que contém as propriedades do componente. Por fim, eles mencionam que o próximo passo é encaixar todos os campos de texto dentro de um formulário.

### Aula 01: Criando o Formulário - Video 7

Nesta aula do curso de React, os instrutores discutem a criação de um formulário utilizando React. Eles mostram como criar um novo componente chamado "Formulario" e importar o arquivo CSS correspondente. Em seguida, eles estruturam o HTML do formulário e fazem a estilização, definindo tamanho, cor de fundo, bordas arredondadas, espaçamento e adicionando um efeito de sombra. Eles também mencionam a importância da negociação com os designers para encontrar soluções viáveis. Os próximos passos serão a criação de um botão para submeter os dados e a implementação de um campo de seleção para o campo "Time".

### Aula 01: Para saber mais: componentes funcionais

Durante o curso, nós vamos trabalhar apenas com componentes funcionais. Essa é a forma mais simples de criar um componente React.

Mas ela não é a única forma possível. Podemos criar componentes utilizando Classes do ES6.

Vamos entender um pouco mais as diferenças?

Aqui vai um componente funcional:

>function BoasVindas(props) {
  return <h1>Olá, {props.nome}</h1>;
}

O mesmo componente, baseado em classes, seria:

>class BoasVindas extends React.Component {
  render() {
    return <h1>Olá, {this.props.nome}</h1>;
  }
}

Além da sintaxe, existem diversas diferenças. Se você quiser ir mais fundo no conceito de componentes baseado em classes, a [documentação](https://pt-br.legacy.reactjs.org/docs/components-and-props.html)é a nossa melhor fonte.

### Aula 01: Nessa aula

Criamos um novo projeto React;
Criamos componentes funcionais;
Estilizamos componentes com CSS;
Analisamos as dependências do projeto;
Analisamos os comandos disponíveis no package.json.

## Aula 02: Trabalhando com Props

### Aula 02: Um Framework Declarativo - Video 1

Nesta aula, Paulo Silveira e Vinicios Neves discutem sobre o React, um framework reativo criado pelo Facebook. O React permite que a página reaja a mudanças nos dados do estado do componente, atualizando o DOM da HTML, tornando a página mais dinâmica. Ele facilita a escrita de interfaces de usuário, evitando a necessidade de escrever muito código em JavaScript puro e se preocupar com a atualização do DOM. O React também é utilizado em Single Page Applications, que são aplicações que rodam em uma única página. Paulo e Vinicios concordam que ainda há muito a ser feito no curso de React.

### Aula 02: Lista dos times - Video 2

Nesta aula, Paulo e Vinicios discutem sobre a implementação do componente "ListaSuspensa" no projeto do Figma. Eles explicam como criar esse componente, utilizando um arquivo "index.js" e um arquivo "ListaSuspensa.css". No "index.js", eles criam uma função que retorna uma div com uma label e um select, onde o select é preenchido com as options correspondentes aos itens passados como propriedade. Eles também explicam o uso do método "map" para percorrer a lista de itens e renderizar as options. Além disso, eles mencionam a importância de estilizar o select para que ele fique semelhante ao campo de texto. Assim, eles finalizam a implementação do componente "ListaSuspensa".

### Aula 02: Criando o botão - Video 3

Nesta aula, os instrutores discutiram sobre a criação de um botão no Figma e decidiram criar um componente chamado "Botao" para representar o botão no código. Eles mostraram como utilizar o componente "Botao" em outro componente chamado "Formulario" e estilizaram o botão adicionando classes CSS. Também mencionaram a possibilidade de passar elementos para dentro do componente "Botao" utilizando a propriedade "children".

### Aula 02: Escutando eventos - Video 4

Nesta aula, Paulo e Vinicios discutem sobre como fazer um botão reagir a um clique em uma aplicação React. Vinicios explica que, ao contrário do JavaScript vanilla, no React é mais simples. Basta utilizar a sintaxe onSubmit={aoSalvar} para vincular a função aoSalvar ao evento de submissão do formulário. Vinicios também menciona que é preferível ouvir o evento de submissão ao invés do evento de clique, pois assim é possível realizar a validação do formulário HTML. Ele mostra como utilizar a função aoSalvar para exibir uma mensagem no console quando o formulário for submetido. Vinicios também explica como evitar que a página seja recarregada ao submeter o formulário, utilizando o método event.preventDefault(). Por fim, ele menciona que no próximo vídeo eles irão abordar como capturar os valores digitados nos campos de input.

### Aula 02: Para saber mais: eventos HTML

No componente Formulario, nós aguardamos pelo evento onSubmit. Assim, podemos aproveitar a validação nativa do HTML dos inputs que são obrigatórios.

Mas esse não é nem de longe o único evento disponível!

[Aqui](https://developer.mozilla.org/en-US/docs/Web/Events), você vizualiza os eventos HTML disponíveis atualmente (em inglês).

Mas fique atento que, no universo React, os eventos são nomeados com [camelCase](https://www.alura.com.br/artigos/convencoes-nomenclatura-camel-pascal-kebab-snake-case), logo: onclick vira onClick.

Quer saber ainda mais? [Se liga aqui](https://pt-br.legacy.reactjs.org/docs/handling-events.html).

### Aula 02: Nessa aula

Aprendemos como passar props para um componente;
Renderizamos listas com o .map;
Trabalhamos com elementos aninhados usando a prop children;
Ouvimos elementos disparados pelo DOM: o onSubmit do nosso form.

## Aula 03: Interagindo com o Usuário

### Aula 03: Manipulando o input do usuário - Video 1

Nesta aula, o professor Vinicios ensina como pegar os dados digitados em um campo de texto no React com JavaScript. Ele explica que no JavaScript vanilla seria necessário percorrer o DOM para encontrar o input e obter o valor digitado, mas no React o processo é diferente. O professor mostra como adicionar o atributo onChange ao input para chamar a função aoDigitado sempre que o valor for alterado. Em seguida, ele implementa a função aoDigitado, que recebe o evento de digitação como parâmetro e utiliza o evento.target.value para obter o valor digitado. O valor é armazenado em uma variável chamada valor e exibido no console. Para exibir o valor no campo de texto, é adicionado o atributo value ao input, que recebe a variável valor como valor. O professor destaca a importância de entender o ciclo de vida do React e a interação entre o JavaScript e o HTML. Com esse conhecimento, é possível criar formulários interativos e realizar ações com base nos dados digitados pelos usuários.

### Aula 03: Controlando o estado - Video 2

Nesta aula, Paulo e Vinicios discutem sobre o ciclo de vida e o poder do React, focando nos disparos de eventos, no gerenciamento do estado das variáveis e na associação do estado da variável interna com os componentes visuais. Eles introduzem o conceito de hooks, que são ganchos fornecidos pelo React para manter um estado dentro de uma função. O hook que eles utilizam é o useState, que retorna um valor e uma função setter. Eles explicam que, ao invés de utilizar a atribuição direta de valores, é necessário chamar a função setter para alterar o estado. Vinicios mostra exemplos de uso do useState para criar estados para campos de texto e um componente de ListaSuspensa. Eles também discutem a necessidade de elevar o estado em um formulário e diferentes abordagens para gerenciar o estado. Por fim, eles mostram como utilizar o useState e a função de alteração do estado para exibir os valores dos estados no console quando o formulário é submetido.

### Aula 03: Cadastrando colaboradores - Video 3

Nesta aula, Paulo e Vinicios discutem sobre a implementação de um formulário de cadastro de colaboradores em uma aplicação React. Eles mostram como utilizar hooks para armazenar os dados dos colaboradores em um estado separado do formulário e como passar funções como props entre componentes. Eles também abordam a necessidade de atualizar corretamente o estado com os novos dados cadastrados e mencionam a importância de compartilhar a lista de times entre os componentes.

### Aula 03: Usando o estado

Qual a diferença entre controlar uma variável com o useState e criar e atribuir normalmente uma let?

Sempre que queremos que o componente reaja a alguma alteração no valor de uma variável e se renderize novamente, precisamos indicar isto utilizando o useState. Do contrário, o valor vai ser alterado mas o DOM não será atualizado.

Para ir mais fundo nesse hook, [Veja aqui](https://pt-br.legacy.reactjs.org/docs/hooks-reference.html#functional-updates).

### Aula 03: Para saber mais: Stateless VS Statefull

React tem duas abordagens diferentes para lidar com inputs de formulários.

Um elemento de input de formulário cujo valor é controlado pelo React é chamado de componente controlado (statefull em inglês). Quando o usuário insere dados em um componente controlado, o evento que manipula essa alteração é disparado e o seu código decide se o input é válido (ou seja, renderizado com o valor atualizado). Se você não re-renderizar o elemento de formulário, permanecerá inalterado.

Um componente não controlado (stateless em inglês) funciona como um elemento de formulário fora do React. Quando um usuário insere dados em um campo de formulário (um input box, dropbox, etc), a informação atualizada é refletida sem necessidade do React fazer nada. No entanto, isso também significa que você não pode forçar o campo a ter um certo valor.

### Aula 03: Nessa aula, você aprendeu como

Controlar inputs utilizando value e onChange;
Gerenciar o estado de um componente, utilizando o useState;
Trabalhar com props que são funções.

## Aula 04: Montando os Times

### Aula 04: Criando o componente Time - Video 1

Nesta aula, Paulo e Vinicios discutem a implementação do componente "Time" no Figma. Eles explicam que o objetivo é criar um componente dinâmico que exiba o nome de um time e suas cores correspondentes. Vinicios mostra o código inicial do componente e explica que o nome do time será recebido como uma propriedade (props) do componente. Eles também mostram como adicionar o título do time usando a tag <h3> e a propriedade props.nome. Além disso, eles mencionam a importância da equipe de design na definição dos estilos e a importância de ter habilidades em HTML e CSS na área de Front-End.

### Aula 04: Elevando a lista de times - Video 2

Nesta aula, Vinicios e Paulo discutem sobre a implementação do componente "Time" em um projeto React. Eles explicam que o componente "Time" é um exemplo de um "dumb component", ou seja, um componente sem inteligência, que apenas recebe props e exibe informações na tela. Vinicios ressalta que, apesar de serem componentes visuais simples, há vantagens em utilizá-los, como facilidade de teste e manutenção.

Eles também discutem a criação de uma lista de times no arquivo "Formulario.js" e a necessidade de evitar duplicação de código. Vinicios propõe a criação de uma constante chamada "times", que será um array contendo os nomes dos times. Além disso, eles mostram como adicionar informações adicionais a cada time, como cores primárias e secundárias.

Vinicios explica que é possível utilizar o método ".map" para renderizar um componente "Time" para cada item da lista de times. Eles também adicionam a propriedade "key" a cada elemento da lista para que o React possa controlar quando renderizar ou não um filho.

Por fim, eles discutem a estilização do componente "Time" utilizando o estilo inline no arquivo "Time.js". Vinicios menciona que é possível passar um único objeto "time" como prop para o componente "Time" e acessar suas propriedades dentro do componente, mas ressalta que essa é uma opção de estilo de código com vantagens e desvantagens.

### Aula 04: Refatorando código duplicado - Video 3

Nesta aula, Paulo e Vinicios discutem sobre a implementação de uma funcionalidade em um formulário de cadastro de colaboradores. Eles percebem a necessidade de remover a lista de "times" do formulário e decidem resolver esse problema. Apesar de o VS Code apontar um erro, eles decidem salvar assim mesmo. Em seguida, eles discutem sobre como transformar a lista de objetos "times" em uma lista de strings contendo apenas os nomes desses objetos. Paulo sugere utilizar o método "map" para realizar essa transformação. Vinicios concorda e explica que optou por não mexer na interface dos outros componentes para evitar refatorar todo o código já escrito. Eles implementam a transformação utilizando o método "map" e ajustam o código em "Formulario" para utilizar a nova lista de nomes de times. Vinicios menciona que essa abordagem de "elevar o estado" foi feita após detectar a necessidade durante o desenvolvimento. Paulo comenta sobre a dificuldade de nomear variáveis na área de programação. Por fim, eles concluem que a próxima etapa é criar o componente visual e depois pensar no comportamento desejado.

### Aula 04: Card de colaborador - Video 4

Nesta aula, Paulo e Vinicios discutem sobre a criação dos cards dos colaboradores em um projeto utilizando React. Eles criam um componente chamado "Colaborador" que recebe informações como imagem, nome e cargo através de props. O componente é estruturado com uma div que envolve todo o card, contendo um bloco superior com a imagem do colaborador e um bloco inferior com o nome e o cargo. Vinicios menciona que é possível utilizar uma imagem do GitHub como src. Eles mostram como adicionar o card de colaborador dentro do componente "Time" e importar as classes de CSS correspondentes. Ainda é necessário trabalhar na dinamicidade do componente e na organização dos cards lado a lado.

### Aula 04: Mapeando os colaboradores - Video 5

Nesta aula, Paulo e Vinicios discutem sobre a implementação de cards dinâmicos em um formulário. Eles mostram como fazer os cards aparecerem dinamicamente com base no que é digitado no formulário e como adicionar esses cards a um time. Vinicios mostra como adicionar o código para renderizar os cards dos colaboradores dentro do componente "Time" e como fazer a passagem das propriedades nome, cargo e imagem para o componente "Colaborador". Eles também mostram como usar a desestruturação de objetos para simplificar o código do componente "Colaborador". Por fim, eles discutem sobre a necessidade de filtrar os colaboradores por time e mostram como usar o método "filter" para fazer isso.

### Aula 04: Escondendo times vazios - Video 6

Nesta aula, Paulo e Vinicios discutem sobre a implementação de um recurso no Figma, uma aplicação desenvolvida em React. Eles abordam dois detalhes específicos: não mostrar times sem colaboradores e limpar o formulário após adicionar um colaborador. Para resolver o primeiro problema, eles mostram duas formas de fazer a renderização condicional no React: usando a expressão props.colaboradores.length > 0 && ou o operador ternário ?. Em relação ao segundo problema, eles explicam que é necessário chamar as funções setNome(), setCargo(), setImagem() e setTime() com strings vazias '' para limpar os campos do formulário. Após implementarem essas soluções, eles testam no navegador e verificam que os times sem colaboradores não estão mais sendo mostrados e os dados do formulário são limpos após adicionar um colaborador.

### Aula 04: Para saber mais: Prop drilling

Prop drilling, em tradução livre, significa "vazamento de props", e acontece quando você passa uma ou mais props, do pai para o filho, o filho passa para o filho dele, e assim por diante. Lidar com esse prop drilling pode ser desafiador, pois em pouco tempo fica difícil para qualquer pessoa descobrir onde os dados são inicializados, atualizados e usados de fato.

Quer saber mais? [Aqui](https://www.alura.com.br/artigos/prop-drilling-no-react-js) tem um artigo mega bacana sobre os desafios de se lidar com esse tipo de cenário.

### Aula 04: Nessa aula, você aprendeu como

Manipular e transformar arrays de objetos;
Filtrar itens de um array;
Renderização condicional.

## Aula 05: Caça aos Bugs

### Aula 05: Nem tudo são flores - Video 1

Nesta aula, o instrutor Vinicios aborda a resolução de bugs e mensagens de erro em uma aplicação React. Ele mostra como corrigir o erro de "key" em uma lista, remover logs desnecessários, corrigir um problema de digitação em um componente e adicionar a cor primária em um card de colaborador. Ao final, a aplicação fica sem bugs e erros no Console.

### Aula 05: Depurando código - Video 2

Nesta aula, o instrutor Vinicios fala sobre a depuração e entendimento de código em React. Ele destaca a utilização do Developer Tools do navegador para navegar linha a linha do código, utilizando a palavra-chave debugger. Além disso, ele aborda a importância de criar e exportar um único elemento HTML em cada componente, resolvendo problemas de erros de sintaxe com o uso de uma div ou um fragmento do React. O instrutor enfatiza a importância de interpretar e corrigir erros, e sugere abrir dúvidas no fórum em caso de dificuldades.

### Aula 05: Publicando a aplicação - Video 3

Nesta aula, o instrutor Vinicios explica como publicar o projeto "Organo" no GitHub e na plataforma Vercel. Ele mostra como conectar o repositório do GitHub ao projeto na Vercel e inicia o processo de deploy. Após alguns minutos, o projeto é publicado e Vinicios mostra uma prévia. Ele enfatiza a importância de os alunos publicarem suas próprias versões do projeto e os encoraja a marcar ele e o Paulo nas redes sociais para que possam ver e parabenizar pelo trabalho. Esta é a última aula do curso.

### Aula 05: Nessa aula, você aprendeu como

Ler e interpretar mensagens de erro;
Corrigir erros;
Depurar o seu código com o debugger.

### Aula 05: Conclusão - Video 4

Nesta aula, Paulo e Vinicios parabenizam os alunos que concluíram o curso e fizeram o projeto final. Eles destacam a importância de colocar o projeto no ar, personalizá-lo e adicionar novas features para consolidar o aprendizado. Vinicios menciona os conceitos aprendidos no curso, como estado, props e criação de componentes do zero. Paulo faz perguntas sobre componentes de calendário no React e o uso do TypeScript. Eles recomendam que os alunos se aprofundem no React antes de explorar outras áreas e mencionam as Imersões e a Formação do Next.js como oportunidades de aprofundamento. No final, eles parabenizam os alunos e convidam a participarem dos cursos da Alura e do Discord da plataforma.
