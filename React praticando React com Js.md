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

## Aula 02 - 

### Aula 02 -  - Video 1
