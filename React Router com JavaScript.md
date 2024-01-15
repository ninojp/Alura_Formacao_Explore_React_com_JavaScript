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

### Aula 02: Para saber mais: SPA e recursos nativos do JS

Uma SPA (Single Page Application) é uma aplicação que acontece sempre na mesma página HTML, normalmente chamada de index.html. A “troca entre páginas” é feita puramente com o JS, ou por alguma ferramenta que abstrai o JS. No caso desse curso é a biblioteca react-router-dom, que no final das contas utiliza os próprios recursos do JS para realizar a navegação.

Alguns dos recursos nativos do JS que o react-router-dom utiliza por debaixo dos panos são o window.history e o window.location. O objetivo da biblioteca é melhorar a experiência de criação de uma SPA, abstraindo esses recursos nativos para métodos e componentes mais intuitivos e manuteníveis do que seria com JS puro.

### Aula 02: Para saber mais: componente NavLink

No vídeo anterior, utilizamos o hook useLocation para obter a rota atual e conseguir destacar o link ativo do menu. Porém, há uma forma alternativa de resolver esse mesmo problema, utilizando o componente [NavLink do react-router-dom!](https://reactrouter.com/en/main/components/nav-link) Leia sobre ele na documentação, pois deixei um desafio para você na próxima atividade! Vamos lá?

### Aula 02: Desenvolvendo Banner - Video 1

Nesta aula, o instrutor continua desenvolvendo o projeto "Olá Mundo!" em React. Ele explica que a próxima parte a ser desenvolvida é o banner que aparece no topo das páginas, contendo o título "Olá, mundo!", um texto de apresentação e uma foto do instrutor. O instrutor menciona que esse banner aparece em quase todas as páginas da aplicação, exceto na página 404. Para resolver isso, ele sugere criar um componente chamado "banner" e importá-lo nas páginas iniciais. O instrutor também menciona que o banner possui algumas imagens que serão necessárias, que já estão disponíveis na pasta "assets". Ele mostra como criar o componente de banner, importá-lo na página inicial e fazer o JSX do banner. Após salvar os arquivos e fazer algumas correções nos estilos CSS, o instrutor verifica se o banner está sendo exibido corretamente no navegador.

### Aula 02: Para saber mais: absolute imports

Você sempre pode consultar a configuração dos absolute imports na [documentação](https://create-react-app.dev/docs/importing-a-component/#absolute-imports).

### Aula 02: Nessa aula, você aprendeu como

Diferenciar o comportamento de sites tradicionais e de SPAs;

Sites tradicionais são compostos por várias páginas HTML, e uma requisição é realizada para o servidor do site sempre que queremos ir para uma nova página. Já as SPAs (Single Page Applications) são compostas por uma única página HTML, e seu conteúdo é alterado dinamicamente pelo JavaScript.
Utilizar o componente Link do react-router-dom;

Ele mantém o comportamento de uma SPA, impedindo que a página do navegador recarregue.
Utilizar o hook useLocation;

Com ele, podemos obter informações da rota que estamos atualmente.
Utilizar o componente NavLink do react-router-dom.

Com ele, temos acesso direto à informação do link estar ativo ou não.

## Aula 03: Rotas Aninhadas

### Aula 03: Desenvolvendo Inicio - Video 1

Nesta aula, o instrutor continua o desenvolvimento de um projeto chamado "Olá mundo!". Ele explica que já foi feita a parte do banner e agora ele quer finalizar a página de início. Após o banner, ele mostra que existem vários cards que representam os posts que a pessoa escreveu. Cada card possui uma imagem de capa do post e um título. O instrutor mostra como importar e utilizar arquivos de imagens e JSON no projeto, como criar componentes e como estilizar os elementos com CSS. Ele também demonstra como corrigir problemas de layout e como criar um componente de rodapé. Essas são habilidades importantes para o desenvolvimento de aplicações web com React.

### Aula 03: Para saber mais: pacote SVGR

A sintaxe import { ReactComponent as NomeDoComponente } from 'caminho_do_componente'; é possível devido ao pacote [SVGR](https://react-svgr.com/), que já vem por padrão em um projeto React. Esse pacote permite que utilizemos um SVG como um componente React, assim não precisamos utilizá-lo como uma tag img.

### Aula 03: Utilizando rotas aninhadas - Video 2

Nesta aula, o instrutor desenvolve o projeto "Olá, mundo!" e explica como reutilizar componentes para evitar repetição de código. Ele cria o componente "PaginaPadrao" que contém a estrutura comum a todas as páginas do projeto. Em seguida, utiliza o componente route do React Router Dom para criar rotas aninhadas, onde as rotas "início" e "sobre mim" se tornam rotas filhas da rota "página padrão". Isso evita a repetição de código. O instrutor também utiliza o componente outlet para renderizar o conteúdo das rotas dentro da página padrão. O próximo passo é desenvolver o conteúdo da rota "sobre mim" com base no design do Figma.

### Aula 03: Para saber mais, rotas index e caminhos relativos

Você viu que quando queremos reaproveitar partes da nossa aplicação em apenas algumas rotas em vez de todas, utilizamos o recurso de rotas aninhadas, que são rotas filhas de uma mesma rota pai. Você pode ver sobre isso na [documentação](https://reactrouter.com/en/main/start/overview#nested-routes).

Aproveite também para conferir a documentação sobre [rotas index](https://reactrouter.com/en/main/start/concepts#index-routes).

```JavaScript
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Activity />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="activity" element={<Activity />} />
      </Route>
    </Routes>
  );
}
```

Veja que há três rotas aninhadas de Layout. A primeira delas possui um atributo index em vez de um atributo path. Isso é o mesmo que dizer que o caminho desta rota é igual ao da rota pai, ou seja, nesse caso é a mesma coisa que um atributo path="/".

As outras duas rotas têm caminhos que iniciam sem a /. Isso quer dizer que essas rotas serão relativas ao caminho da rota pai, e são equivalentes a "/invoices" e "/activity", respectivamente.

### Aula 03: Desenvolvendo SobreMim - Video 3

Nesta aula, o instrutor continua desenvolvendo o projeto "Olá, mundo!" e aborda a criação da página "Sobre mim". Ele mostra que há um componente de banner que já foi utilizado na página inicial e explica que deseja reutilizar essa estrutura na página "Sobre mim". Para resolver esse problema, o instrutor decide criar um novo componente chamado "PaginaPadrao" na pasta "componentes". Esse componente terá a estrutura básica da página, incluindo o banner e o conteúdo da rota. Em seguida, ele utiliza o componente Outlet do React Router Dom para renderizar o conteúdo das rotas dentro do componente "PaginaPadrao". O instrutor também explica que as rotas alinhadas são uma forma interessante de reutilizar uma estrutura de página para diferentes rotas. O próximo passo é desenvolver o conteúdo da rota "Sobre mim" com base no design apresentado no Figma.

### Aula 03: Nessa aula, você aprendeu como

Identificar quando utilizar rotas aninhadas;

Colocamos as páginas Inicio e SobreMim como filhas de PaginaPadrao, para que apenas elas reaproveitassem a mesma estrutura. Não queríamos que o Banner aparecesse na página 404.
Utilizar o componente Outlet;

A rota que é pai de outras se responsabiliza por dizer onde elas serão renderizadas com o Outlet do react-router-dom.
Utilizar o atributo index do Route;

O index indica que o caminho da rota é igual ao da rota pai.
Diferenciar caminhos relativos e absolutos.

Caminhos absolutos iniciam com /, enquanto caminhos relativos iniciam sem a /, partindo do caminho da rota pai.

## Aula 04: Rotas Dinâmicas

### Aula 04: Utilizando useParams - Video 1

Nesta aula, o instrutor continua desenvolvendo o projeto "Olá mundo!" utilizando o React Router Dom. Ele renomeia um componente chamado "post" para "PostCard" para evitar conflitos de nomes. Em seguida, cria um novo componente chamado "post" para a rota da aplicação. Ele adiciona uma nova rota aninhada dentro da rota pai "PaginaPadrao" no arquivo "routes.js". O instrutor mostra como utilizar parâmetros de rota no React Router Dom, alterando o path da rota para "posts/:id". Ele utiliza o hook "useParams" para capturar o valor do parâmetro de rota no componente "post". Também mostra como transformar os postcards em links clicáveis, utilizando o componente "Link" do React Router Dom. Por fim, imprime o valor do ID na tela para verificar se está funcionando corretamente. Agora é possível utilizar as informações da URL para criar a página de post de acordo com o ID passado.

### Aula 04: Dinamizando os dados do Post - Video 2

Nesta aula, o instrutor ensina como utilizar os parâmetros da URL para buscar e exibir o post adequado em uma página de posts. Ele utiliza o método find do JavaScript para buscar o post com o ID correspondente ao parâmetro da URL, utilizando a igualdade restrita (===) para comparar o ID do post com o parâmetro da URL. O instrutor também mostra como montar o caminho da foto de capa do post utilizando uma template string e o ID do post. Por fim, ele destaca a vantagem de ter criado o componente PostModelo anteriormente, pois agora ele pode ser reutilizado para exibir o conteúdo dos posts de forma dinâmica.

### Aula 04: Para saber mais, linguagem Markdown

O markdown é uma linguagem de marcação, assim como o HTML. Inclusive, no projeto React que criamos, já vem um arquivo chamado README.md na raiz do projeto. A extensão .md indica que é um arquivo escrito em markdown.

Você pode ler mais sobre essa linguagem no artigo [Markdown: como trabalhar com essa linguagem de markup?](https://www.alura.com.br/artigos/como-trabalhar-com-markdown)

No Olá Mundo, guardamos os textos markdown no JSON, mas essa não é a melhor forma de trabalhar com o markdown, pois o JSON possui limitações, como não permitir quebra de linha nas strings (foi utilizado \n em vez de quebra de linha). Porém, os cenários ideais são um pouco mais avançados, envolvendo consumo de serviços externos. Então, apesar das limitações do JSON, ele é mais simples de utilizar e supre as necessidades do nosso projeto.

Para melhor experiência de escrita, você pode escrever seus posts em markdown e depois passar para a string do JSON, mas se atente para substituir as quebras de linha por \n (e duas quebras de linha \n\n para um novo parágrafo), assim como já está sendo feito no posts.json.

### Aula 04: Instalando React MarkDown - Video 3

Nesta aula, o instrutor discute sobre a impressão de um texto em um arquivo a partir de um componente React. Ele menciona o uso da linguagem de marcação Markdown e introduz a biblioteca React Markdown, que permite transformar o texto escrito em Markdown em HTML dinâmico. O instrutor mostra como instalar e utilizar a biblioteca no código, além de explicar como estilizar o texto utilizando CSS. Ele destaca que é necessário criar uma div com uma classe específica ao redor do componente `<ReactMarkdown>` e mostra um código CSS que estiliza os elementos filhos dessa div. Por fim, o instrutor verifica se os estilos estão sendo aplicados corretamente no navegador.

### Aula 04: Desenvolvendo NotFound - Video 4

Nesta aula, o instrutor aborda o desenvolvimento de uma página de erro 404 utilizando o React Router. Ele explica como lidar com uma situação em que um ID inválido é inserido na URL de uma página de postagem, mostrando como exibir uma mensagem de "Post não encontrado" quando isso ocorre. Em seguida, o instrutor desenvolve o componente "NaoEncontrada", adicionando estilos CSS e elementos como título, parágrafos e um botão de voltar. Ele também importa uma imagem de um cachorro para utilizar no componente. Por fim, o instrutor mostra como importar o componente no arquivo de rotas e substituir a div existente pela importação do componente "NaoEncontrada".

### Aula 04: Nessa aula, você aprendeu como

Identificar quando utilizar rotas dinâmicas;

Rotas dinâmicas são úteis quando queremos ter uma mesma estrutura de página e mudar seu conteúdo de acordo com alguma informação passada na URL. No nosso caso, passamos o id de um post pela URL, buscamos o post de acordo com o id e mostramos suas informações na tela.
Utilizar os seletores de rotas dinâmicas para criar uma rota dinâmica;

Utilizamos a sintaxe /caminho/:nomedoparametro no atributo path de uma Route.
Utilizar o hook useParams.

Com ele, obtemos os parâmetros passados para uma rota dinâmica.

## Aula 05: Finalizando o Projeto

### Aula 05: Utilizando useNavigate - Video 1

Nesta aula, o instrutor finaliza a estilização de um botão de voltar na página 404 de um projeto em React. Ele cria um componente para o botão, mostra como importá-lo em outro componente chamado "PostCard" e como dinamizar o texto do botão utilizando a prop "children". O instrutor também explica como adicionar estilos CSS específicos para o botão no novo componente criado. Além disso, ele demonstra como reutilizar o mesmo componente de botão na página 404, alterando o texto e adicionando estilos específicos para o botão "Voltar". Ele utiliza o hook "useNavigate" do React Router Dom para implementar a funcionalidade de voltar para a página anterior, passando tanto uma string representando a rota quanto um número representando a quantidade de páginas a voltar como parâmetro para a função "navegar". O instrutor menciona que no próximo vídeo abordará como tratar a situação de um post não encontrado utilizando o componente de página não encontrada.

### Aula 05: Para saber mais navegação no react-router-dom

Você aprendeu que temos um bom controle da navegação do react-router-dom utilizando o hook useNavigate. Você sempre pode consultar como realizar navegação na [documentação](https://reactrouter.com/en/main/hooks/use-navigate).

### Aula 05: Tratando Post não encontrado - Video 2

Nesta aula, o instrutor discute sobre a reutilização de uma página de erro 404 em um projeto React. Ele mostra como mover a rota de post para fora da rota de página padrão, usando o componente "Routes" do React Router Dom para aninhar rotas. Dessa forma, o componente "PaginaPadrao" envolve o componente "PostModelo" e o banner é exibido corretamente. Essa é uma solução interessante e válida para o problema.

### Aula 05: Para saber mais, Routes descendente

No vídeo anterior, utilizamos um componente Routes dentro do componente Post, que já é uma rota dentro do Routes que é utilizado em routes.js. Este é o recurso de Routes descendente do react-router-dom, que é quando um componente Routes é utilizado dentro de outro.

Aliás, se você abrir agora alguns dos posts do projeto no navegador (em http://localhost:3000/posts/1, por exemplo) e abrir o console, aparecerá um alerta como esse:

Traduzindo o alerta, temos algo assim:

> Você renderizou um `<Routes>` (ou chamou useRoutes()) descendente em "/posts/1", mas o caminho da rota pai não possui "*" ao final. Isso significa que se você criar rotas mais profundas, a rota pai não conseguirá renderizá-las.

Por favor, altere o pai `<Route path="posts/:id">` para `<Route path="posts/:id/*">`.

No nosso caso, esse alerta passou despercebido, pois estamos utilizando apenas uma rota dentro do Routes descendente que está em Post. Mas se ele tivesse uma rota com o caminho "/posts/:id/detalhes" (ou simplesmente "detalhes", relativo ao caminho da rota pai), essa rota não seria renderizada.

Então, para evitar qualquer bug no futuro e seguir as boas práticas, vamos seguir o conselho do alerta, colocando um * ao final da rota do Post:

`<Route path="posts/:id/*" element={<Post />} />`
Dessa forma, o alerta do console irá sumir!

### Aula 05: Para saber mais, solução alternativa com children

No vídeo anterior, utilizamos um Routes descendente, para podermos utilizar um Route para PaginaPadrao e reutilizar seu Outlet. Porém, há outra abordagem para resolver esse problema, vamos conhecê-la?

Para aplicá-la, você pode remover os Routes e Route que colocamos no componente de Post, deixando seu JSX do jeito que estava antes. Agora, vamos envolver diretamente o PostModelo por PaginaPadrao, deixando o JSX assim:

```JSX
<PaginaPadrao>
    <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
    >
        <div className="post-markdown-container">
            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>
        </div>
    </PostModelo>
</PaginaPadrao>
```

Porém, para que consigamos renderizar o JSX que passamos para PaginaPadrao, devemos utilizar o children do React. Assim, vamos para o index.js de PaginaPadrao e receber a prop children. E, logo abaixo de `<Outlet />`, escrevemos {children}. O código fica assim:

```JSX
export default function PaginaPadrao({ children }) {
    return (
        <main>
            <Banner />

            <Outlet />
            {children}
        </main>
    )
}
```

Ou seja, deixamos o componente PaginaPadrao mais reutilizável, podendo ser utilizado como rota pai ou diretamente como um componente pai. De uma forma ou de outra, PaginaPadrao irá renderizar o conteúdo ou em `<Outlet />` ou em {children}.

Essa também é uma solução super válida e você pode escolher a que fizer mais sentido para você!

### Aula 05: Desafio, implementando posts recomendados

Implemente a parte que recomenda outros posts! No figma, ela aparece logo ao final de um post, assim:
![Alt text](image.png)

Você deve mostrar 4 cards de Posts. Reaproveite o componente PostCard! Além disso, lembre-se que você não deve mostrar o Post que está na página atual.

[Opinião do instrutor](https://cursos.alura.com.br/course/React-desenvolvendo-react-router-javaScript/task/112291)

### Aula 05: Para saber mais, links do desafio

Consulte a [documentação do Scroll To Top](https://v5.reactrouter.com/web/guides/scroll-restoration/scroll-to-top). Essa documentação é da versão 5 do react-router-dom, mas a solução continua válida para a versão 6 que estamos utilizando.

Para se aprofundar nos métodos JavaScript que usamos no Desafio, seguem os links da documentação da MDN:

- [filter](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [sort](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [slice](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

### Aula 05: Para saber mais; subindo o projeto no GitHub

No próximo vídeo, iremos publicar o Olá Mundo na Vercel. Para que você consiga fazer isso junto comigo, é necessário que você tenha uma conta no GitHub e um repositório com a versão final do Alura Cook. Caso precise de ajuda, [consulte esse Alura+](https://cursos.alura.com.br/extra/alura-mais/compartilhar-projeto-com-git-e-github-c42). Se quiser se aprofundar em Git e Github, confira o [curso Git e GitHub: repositório, commit e versões](https://cursos.alura.com.br/course/git-github-repositorio-commit-versoes).

### Aula 05: Publicando o projeto - Video 3

Nesta aula, o instrutor ensina como publicar um projeto chamado "Olá mundo!" utilizando o site da Vercel. Ele explica que é necessário ter uma conta no GitHub com o repositório da versão final do projeto. O instrutor mostra como fazer login na Vercel e criar um novo projeto, selecionando o repositório desejado. Em seguida, ele inicia o processo de deploy e explica que pode demorar um pouco. Após o término do deploy, ele mostra o link gerado para o projeto e encoraja o espectador a verificar se tudo está funcionando corretamente.

### Aula 05: Nessa aula, você aprendeu como

Componentizar um botão;

Criamos o componente BotaoPrincipal, que recebe props que definem seus estilos.
Utilizar o hook useNavigate;

Podemos utilizá-lo para fazer navegações mais complexas, como voltar para a página anterior no navegador.
Tratar o caso de post não encontrado;

Utilizamos o componente NaoEncontrada para quando um post não era encontrado. Vimos duas possíveis soluções para reutilizar o componente PaginaPadrao apenas quando um post era encontrado. Uma delas é aproveitando o Outlet e adicionando os componentes Routes e Route dentro do componente Post; outra é adicionando {children} em PaginaPadrao e permitindo ele possa ser utilizado como um componente pai direto.
Publicar o projeto!

Você aprendeu a publicar seu projeto na Vercel para que o mundo possa vê-lo :)

### Aula 05: Conclusão - Video 4

Nesta aula de React Router DOM, aprendemos a finalizar o projeto e concluímos o curso. Durante o curso, exploramos diversas funcionalidades e recursos para construir uma Single Page Application (SPA) utilizando o React Router DOM. Aprendemos a criar rotas e páginas diferentes, utilizar rotas aninhadas e lidar com a página não encontrada. Também vimos como utilizar rotas dinâmicas, passando parâmetros na URL. Além disso, utilizamos os hooks useParams e useLocation para obter informações sobre a rota atual e estilizar a aplicação de acordo. Um desafio proposto foi a implementação de um componente de scroll to top. No final, o instrutor incentivou os alunos a compartilharem seus projetos e aprendizados nas redes sociais, além de fornecer feedback sobre o curso. A participação na comunidade através do Discord também foi encorajada. No geral, o curso foi uma ótima oportunidade de aprendizado e aprimoramento das habilidades em React Router DOM.
