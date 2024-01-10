# Curso Alura React: como os componentes funcionam

## Aula 01: React: como os componentes funcionam

### Aula 01: Apresentação - Video 1

Nesta aula, o instrutor Luiz Fernando dá as boas-vindas e introduz o conteúdo do curso. O objetivo é incrementar o projeto Organo, adicionando uma nova funcionalidade que permite criar um novo time. Será abordada a refatoração de componentes e explicado o uso de states e props no React. Também serão explicados conceitos como "one way data binding", declaratividade, biblioteca vs framework, e a diferença entre o DOM e o virtual DOM. O instrutor promete desenvolver o código ao longo do curso e se despede, prometendo encontrá-los nos próximos vídeos.

### Aula 01: Clonando o repositório - Video 2

Nesta aula, o instrutor dá as boas-vindas e explica que o objetivo principal do curso é entender como o React funciona. Ele destaca que irão explorar recursos como props e states, além de discutir por que nem tudo pode ser atualizado no próprio React e por que ele é considerado uma biblioteca. O instrutor também mostra como clonar um projeto utilizando o Git e o GitHub e como abrir a pasta do projeto no VS Code.

### Aula 01: Para saber mais: Git e Github

Git  
Git é a ferramenta utilizada pelos desenvolvedores para controlar as versões do seu código:
Ao invés de você ter pastas diferentes com códigos parecidos, você terá branches com códigos parecidos!

Branches seriam uma representação dessas pastas que você criaria sem o Git, e caso você queira ir para uma destas branches, você pode utilizar o comando git checkout:

Github  
O Github nada mais é do que um site que guarda projetos git! Estes projetos são chamados de repositórios, e você pode ter repositórios públicos ou privados.Todos os repositórios que você tem acesso podem ser clonados ou “forkados”. E o que significa clone ou fork?

clone  
Com o clone, você copia o código para a sua máquina, porém o remote permanece o da pessoa que você clonou, ou seja, se você copiar o código do React por exemplo, o remote é o link do código real, do React. Como você não tem permissão para enviar código para o repositório oficial do React, fazer isto seria negado.

fork  
Aí que entra o fork! O fork faz uma cópia daquele repositório no seu Github! Ele não copia o código para a sua máquina, mas após esta cópia, você poderá fazer um clone do seu repositório (o repositório copiado via fork) e agora o remote estará apontando para o seu Github, não mais para o Github oficial!

### Aula 01: Instalando dependências - Video 3

Nesta aula, o instrutor explica como importar um projeto do GitHub e instalar as dependências necessárias. Ele mostra como utilizar o Terminal no VSCode e o comando "npm start" para executar o projeto. No entanto, ocorre um erro relacionado ao "react-scripts". O instrutor mostra o arquivo "package.json" do projeto, onde estão as dependências. Ele explica que é necessário instalar todas as dependências para o projeto funcionar corretamente. O instrutor também menciona que o "npm" é o gerenciador de pacotes do Node e facilita a adição de dependências. Após a instalação, a pasta "node_module" é criada com todas as dependências. Por fim, o instrutor executa novamente o comando "npm start" e o projeto é exibido corretamente.

### Aula 01: Nessa aula, você aprendeu

Como clonar um projeto;
A diferença entre clone e fork;
Como instalar dependências de um projeto;
Como rodar um projeto.

## Aula 02: O Que são Componentes

### Aula 02: Biblioteca x Framework - Video 1

Nesta aula, o instrutor explica como o projeto está estruturado e como fazer alterações nele. Ele mostra os componentes importados no arquivo "App.js" e explica a diferença entre bibliotecas e frameworks. O instrutor também menciona o uso do DOM real e do Virtual DOM, além de mostrar como o componente App retorna uma estrutura semelhante a HTML. Ele destaca o uso do .map() para renderizar cada colaborador dentro de um time. No próximo vídeo, serão abordadas novas funcionalidades para o projeto.

### Aula 02: Criando aoDeletar - Video 2

Nesta aula, o instrutor explica como adicionar a funcionalidade de deletar um colaborador em um componente chamado "Colaborador". Ele mostra como renderizar o componente dentro de um loop utilizando a função map() e adiciona um bloco de código dentro do loop para verificar se o componente está sendo renderizado corretamente. Em seguida, ele explica como passar a propriedade "aoDeletar" para o componente "Colaborador" e como receber essa propriedade no componente "Time". As propriedades são como encaixes entre os componentes, permitindo a comunicação entre eles.

### Aula 02: Criando o botão deletar - Video 3

Nesta aula, o instrutor explica como adicionar a funcionalidade de exclusão de colaboradores em um aplicativo React. Ele mostra como passar a função "deletarColaborador" como propriedade para o componente "Colaborador" e como essa função é chamada quando o botão "deletar" é clicado. O instrutor também demonstra boas práticas de organização de código e a importância de garantir que as propriedades sejam passadas corretamente entre os componentes.

### Aula 02: Importando ícone de deletar - Video 4

Nesta aula, o instrutor explica como adicionar um ícone de exclusão ao botão de deletar um colaborador em um aplicativo React. Ele utiliza a biblioteca React Icons para importar o ícone desejado no componente Colaborador. O instrutor também mostra como aumentar o tamanho do ícone e como adicionar a funcionalidade de deletar o colaborador ao clicar no ícone. Ele destaca a importância de utilizar as chaves no import para tornar o código mais semântico e fácil de ler. No final, o resultado é um botão de deletar com um ícone de exclusão maior e a função de deletar colaborador funcionando corretamente.

### Aula 02: Nessa aula, você aprendeu

Como criar uma nova prop;
Como passar esta prop para inúmeros componentes;
O que é uma closure e como utilizá-la a seu favor;
Como instalar novas dependências na sua aplicação;
Diferença entre export e export default.

## Aula 03: O Que são Componentes

### Aula 03: Biblioteca x Framework - Video 1
