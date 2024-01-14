# Curso Alura: React desenvolvendo em React Router com JavaScript

## Aula 01: Criando 'Olá Mundo'

### Aula 01: Introdução - Video 1

Nesta aula, o instrutor Antônio Evaldo dá as boas-vindas ao curso de React e apresenta a aplicação "Olá, Mundo". Ele mostra a aplicação em seu navegador, que se assemelha a um blog pessoal, com cards e posts. O objetivo do projeto é permitir que os espectadores desenvolvam seus próprios posts e compartilhem com o mundo. O instrutor também menciona a página "Sobre mim", onde os alunos podem adicionar informações sobre si mesmos.

O instrutor explica que o design da aplicação foi feito no Figma pela equipe de design da Alura. Ele destaca a responsividade do projeto e incentiva os alunos a praticarem CSS por conta própria. Em termos técnicos, o projeto é uma SPA (Single Page Application), e o instrutor ensinará como criar uma SPA no React usando a biblioteca React Router Dom. Ele menciona que essa biblioteca possui recursos como criação de rotas, rotas aninhadas e rotas dinâmicas.

Além disso, o instrutor aborda os hooks do React Router Dom, como o useLocation e useParams, e menciona que há vários desafios ao longo do curso. Ele ressalta a importância de ter conhecimentos fundamentais do React, como reatividade, hooks nativos do React e manipulação de arquivos estáticos.

O instrutor expressa sua empolgação em ensinar tudo isso e espera que os alunos aprendam muito ao longo do curso.

### Aula 01: Criando e preparando a aplicação - Video 2

Nesta aula, o instrutor cria uma aplicação React para exibir a mensagem "Olá, Mundo". Ele utiliza o comando npx create-react-app ola-mundo para criar o projeto e faz algumas modificações nos arquivos index.js e index.css, adicionando código CSS personalizado e importando fontes externas do Google Fonts. Após corrigir alguns erros, ele verifica se a aplicação está funcionando corretamente no navegador. No final, a mensagem "Olá Mundo!" é exibida.

### Aula 01: Alternando entre rotas com JS - Video 3

Nesta aula, o instrutor discute como trabalhar com várias páginas em uma aplicação React, mesmo tendo apenas um arquivo HTML. Ele explica que, ao contrário de uma aplicação React, onde todas as páginas são renderizadas em um único arquivo HTML, no navegador podemos acessar diferentes páginas através da URL. No entanto, ao digitar diferentes rotas no navegador, a página sempre exibe o mesmo conteúdo.

O instrutor mostra como acessar a propriedade pathname do objeto location do navegador, que contém a rota atual. Ele tem a ideia de criar uma variável pagina que armazena um JSX diferente dependendo da rota atual.

Para implementar essa ideia, o instrutor faz algumas alterações no arquivo App.js. Ele substitui o elemento <h1> pelo JSX armazenado na variável pagina. Se a rota for igual a /, ele retorna um JSX com a mensagem "Olá Mundo!", caso contrário, retorna um JSX com a mensagem "Sobre mim...".

O instrutor também menciona que é possível organizar melhor o projeto criando componentes separados para cada página. Ele cria uma pasta chamada paginas dentro da pasta src e dentro dela cria duas pastas: inicio e sobreMim. Em cada pasta, ele cria um arquivo index.js que exporta uma função que retorna um JSX com o conteúdo da página correspondente. Em seguida, ele importa esses componentes no arquivo App.js e os utiliza no lugar dos JSX anteriores.

O instrutor ressalta que, embora seja possível fazer essa troca de elementos dependendo da rota usando JavaScript puro, isso pode se tornar difícil de manter e ler à medida que a aplicação cresce. Por isso, ele menciona que a biblioteca React Router Dom é uma solução mais adequada para lidar com rotas e páginas em uma aplicação React. Ele sugere explorar essa biblioteca no próximo vídeo e implementá-la no projeto.

### Aula 01: Instalando o react-router-dom - Video 4

Nesta aula, o instrutor ensina como utilizar a biblioteca React Router Dom para mostrar diferentes conteúdos na tela de acordo com a URL utilizando JavaScript puro. Ele mostra como instalar a biblioteca no projeto, reinicia o servidor da aplicação e adiciona o componente BrowserRouter no retorno do componente app. O instrutor explica que essa configuração é feita apenas uma vez no projeto e que o BrowserRouter permite utilizar outros componentes do React Router Dom para criar um sistema de rotas mais legível.

### Aula 01: Criando o roteador - Video 5

