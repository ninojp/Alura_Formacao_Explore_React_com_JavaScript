# Curso Alura React: praticando React com Js

## Aula 01 - Primeiros Passos

### Aula 01 - Apresentação - Video 1

Nesta aula de introdução ao curso de React: praticando com JS, a instrutora Moni Hillman dá as boas-vindas aos estudantes e apresenta o projeto que será desenvolvido, chamado Cine Tag. O Cine Tag é uma plataforma de compartilhamento de filmes que permite assistir e favoritar itens. Durante o curso, serão abordados conceitos como componentes, estilização com CSS Module, criação de rotas com o React-router-dom, uso de Hooks como useState() e useEffect(), criação de contextos, uso de rotas dinâmicas e aninhadas, consumo de API e deploy do projeto. É importante ter uma base sólida em React como pré-requisito para aproveitar ao máximo o curso.

### Aula 01 - Criando o projeto - Video 2

Nesta aula, o instrutor ensina como criar o projeto Cine Tag, uma aplicação React que contém uma lista de filmes. Ele explica a importância de ter uma pasta exclusiva para guardar os projetos e mostra como criar a estrutura do projeto. Em seguida, ele utiliza o comando npx create-react-app para criar o projeto React e mostra como iniciar um servidor local. O instrutor também ensina como excluir arquivos padrões não utilizados e faz algumas alterações nos arquivos index.html e index.js para exibir a mensagem "Olá mundo!" na tela. Ele finaliza explicando que essa "limpeza" nos arquivos iniciais é feita para simplificar o projeto, mas que os arquivos deletados serão utilizados posteriormente.

### Aula 01 - Preparando arquivos - Video 3

Nesta aula, o instrutor abordou os seguintes tópicos:

Uso do comando create-react-app para criar os arquivos necessários para iniciar um projeto em React.
Importância das imagens no projeto e como baixá-las no Figma.
Processo de exportar e organizar as imagens em uma pasta chamada "imagens" dentro da pasta "public".
Diferença entre adicionar imagens dinâmicas e estáticas no projeto.
Criação do arquivo jsconfig.json para facilitar a importação de arquivos em diferentes partes do projeto.
Criação de uma API "fake" contendo os links das imagens dos filmes.
Importação da fonte Montserrat do Google Fonts.
Criação de variáveis CSS para as cores do projeto.
Com todos os preparativos feitos, agora é possível começar a trabalhar no código do projeto.

### Aula 01 - Navegando entre páginas - Video 4

Nesta aula, o instrutor ensina como criar a estrutura inicial de um projeto React e trabalhar na página inicial. Ele mostra como criar uma pasta "pages" dentro da pasta "src" e dentro dela criar uma pasta "Inicio" com os arquivos "index.js" e "inicio.module.css". No arquivo "index.js", é criada a função "Inicio()" que retorna um elemento `<h1>` com o texto "Olá mundo! Estou numa página nova!". O instrutor explica como utilizar o react-router-dom para definir as rotas do projeto, utilizando os componentes `<BrowserRouter>`, `<Routes>` e `<Route>`. Por fim, ele mostra como importar o componente AppRoutes no arquivo principal do projeto e substituir o elemento `<h1>` pelo componente `<AppRoutes />`.

### Aula 01 - Componentização - Video 5

Nesta aula, aprendemos sobre componentização no React. O instrutor mostrou como criar o HTML e os estilos do cabeçalho da página inicial de um projeto utilizando React. Foi criada uma pasta "components" dentro da pasta "src" e dentro dessa pasta, uma pasta chamada "Cabecalho". Foram criados dois arquivos: "index.js" e "Cabecalho.module.css". No arquivo "index.js", foi criada a função "Cabecalho" que retorna o HTML do cabeçalho da página. Foi utilizado o elemento `<Link>` do pacote "react-router-dom" para criar um link para a página inicial. Também foram adicionados elementos `<CabecalhoLink>` para criar os links da navegação. No final, foram adicionados estilos CSS para o cabeçalho e os links da navegação.

