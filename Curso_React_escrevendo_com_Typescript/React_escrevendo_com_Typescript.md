# Curso Alura React: escrevendo com Typescript

## Aula 01: Criando o Projeto

### Aula 01 - Apresentação - Vídeo 1

Nesta aula do curso de React com Typescript, o instrutor Luiz Fernando apresenta as principais características e funcionalidades dessas duas bibliotecas amplamente utilizadas no desenvolvimento de aplicações web. Ele explica como criar um projeto React utilizando o "create react app" e mostra a estrutura de pastas gerada por padrão. Além disso, são abordados conceitos como componentização, DRY (Don't Repeat Yourself) e SRP (Single Responsibility Principle). Também são exploradas outras tecnologias, como Sass e Css Modules, e conceitos como comunicação entre componentes utilizando Props e gerenciamento de estado interno utilizando o State. O instrutor também mostra a diferença entre "Class components" e "Function components" e os motivos pelos quais os "Function components" são mais utilizados atualmente. Ao final do curso, o aluno estará apto a desenvolver aplicações web utilizando React e Typescript.

### Aula 01 - Criando o projeto - Vídeo 2

No terminal, dentro da pasta do projeto foi usado o seguinte comando:
>npx create-react-app --template typescript alura-studies --use-npm

Poderia ser também:
>npx create-react-app nomeprojeto --template typescript --use-npm

Nesta aula, aprendemos sobre o React e como criar um projeto utilizando o create-react-app. O React é uma biblioteca JavaScript que facilita a criação de interfaces de usuário reutilizáveis e reativas. Ele utiliza a componentização como uma de suas principais premissas, permitindo a criação de componentes reutilizáveis e modulares. Além disso, o React também possui um sistema de gerenciamento de estado, que permite que os componentes reajam a mudanças e se atualizem automaticamente. O create-react-app é uma ferramenta que simplifica a criação e configuração inicial de projetos React, permitindo selecionar um template, como o Typescript, para adicionar funcionalidades extras ao projeto. Após a criação do projeto, é possível iniciar o servidor de desenvolvimento e testar a aplicação em tempo real. Com o React e o create-react-app, é possível desenvolver aplicações web de forma mais eficiente e produtiva.

### Aula 01 - Faça como eu fiz: Criar um projeto typescript com CRA

- npx
O comando npx, diferente do comando npm, apenas executa um pacote, sem que precisemos instalá-lo na nossa máquina, como o create-react-app normalmente só é usado no começo para criar o projeto, o ideal é executar com npx pois isso fará com que você sempre execute a última versão do pacote.

- create-react-app
O nome do pacote que queremos executar.

- alura-studies
O nome do projeto que queremos, assim como o nome da pasta.

- --template typescript
O Create React App nos permite usar vários templates, tendo como sintaxe o --template, que diz pro terminal que logo após iremos dizer qual template gostaríamos de usar, e o nome do template em si. O Create React App já tem o template typescript criado, mas caso tenha algum template que queira usar e não existe, você também pode criar o seu!,

- --use-npm
Caso o yarn esteja instalado na sua máquina, o Create React App prioriza à utilização dele, e isso irá gerar um yarn.lock dentro da nossa aplicação, e nós queremos utilizar o npm ao invés do yarn, por isso precisamos usar o comando --use-npm se quisermos garantir que o Create React App utilize o npm para instalar as dependências necessárias e também garantir que ele gere o package-lock.json ao invés do yarn.lock.

### Aula 01 - Entendendo o projeto - Vídeo 3

Nesta aula, o instrutor explica a estrutura do projeto Alura Studies e mostra os arquivos e pastas presentes no projeto. Ele mostra os arquivos package.json e package-lock.json, que são relacionados ao NPM. O package.json contém informações sobre o projeto, como nome, versão e dependências. O package-lock.json registra todas as dependências instaladas. O tsconfig.json contém configurações do TypeScript. O README.md é um arquivo de documentação. A pasta "src" contém os arquivos relacionados ao código da aplicação. O instrutor também mostra como remover arquivos não utilizados e como adicionar o texto "Hello World" na página.

### Aula 01 - Nessa aula, você aprendeu como`:`

Configurar o seu ambiente para rodar o projeto;
Aprendemos como configurar o seu ambiente para poder criar e rodar um projeto React, instalando o Node/npm e o GIT para controlarmos as versões e/ou baixarmos a aplicação do Github.
Diferenciar npx de npm;
Utilizamos o npx na aplicação e aprendemos a diferenciar o comando npx do comando npm, mostrando quando é melhor usar cada um.
Criar um projeto com create-react-app com template typescript usando npm;
Criamos um projeto utilizando npx, entendemos que o CRA (Create React App) tem possibilidade de criar projetos com template (optamos pelo typescript), escolhendo o npm como o nosso gerenciador de pacotes padrão.
O Create React App estrutura o projeto.
Entendemos como o Create React App estrutura a aplicação, vendo dos arquivos de configuração (tsconfig, package.json, package-lock.json entre outros), até as pastas/arquivos que serão atualizados por nós (pasta src, arquivos app.tsx, index.tsx, index.css entre outros).

## Aula 02: Componetização

### Aula 02 - Criando um componente - Vídeo 1

Nesta aula, o instrutor explicou a estrutura da pasta "public" em um projeto React, mencionando o arquivo "index.html" e como personalizá-lo. Ele também falou sobre outros arquivos presentes na pasta, como o "favicon.ico", as logos e o "robots.txt".

Em seguida, o instrutor mostrou como criar um novo componente no projeto, seguindo boas práticas de organização. Ele criou uma pasta "components" e dentro dela uma pasta "Botao", onde criou um arquivo "index.tsx" com um componente de botão.

O instrutor ensinou como importar e renderizar esse componente no arquivo "App.tsx", substituindo o texto "Hello World" por `<Botao />`. Ele também explicou as boas práticas do React, como o "Don't Repeat Yourself" (DRY) e o "Single Responsibility Principle" (SRP).

No próximo vídeo, o instrutor continuará a construir a aplicação.

### Aula 02 - Para saber mais: Sobre componentes

Dentre todas as vantagens que o React nos proporciona, a componentização é uma das mais conhecidas, além de ser uma das marcas do React.

Vamos ver a criação de um class componente:

```React
class Botao extends React.Component {
  render() {
   return (
      <button>Botão</button>
    )
 }
}
```

Só com esse pequeno componente, podemos ter várias informações interessantes, vamos separá-las em informações sobre componentização (em geral, tanto class components quanto function components) tanto sobre class components especificamente.

Sobre Componentização
Nome do Componente
O nome do componente deverá começar com letra maiúscula, mas por que?

Existe uma possibilidade no html de criar [web-components](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_components), que nos permite criar tags html totalmente customizadas. Entre essas customizações, podemos customizar o nome da tag!

Para o React diferenciar um componente de um web-component, ele pede para que criemos um componente com a primeira letra maiúscula, assim ele consegue diferenciar por exemplo que `<meuBotao />` é um web-component e `<MeuBotao />` é um componente!

return e JSX
Para podermos criar um componente, precisamos retornar JSX.

O JSX é uma forma de "escrever HTML no JS", que é a forma que explicamos, mas não é exatamente isso.

O JSX não transforma o componente `<Botao />` em HTML diretamente, antes disso, ele é transformado em uma elemento React, e aquele código é transformado em algo assim:

const Botao = React.createElement('button', {}, 'Botão');

React.Component e render
Para criarmos um componente com class components, precisamos estender à classe React.Component. Nesta classe, existe apenas uma função obrigatória chamada render e, dentro dela, nós retornamos o JSX que precisamos para criar o componente!

leia sobre [React.Fragment](https://pt-br.legacy.reactjs.org/docs/react-api.html#reactfragment).

### Aula 02 - Criando o formulário - Vídeo 2

Nesta aula, o instrutor ensina como criar um formulário utilizando React. É criada uma nova pasta chamada "Formulario" dentro da pasta "components" no VSCode. Dentro dessa pasta, é criado um arquivo chamado "index.tsx". Em seguida, é importado o React e criada uma classe chamada "Formulario" que estende a classe Component do React.

Dentro da classe Formulario, é definido o método obrigatório "render()", que retorna um formulário HTML. Esse formulário contém dois campos, cada um com um label e um input. Além disso, é importado o componente Botao e adicionado dentro do formulário.

O primeiro campo é do tipo "text" e possui um name, id, placeholder e é obrigatório. O label associado a esse campo é "Adicione um novo estudo". O segundo campo é do tipo "time" e possui um name, id, mínimo e máximo de tempo permitido, além de ser obrigatório. O label associado a esse campo é "Tempo".

Após a definição do formulário, a classe Formulario é exportada. No arquivo "App.tsx", o componente Botao é substituído pelo componente Formulario. Assim, ao renderizar o App, o formulário é exibido na página.

No navegador, é possível visualizar o formulário com os campos "Adicione um novo estudo" e "Tempo". Ao selecionar o label de cada campo, o input correspondente é focado. É possível selecionar várias horas no campo "Tempo". Ao clicar no botão, é exibida uma mensagem indicando que o campo é obrigatório.

No próximo vídeo, será ensinado como criar uma lista.

### Aula 02 - Criando a lista - Vídeo 3

Nesta aula, o instrutor explica como criar um componente de lista utilizando o React. Ele mostra a estrutura básica do componente, utilizando a sintaxe de um function component. O instrutor menciona que antes era comum utilizar class components, mas com o surgimento dos hooks no React 16.8, os function components passaram a ser mais utilizados. Ele mostra como criar um function component simples que renderiza um elemento `<aside>` com um título e uma lista de itens. Cada item da lista é representado por um elemento `<li>` contendo um título e um tempo de estudo. O instrutor também menciona que as próximas atualizações do React estarão relacionadas aos function components, indicando que os class components estão se tornando obsoletos. No final, ele mostra como importar e renderizar o componente de lista no componente principal da aplicação.

### Aula 02 - Renderizando um array - Vídeo 4

Nesta aula, aprendemos como renderizar listas de forma dinâmica utilizando o React. Utilizamos a função map para percorrer um array de objetos e retornar um elemento HTML para cada item. Aprendemos também sobre a importância de utilizar a propriedade "key" para identificar cada elemento da lista de forma única. O React consegue renderizar a lista de forma dinâmica, adicionando ou removendo elementos conforme necessário.

### Aula 02 - Nessa aula, você aprendeu como`:`

Funciona a pasta public;
Abordamos sobre a pasta public, para que ela serve e por que raramente mexemos nela, mostramos também o arquivo index.html e como que o React popula ele com os componentes.
Criar um componente com class component e como utilizá-lo;
Criamos um componente com class component, mostrando toda a sintaxe desde o extends até o retorno e o export.
O que é JSX;
Vimos que o React retorna na verdade um JSX, não um HTML, também falamos de algumas diferenças entre os dois.
Criar um function component;
Também criamos um componente com function component (a forma mais atual de se escrever componentes desde a versão 16.8), e mostramos como é mais simples criarmos dessa forma.
Utilizar o método map para renderizar arrays.
Renderizamos arrays de JSX com o método map, mostrando que assim conseguimos aproveitar parte do JSX e mudar apenas o valor de item para item, utilizando assim o princípio DRY (Don't Repeat Yourself).

## Aula 03: Componetização

### Aula 03 -  - Vídeo 1