Nesta aula, o instrutor ensina como utilizar a biblioteca React Router Dom para criar rotas em um aplicativo React. Ele importa o componente BrowserRouter para configurar as rotas e o componente Routes como o roteador principal. Utilizando o componente Route, ele define as rotas do aplicativo, especificando o caminho da rota e o componente JSX a ser renderizado. Ele cria rotas para a página inicial e a página "Sobre mim", e também explica como criar uma rota curinga para exibir uma mensagem de "Página não encontrada". Essas funcionalidades permitem criar um aplicativo com várias rotas e navegação entre páginas. O próximo passo será implementar o design do aplicativo, começando pelo menu de navegação.

### Aula 01: Para saber mais, documentação do react-router-dom

Você acabou de iniciar seus aprendizados no react-router-dom, uma poderosa biblioteca que irá nos ajudar de diversas formas a construir nossa aplicação.

Sempre que você finalizar uma aula, sinta-se livre para aprofundar seus conhecimentos na [documentação oficial do React Router 6](https://reactrouter.com/en/main). Ela também serve como excelente fonte de consulta. A versão 6 é a que utilizaremos durante esse curso, e assegure-se de que não está lendo as documentações de versões mais antigas, pois há diferenças no uso de determinados recursos.

### Aula 01: Nessa aula, você aprendeu como

Instalar o react-router-dom;

Utilizamos o comando npm install react-router-dom@6 que pegamos da própria documentação para instalar a versão 6.
Utilizar os componentes BrowserRouter, Routes e Route do react-router-dom;

Dentro do BrowserRouter, conseguimos utilizar os outros componentes da biblioteca. O Routes alterna entre diferentes rotas e o Route renderiza um determinado componente (com o atributo element) em um determinado caminho (com o atributo path).
Criar uma rota para um caminho que não existe.

Adicionando uma Route com o path='*', podemos renderizar uma página de 404, caso a URL acessada não corresponda a nenhuma das outras rotas.

## Aula 02: SPA com react-router-dom

### Aula 02: Links do react-router-dom - Video 1

Nesta aula, o instrutor começa a implementar o design do Figma em um projeto utilizando o React Router Dom. Ele explica que o menu de navegação deve estar presente em todas as páginas da aplicação e que não deve ser colocado dentro dos componentes "inicio" ou "sobre mim", que são utilizados nas rotas. Em vez disso, o menu de navegação deve ser colocado fora do componente "Routes", dentro do componente "BrowserRouter". O instrutor cria um novo componente chamado "menu" e adiciona o texto "Menu de navegação" a ele. Ele também cria um arquivo CSS para estilizar o componente. Em seguida, o instrutor importa o componente "menu" no arquivo "App.js" e o coloca dentro do componente "BrowserRouter". Ele explica que, ao clicar nos links do menu, a página do navegador é recarregada devido ao comportamento padrão da tag "a" do HTML. No entanto, ele deseja que a troca entre as páginas seja feita de forma dinâmica, sem recarregar a página. Para isso, ele substitui as tags "a" por um componente especial do React Router Dom chamado "Link". Ele ajusta os atributos das tags "Link" e explica que o componente "Link" permite a troca dinâmica de páginas sem recarregar a página inteira. O instrutor destaca que essa abordagem está de acordo com o conceito de Single Page Application (SPA) e que o React Router Dom auxilia na criação de SPAs. Ele menciona que no próximo vídeo irá mostrar como adicionar o sublinhado aos links ativos no design do Figma.

### Aula 02: Utilizando useLocation - Video 2

Nesta aula, o instrutor mostra como utilizar o hook useLocation do React Router Dom para obter informações sobre a rota atual em um projeto React. Ele utiliza essa informação para adicionar estilos condicionais aos links do menu, destacando o link correspondente à rota atual. Além disso, o instrutor cria um novo componente chamado MenuLink para evitar repetição de código na estilização dos links. Ele também renomeia o arquivo App.js para routes.js, seguindo uma convenção de nomenclatura mais descritiva. O próximo passo será implementar um banner de apresentação nas várias páginas da aplicação.

### Aula 02: Para saber mais: useLocation e hooks

O React tem seus próprios hooks nativos, como useState e useEffect, mas é comum que bibliotecas feitas para o React forneçam mais hooks para nós utilizarmos. Foi exatamente o nosso caso, onde utilizamos o hook useLocation do react-router-dom. Você pode revisar como funcionam os [hooks do React](https://www.alura.com.br/artigos/react-hooks).

