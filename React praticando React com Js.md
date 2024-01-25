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

## Aula 03 - Definindo Contextos

### Aula 03 - Contextos - Video 1

Nesta aula, o instrutor discute a criação de um contexto no React para compartilhar dados entre componentes. Ele mostra como criar o contexto utilizando a função createContext() e o hook useState(). O contexto é aplicado nas páginas adicionando o FavoritosProvider entre as tags `<Container>` e `<Routes>` no arquivo routes.js. O instrutor menciona que é necessário adicionar as informações desejadas ao FavoritosProvider para utilizar o contexto. A próxima etapa será implementar a função de favoritar.

### Aula 03 - Hook personalizado - Video 2

Nesta aula, o instrutor explica como criar um contexto de Favoritos para compartilhar dados entre a página inicial e a página de favoritos. Ele mostra a implementação de um hook personalizado que utiliza o useContext() para acessar o contexto de Favoritos e retornar os valores do estado favorito e da função setFavorito. Em seguida, é explicada a função adicionarFavorito() que verifica se um favorito já existe na lista e adiciona ou remove o favorito de acordo com essa verificação. O instrutor também menciona a utilização da extensão "React Context DevTool" para visualizar o contexto criado. No próximo vídeo, será implementada a função de favoritar nos cards.

### Aula 03 - Para saber mais: contextualizando contexts

