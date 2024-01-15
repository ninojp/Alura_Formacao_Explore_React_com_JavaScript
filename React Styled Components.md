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