### Aula 01 - Para saber mais: CSS com módulos?

Durante a criação dos arquivos do projeto você se deparou com arquivos com nome como CabecalhoLink.module.css e Cabecalho.module.css. Mas o que quer dizer esse module?

Um módulo CSS é um arquivo CSS no qual todos os nomes de classe têm escopo local por padrão. Dessa maneira, você pode reutilizar nomes de classes em arquivos diferentes sem acontecer conflitos. Por exemplo: eu posso usar a classe container em vários componentes e pra cada container ter um estilo diferente.

O React por padrão suporta esse tipo de CSS sem precisar instalar, utilizando o padrão para nome de arquivos [nome].module.css.

### Aula 01 - Resolução do desafio - Video 6

Nesta aula, o instrutor discute sobre a construção e estilização do rodapé de um projeto React. O desafio é criar um componente chamado "Rodape" com um arquivo index.js e um arquivo Rodape.module.css. O componente consiste em um elemento `<footer>` com a classe styles.rodape e um elemento `<h2>` com o texto "Desenvolvido por Alura.". O instrutor mostra como importar o componente no arquivo index.js da página "Inicio" e explica a necessidade de adicionar um elemento <></> como elemento pai das tags `<Cabecalho />` e `<Rodape />`. Ele também mostra como estilizar o rodapé no arquivo Rodape.module.css.

### Aula 01 - Nessa aula, você aprendeu como`:`

Analisar Figma;
Criar um projeto React;
Identificar arquivos que podem ser removidos da base do projeto React;
Configurar diretório utilizado no curso com o jsconfig.json;
Criar componentes (Cabecalho e CabecalhoLink);
Estilizar componentes com módulo CSS;
Praticar a criação de componentes (Rodapé).

## Aula 02 - Criando Componentes

### Aula 02 - Banner - Video 1

Nesta aula, o instrutor ensina como criar um banner em um projeto utilizando o VSCode. Ele explica passo a passo como criar a estrutura do banner, importar estilos CSS, criar a função Banner e adicionar uma div com a classe capa. Além disso, ele mostra como definir a imagem de fundo dinamicamente e como passar a propriedade imagem para o Banner. O instrutor também explica como definir o tamanho do banner no arquivo Banner.module.css. No final, ele menciona que a próxima etapa será trabalhar com o título abaixo do banner.

### Aula 02 - Título - Video 2

Nesta aula, o instrutor ensina como criar um componente de título para ser utilizado em todas as páginas do projeto. O componente de título é criado como um arquivo separado, com um arquivo CSS para estilização e um arquivo JavaScript para a lógica do componente. O componente recebe um parâmetro chamado "children", que permite que o conteúdo do título seja passado como um elemento filho. Isso torna o componente mais flexível, pois permite que o título seja um elemento HTML, como um h1, h2, etc. O instrutor mostra um exemplo de como utilizar o componente de título na página inicial do projeto, importando-o e passando o título desejado como um elemento filho. Em seguida, ele mostra como estilizar o componente de título, acessando o arquivo CSS correspondente e definindo as propriedades de estilo desejadas. Ao final, o instrutor mostra o resultado no navegador, onde o título é exibido com o estilo definido. A próxima etapa do projeto será trabalhar com os cards.

### Aula 02 - Cards - Video 3

Nesta aula, o professor ensinou como criar componentes de "cards" utilizando o React. Ele mostrou como criar a estrutura do componente, importar imagens e estilizar os elementos. O componente "Card" recebe as propriedades "id", "titulo" e "capa" e exibe uma imagem, um título e um ícone de coração. O professor também explicou como utilizar o componente no arquivo principal e aplicar estilos adicionais. No próximo trecho do vídeo, será ensinado como exibir os cards dinamicamente com as imagens corretas dos filmes.

