# Curso Alura React: desenvolvendo com JavaScript

## Aula 01: Uma bliblioteca declarativa

### Aula 01: Apresentação - Video 1

Nesta aula, Vinny Neves e Paulo Silveira introduzem o curso de React na Alura. O curso é voltado para desenvolvedores Front-End que já possuem conhecimento em DOM, JavaScript e CSS e desejam aprender React. O objetivo é criar uma aplicação completa para gerenciar colaboradores da Alura, desde o Terminal até o deploy na internet. Vinny será o professor e Paulo participará como aluno, trazendo conceitos do JavaScript. Durante o curso, eles utilizarão um layout do Figma e abordarão os conceitos principais do React, além de cobrar conhecimentos de JavaScript. O curso é focado no JavaScript, mas há uma formação em React com TypeScript disponível na Alura. No final, eles incentivam os alunos a publicarem o projeto no LinkedIn e/ou GitHub. O Organo será publicado na Versel e eles ensinarão como desenvolvê-lo do zero e disponibilizá-lo na internet. Há outras formações disponíveis na Alura para aprofundamento no assunto.

### Aula 01: Olá mundo! - Video 2

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

## Aula 03: 

### Aula 03:  - Video 1
