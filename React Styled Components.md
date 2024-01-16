# Curso Alura React: estilize componentes com Styled Components e manipule arquivos estáticos

## Aula 01 - Iniciando o Projeto

### Aula 01 - Apresentação - Video 1

Nesta aula, os instrutores Vinny Neves e João Vitor apresentam o curso de React e anunciam a construção de uma aplicação chamada SpaceApp. O objetivo do projeto é criar um catálogo de imagens do espaço, onde os usuários poderão transformar fotos em favoritas. Além disso, serão abordados temas como o uso de uma modal para zoom da imagem, diferentes tamanhos de exibição, manipulação de arquivos estáticos e o uso de ferramentas importantes para desenvolvedores front-end, como o Vite e o Styled Components. É recomendado ter conhecimentos básicos de React e HTML com CSS, especialmente o Flexbox, para acompanhar o curso.

### Aula 01 - Criando app - Video 2

Na nova versão da documentação do React e até com alguns comunicados oficiais que o time que desenvolve o React trouxe para a comunidade, para criarmos uma aplicação que funciona como uma SPA (Single Page Application), eles não recomendam mais o uso do Creative React App. Mas para novas aplicações, eles sugerem o uso do Vite ou do [Parcel](https://parceljs.org/). E, no nosso caso, vamos usar o [Vite](https://vitejs.dev/guide/).

> npm create vite@latest

Os componentes visuais aqui são muito ricos, com diversos estilos envolvidos. Para codar esses estilos, ou seja, trazer nosso CSS para dentro da aplicação, existem várias formas diferentes.  
O que vamos utilizar no decorrer desse curso e para criar o Space App é o [Styled Components](https://styled-components.com/docs/basics#installation).

> npm install styled-components@latest

Essa é uma das formas de estilizar componentes React. Essa técnica é chamada de "CSS in JS" e existem outras alternativas além do Styled Components, mas para nosso caso, vamos continuar com ele.

Nesta aula, os instrutores discutem sobre a criação de uma aplicação React a partir de um layout pronto no Figma. Eles utilizam o Vite como ferramenta de desenvolvimento, explicando sua versatilidade e compatibilidade com diferentes frameworks e bibliotecas. O processo de criação da aplicação é mostrado, incluindo a instalação das dependências e a execução do servidor de desenvolvimento. Além disso, é mencionado o uso do Styled Components para estilizar os componentes React. Ao final, é destacado que todas as bases necessárias para começar a construir os componentes do SpaceApp estão prontas.

### Aula 01 - Fundo com gradiente - Video 3

Nesta aula, Vinicios e João discutem sobre a criação de um componente de fundo gradiente para uma aplicação React utilizando Styled Components. Eles começam a transformar o design do Figma em componentes, começando de cima para baixo. Vinicios explica a importância de verificar se não houve erros após as alterações realizadas. Em seguida, Vinicios mostra como criar o componente de fundo gradiente utilizando o Styled Components e adiciona o estilo de gradiente de fundo copiado do Figma. Ele também menciona a extensão "vscode-styled-components" do VS Code. Por fim, Vinicios adiciona estilos de largura e altura mínima ao componente de fundo gradiente, explicando a importância de utilizar a unidade de medida "vh" para a altura e mencionando a biblioteca Normalize.css como uma solução para lidar com as diferenças de comportamento entre os navegadores.

### Aula 01 - Normalizando o CSS - Video 4

[Normalize.css](https://necolas.github.io/normalize.css/), este é o normalize mencionado no curso, mas nesta aula estaremos utilizando o normalize(reset css) modificado pelo professor.

Nesta aula, os instrutores discutem sobre como lidar com estilos globais dentro de aplicações React que utilizam Styled Components. Eles mostram como criar um componente de estilos globais utilizando a função createGlobalStyle do Styled Components. O objetivo dessa abordagem é garantir que os estilos globais sejam compartilhados entre todos os componentes styled da aplicação, evitando a necessidade de repetir o código de estilos em cada componente individualmente.

### Aula 01 - Para saber mais: CSS-in-JS e SCSS

CSS-in-JS e SCSS são duas maneiras diferentes de lidar com estilos em sites.
CSS-in-JS é quando escrevemos os estilos dentro do código JavaScript. Os estilos são tratados como objetos JavaScript e são aplicados ao HTML durante a execução do site. Com isso, podemos mudar os estilos de forma dinâmica com base no que está acontecendo no site. Também temos a vantagem de aplicar os estilos apenas aos componentes específicos em que queremos usá-los. Alguns exemplos populares de bibliotecas CSS-in-JS são styled-components e Emotion.

Já o SCSS é uma extensão do CSS que adiciona alguns recursos legais, como variáveis, mixins e aninhamento de seletores. Com o SCSS, podemos escrever estilos de forma mais eficiente e reutilizável. A sintaxe é bem parecida com o CSS comum, mas com esses recursos extras. Porém, é importante lembrar que o SCSS precisa ser transformado em CSS antes de ser usado pelo navegador. Isso é feito usando ferramentas como Node.js e Sass.

Resumindo, CSS-in-JS é quando escrevemos os estilos dentro do JavaScript, permitindo mais dinamismo e estilos específicos para cada componente. Já o SCSS é uma extensão do CSS que adiciona recursos avançados, mas precisa ser convertido em CSS antes de ser usado pelo navegador.

### Aula 01 - Nessa aula, você aprendeu como

Utilizar o Vite para iniciar um projeto React;
Instalar e implementar a biblioteca styled-components;
Criar um fundo com gradiente;
Normalizar o CSS com estilos globais.

## Aula 02 - Componentes Iniciais e Fontes

### Aula 02 - Cabeçalho - Video 1

Nesta aula, os instrutores começam explicando a criação do primeiro componente visual do projeto, o "header". Eles mostram como estilizar o header utilizando o Styled Components, definindo margens, display flex e justify-content. Em seguida, adicionam a imagem da logomarca e explicam a importância de colocá-la na pasta "public". Por fim, desafiam os espectadores a criar o campo de texto à direita do header.

### Aula 02 - Base da barra lateral - Video 2

Nesta aula, os instrutores discutem a construção da barra lateral de um projeto chamado SpaceApp. Eles explicam que a barra lateral será fixa e estática, e que por enquanto não haverá animações ou alterações nela. O objetivo é criar a estrutura básica da barra lateral, utilizando tags HTML como aside, nav, ul, li e a. Eles mostram como criar um novo componente chamado BarraLateral e como inseri-lo no arquivo principal App.jsx. Em seguida, eles falam sobre a estilização da barra lateral, removendo os estilos padrões e aplicando estilos personalizados utilizando a biblioteca styled-components. Eles explicam como remover o sublinhado dos links e definir a largura da lista. Por fim, eles mencionam a necessidade de evoluir o item de lista, transformando-o em um componente separado.

### Aula 02 - Estrutura do item de navegação - Video 3

Nesta aula, Vinicios e João discutem e desenvolvem o componente "ItemNavegacao" para a barra lateral do aplicativo Space App. Eles explicam a importância de diferenciar os estados ativo e inativo dos itens de navegação e mostram como programar e estilizar corretamente esse componente. Eles também mencionam a necessidade de adicionar os ícones ao projeto e explicam como fazer isso.

### Aula 02 - Importando as fontes do projeto #1 - Video 4

Nesta aula, os instrutores discutem sobre a aplicação de estilos aos itens de uma lista de navegação em um projeto de desenvolvimento utilizando o styled-components. Eles abordam propriedades como font-size, line-height, margin-bottom, cursor e color, além de mostrar como alinhar elementos verticalmente utilizando display: flex e align-items: center. Também é mencionada a importação das fontes do projeto, que devem estar presentes no diretório do projeto e serem importadas nos estilos globais.

### Aula 02 - Importando as fontes do projeto #2 - Video 5

Nesta aula, os instrutores ensinam como importar fontes em um projeto utilizando CSS, React e styled-components. Eles mostram como utilizar a propriedade @font-face no arquivo index.jsx dos estilos globais para importar as fontes desejadas. Também explicam como declarar a font-family no CSS, utilizando a sintaxe local() para referenciar a fonte localmente e a URL da fonte importada. Além disso, mencionam a importância de utilizar diferentes formas de passar a fonte para garantir um fallback adequado. Por fim, é proposto um desafio para importar uma imagem de banner e combiná-la com o styled-components.

### Aula 02 - Para saber mais: fontes e suas possíveis extensões

TrueType Font (TTF): É um formato de fonte amplamente utilizado em sistemas operacionais Windows e Mac. É compatível com a maioria dos programas e oferece suporte a recursos avançados, como kerning e hinting.

OpenType Font (OTF): É um formato de fonte desenvolvido pela Adobe e pela Microsoft, que combina os recursos do TrueType e do formato PostScript. O OpenType oferece suporte a recursos avançados, como ligaturas, glifos alternativos e fontes com múltiplos idiomas.

PostScript Font (PS): É um formato de fonte desenvolvido pela Adobe. As fontes PostScript são amplamente utilizadas em impressoras e gráficos profissionais. Elas são baseadas em vetores e fornecem alta qualidade de impressão.

Web Open Font Format (WOFF): É um formato de fonte especialmente projetado para uso na web. O WOFF comprime as fontes para um tamanho menor, o que resulta em tempos de carregamento mais rápidos para páginas da web. O WOFF2 é uma versão mais recente e eficiente do WOFF.

### Aula 02 - Nessa aula, você aprendeu como`:`

Criar e estilizar o componente cabeçalho;
Estruturar a barra lateral;
Criar um item de lista que recebe um texto e uma imagem;
Importar fontes e defini-las como padrão.

## Aula 03 - Criando a Galeria

### Aula 03 -  - Video 1