### Aula 02 - Para saber mais: propriedades dos componentes

O que são props?
Props são propriedades de uma classe ou função JavaScript que podem ser passados aos seus componentes filhos. É possível enviar como “prop” diferentes tipos de dados e até mesmo outros componentes. É fundamental na criação de componentes por ser o meio de comunicação entre eles.

Mas perceba que enviamos propriedades de duas maneiras diferentes. A segunda maneira, onde inserimos o texto do componente título, é chamada de props.children.

O que é props.children?
A props.children (propriedade filha) é uma propriedade especial do React que contém qualquer elemento filho definido no componente. Ela é usada para exibir o que você inclui entre as tags de abertura e fechamento ao chamar um componente.

A [documentação do React](https://legacy.reactjs.org/docs/composition-vs-inheritance.html) diz que você pode usar props.children em componentes que são genéricos, que não tem filhos pré-determinados, flexibilizando o uso do componente. Podemos ver no nosso `<Titulo>` que dependendo de onde ele for usado você pode definir como `<h1>`, `<h2>`, `<h3>`, entre outros.

### Aula 02 - Lista dinâmica - Video 4

Nesta aula, o instrutor explica como adicionar os filmes disponíveis no projeto à página do Cine Tag. Primeiro, é feita a conexão entre o arquivo e o db.json. Em seguida, é feita a renderização dos cartões na página usando o método map() para percorrer a lista de vídeos e criar um Card para cada um deles. É necessário adicionar uma key para cada elemento renderizado dentro do map(). Para posicionar os cartões corretamente na página, é adicionada uma classe .container no arquivo de estilos Inicio.module.css, que define o display como flex e o justify-content como space-around. Assim, os cartões são exibidos lado a lado na página, de acordo com o que está definido no arquivo JSON.

### Aula 02 - Nova rota - Video 5

Nesta aula, o instrutor ensina como ajustar a largura dos cards de uma página de "Favoritos" de acordo com o projeto do Figma. Ele mostra como alterar o valor da propriedade "width" no arquivo "Card.module.css" para que os cards tenham a largura correta. Em seguida, ele explica como criar a página de "Favoritos" dentro da pasta "src > pages", criando um novo arquivo "index.js" e um "Favoritos.module.css". O instrutor mostra o código necessário para criar a estrutura básica da página, importando os estilos e exportando o componente "Favoritos". Em seguida, ele adiciona uma nova rota para acessar essa página no arquivo "routes.js", utilizando a tag "Route" do React Router. O instrutor também explica como remover o cabeçalho e o rodapé da página inicial e adicioná-los no arquivo "routes.js" para que sejam exibidos em todas as páginas. Além disso, ele mostra como criar um componente "Container" para centralizar e adicionar espaçamento aos elementos das páginas. Por fim, o instrutor desafia os espectadores a aplicarem os conhecimentos ensinados até o momento, como adicionar o banner, o título e criar a seção de cards na página de "Favoritos".

### Aula 02 - Resolução do desafio - Video 6

Nesta aula, o instrutor mostra como criar a página de "Favoritos" em um projeto utilizando o React. São inseridos os componentes Banner, Titulo e Card no arquivo index.js. O componente Banner recebe um atributo imagem com o valor 'favoritos'. O componente Titulo é utilizado para inserir um título principal na página. É criada uma section com a classe styles.container para conter os elementos da página. Dentro dessa section, é utilizado o componente Card para exibir um card com dados fictícios. O código é salvo e o servidor local é aberto para visualizar os resultados. O instrutor destaca a facilidade de criar páginas utilizando componentes no React, evitando repetição de código e facilitando a manutenção.

### Aula 02 - Nessa aula, você aprendeu como`:`

Criar novos componentes;
Construir novas rotas;
Compartilhar informações entre componentes com props e children;
Importar dados de um arquivo json;
Usar o método .map para listar componentes.

## Aula 03 - 

### Aula 03 -  - Video 1