Segundo a [documentação do React](https://legacy.reactjs.org/docs/context.html), o Context (em português, contexto) fornece uma maneira de passar dados pela árvore de componentes sem ter que passar props manualmente em todos os níveis.

Geralmente, quando estamos desenvolvendo um projeto em React, os dados são passados de por meio de props, de componente pai para filho.

Resumidamente, o contexto fornece uma maneira de compartilhar valores como esses entre componentes sem ter que passar explicitamente um prop por todos os níveis da árvore.

Você pode visualizar a aplicação de Contexts em outro projeto React no Alura da Juliana Negreiros [Conhecendo o Context API do React](https://cursos.alura.com.br/extra/alura-mais/conhecendo-o-context-api-do-react-c46) e no curso [React: gerenciamento de estados globais com ContextAPI](https://cursos.alura.com.br/course/react-context-estados-globais-contextapi) do Luiz Fernando.

### Aula 03 - Favoritar - Video 3

Nesta aula, o instrutor explica como implementar a função de favoritar e desfavoritar em um componente chamado "Card". Para isso, é necessário importar o hook "useFavoritoContext" de um contexto externo chamado "Favoritos". Em seguida, são criadas constantes para armazenar a lista de favoritos e a função responsável por adicionar um item aos favoritos. A função de favoritar é adicionada ao ícone de favoritar, e ao clicar nele, a função é ativada passando os parâmetros necessários. Para indicar visualmente se um card está favoritado ou não, é utilizado um ícone que muda de acordo com o status do card. No próximo vídeo, será ensinado como listar dinamicamente os itens presentes na lista de favoritos.

### Aula 03 - Lista de favoritos - Video 4

Nesta aula, o instrutor explica como listar os filmes favoritos na página inicial de um projeto utilizando o React. Ele mostra como adicionar a variável favorito que utiliza a função useFavoritoContext() do arquivo de contexto. Em seguida, é feito o mapeamento dessa lista de favoritos e a renderização de cada item utilizando o componente Card. Além disso, o instrutor menciona a funcionalidade de reprodução de vídeos, que será abordada posteriormente.

### Aula 03 - Para saber mais: Hooks

O que é um Hook?
Um Hook (em português, gancho) é uma função especial que te permite utilizar recursos do React. Você pode detectar um hook pelo início de seu nome, em que aparece o termo use.

Por exemplo, o useState é um Hook que te permite adicionar um estado a um componente de função. Esse hook é inicializado com duas variáveis: a primeira, que é o valor atual do estado, e a segunda que atualiza o valor.

Esta sintaxe com colchetes é chamada de “atribuição via desestruturação”. Com isso, estamos criando duas variáveis ao mesmo tempo, a favoritos e a setFavoritos., onde favoritos é definido para o primeiro valor retornado por useState, e setFavoritos é o segundo.

Você pode aprofundar ainda mais seu conhecimento sobre o hook useState com o instrutor Vinny Neves no [Alura Hooks do React: useState](https://cursos.alura.com.br/extra/alura-mais/hooks-do-react-usestate-c1530).

### Aula 03 - Nessa aula, você aprendeu como`:`

Criar contextos através da ContextAPI com o createContext;
Permitir o uso de contextos nos elementos com o Provider e useContext;
Construir hooks personalizados;
Procurar valores dentro de um array com o método some;
Remover itens de um array com o método splice e auxílio do indexOf;
Instalar e usar a extensão React Context DevTool.

## Aula 04 - Evoluindo as Rotas

### Aula 04 - Rota dinâmica - Vídeo 1

Nesta aula, o instrutor ensina como criar a página do player em um projeto React. Ele explica como estruturar o arquivo index.js da página, importando os componentes Banner e Titulo. Além disso, ele mostra como criar uma rota para a página do player no arquivo routes.js e utiliza o hook useParams para obter o parâmetro da URL e filtrar a lista de vídeos. O instrutor também ensina como incorporar um vídeo do YouTube na página do player, tornando-o dinâmico de acordo com o vídeo selecionado. Ele faz ajustes no estilo do vídeo e utiliza o componente Link do React Router para criar links dinâmicos nos cards da página inicial. Por fim, ele menciona a criação de mensagens de erro para casos específicos.

### Aula 04 - Para saber mais: useParams

O hook useParams é um hook da biblioteca react-router-dom, e segundo sua [documentação](https://reactrouter.com/en/main/hooks/use-params), ele retorna um objeto de valores/chaves que foram passados como parâmetros dinâmicos da URL atual. Para usá-lo, inicialmente, precisamos construir uma rota:

`<Route path="videos/:id/" element={<Player />} />`

No exemplo acima, o parâmetro enviado é o id, que é uma rota reservada por causa do : na frente. Com o parâmetro dentro da URL, o roteador React não corresponderá literalmente à rota acima. Agora, corresponderá dinamicamente a páginas com o padrão “videos/:id”, sendo o id o valor que você quiser inserir, como: “videos/1”.

Para imprimir o conteúdo da página basta realizar a validação de captar esse valor de id e comparar com o que deve ser mostrado. No projeto CineTag recolhemos o id da URL através do hook useParams e pedimos para imprimir as informações referentes ao vídeo que possui aquele id.

### Aula 04 - Página de erro - Vídeo 2

Nesta aula, o instrutor abordou a criação de uma página de aviso para lidar com URLs inexistentes em um projeto React. Foi mostrado como criar uma nova pasta chamada "NaoEncontrada" dentro da pasta "pages" e dentro dela, criar dois arquivos: "index.js" e "NaoEncontrada.module.css". No arquivo "index.js", foi criada uma função chamada "NaoEncontrada" que retorna um JSX contendo uma section com um título e um parágrafo informando que o conteúdo não foi encontrado. Em seguida, foi mostrado como adicionar uma rota para essa página no arquivo "routes.js" usando o elemento Route com o path "*", que é um seletor universal. Foi feito um teste para verificar se a página de aviso é exibida corretamente ao acessar uma URL inexistente. Também foi mostrado como adicionar uma condicional no arquivo "index.js" do componente Player para exibir a página de aviso quando um vídeo inexistente for acessado. No próximo vídeo, será feita uma limpeza no arquivo "routes.js" para que ele atue apenas com as rotas.

### Aula 04 - Rotas aninhadas - Vídeo 3

Nesta aula, aprendemos a evoluir as rotas em um projeto React. O instrutor ensinou como criar uma página base que contém elementos comuns presentes em várias rotas do projeto. Para isso, criamos uma nova pasta chamada "PaginaBase" dentro da pasta "pages" e dentro dessa pasta, criamos o arquivo index.js que contém a função PaginaBase(). Essa função retorna a estrutura da página base, que é composta por um elemento `<main>`. Dentro do `<main>`, adicionamos os componentes `<Cabecalho />`, `<FavoritosProvider>`, `<Container>`, `<Outlet />` e `<Rodape />`. Em seguida, configuramos as rotas no arquivo routes.js, utilizando o componente `<BrowserRouter>` para envolver as rotas. Definimos a rota pai `<Route path="/" element={<PaginaBase />}>` que contém as rotas filhas que serão renderizadas dentro do `<Outlet />`. Por fim, fizemos uma limpeza no projeto, removendo importações e trechos de código desnecessários, e verificamos que as rotas estão funcionando corretamente no navegador.

### Aula 04 - Para saber mais: Nested Routes

[Nested Routes](https://reactrouter.com/en/v6.3.0/getting-started/overview#nested-routes) (em português, rotas aninhadas) é um recurso do React Router que auxilia na criação do projeto, evitando códigos de layout duplicados e complicados. Com ele, você acopla componentes que se repetem entre as páginas em uma rota, levando em conta alguma parte da URL que é repetida entre todas elas.

### Aula 04 - Nessa aula, você aprendeu como`:`

Criar rotas dinâmicas;
Enviar parâmetros via URL;
Receber parâmetros com o hook useParams;
Planejar rotas para URLs não existentes;
Construir rotas aninhadas.

## Aula 05 - Externalizando Dados

### Aula 05 - My Json Server - Vídeo 1

