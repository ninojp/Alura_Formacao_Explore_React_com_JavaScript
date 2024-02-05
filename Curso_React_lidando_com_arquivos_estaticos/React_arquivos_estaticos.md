# Curso Alura React: lidando com arquivos estáticos

## Aula 01 - Criando o Projeto

### Aula 01 - Apresentação - Vídeo 1

Nesta aula, o instrutor Luiz Fernando apresenta o curso sobre React e introduz o projeto Aluroni, que consiste em criar uma tela de restaurante com funcionalidades de filtragem, busca e ordenação de pratos. Serão abordados tópicos como normalização de CSS, importação de imagens, utilização do pacote "classnames" e importações absolutas de arquivos e componentes. O instrutor destaca a importância do conteúdo e convida os espectadores a participarem.

### Aula 01 - Criando e limpando o projeto - Vídeo 2

Nesta aula, o instrutor explica os passos iniciais para criar um projeto utilizando o Create React App. Ele verifica se o Node e o NPM estão instalados, utiliza o comando NPX para rodar o Create React App, cria o projeto com o nome "aluroni", mostra como utilizar um template, prioriza o uso do NPM ao invés do Yarn, faz uma limpeza nos arquivos e pastas não utilizados, e inicia o servidor em desenvolvimento com o comando "npm start".

### Aula 01 - Para saber mais: Create React App e templates

[Create React App](https://create-react-app.dev/) (CRA) é uma biblioteca que cria a estrutura inicial de um projeto React com base nos padrões comuns adotados pela comunidade, incluindo ferramentas como testes.

Entretanto, há várias maneiras de estruturar projetos com React dependendo das necessidades e preferências de quem está usando a ferramenta. Para isso o CRA oferece [templates](https://create-react-app.dev/docs/custom-templates/), que são variações do projeto padrão.

O CRA possui dois templates por padrão:

- [cra-template](https://github.com/facebook/create-react-app/tree/main/packages/cra-template) que é o comum, usado quando nenhum template é definido;

- [cra-template-typescript](https://github.com/facebook/create-react-app/tree/main/packages/cra-template-typescript) que possui todas as características do template acima junto de configurações necessárias para usar TypeScript no projeto.

Como qualquer um pode criar seu template, é possível criar vários projetos personalizados com React, pois templates podem ser disponibilizados como pacotes do npm.

Dessa forma, pesquisando por [cra-template-* no site do npm](https://www.npmjs.com/search?q=cra-template-*) podemos encontrar vários templates criados pela comunidade. O padrão adotado é sempre cra-template- seguido do nome do template.

### Aula 01 - Configurando pacotes - Vídeo 3

Nesta aula, o instrutor inicia a implementação de um projeto React. Ele cria uma nova pasta chamada "pages" dentro de "src" e dentro dela, uma subpasta chamada "Cardápio". Em seguida, ele cria um arquivo chamado "index.tsx" dentro da subpasta "Cardápio" e exporta um componente de função chamado "Cardapio". O instrutor começa a escrever o código JSX dentro desse componente, criando uma tag `<main>` e dentro dela, um `<nav>` com a classe "menu". Ele menciona que o projeto utilizará CSS Modules e Sass e mostra como instalar as dependências necessárias. Além disso, ele cria um arquivo "Cardapio.module.scss" para armazenar os estilos Sass e importa esse arquivo como um objeto no arquivo "index.tsx". No próximo vídeo, o instrutor começará a estilizar o menu.

### Aula 01 - Nessa aula, você aprendeu como`:`

Criar projetos usando Create React App;
Vimos como podemos usar templates, como typescript para criar projetos com CRA e depois removemos o que não será utilizado neste projeto;
Usar CSS Modules com TypeScript e Sass;
Aplicamos estilos escritos em Sass via CSS Modules e adicionamos a capacidade do Visual Studio Code oferecer autocomplete dos módulos de estilos com typescript-plugin-css-modules.

## Aula 02 - Assets

### Aula 02 - Tentando importar o svg - Vídeo 1

> Arquivos estáticos(normalmento colocados na pasta ASSETS) são: Imagens, SVG, fonts, files...

Nesta aula, o instrutor aborda a utilização do CSS Modules em um projeto de site. Ele mostra os arquivos que serão abordados, como index.tsx, Cardapio/index.tsx, Cardapio/Cardapio.module.scss e logo.svg. O instrutor ensina como utilizar o CSS Modules no arquivo Cardapio.module.scss, adicionando um estilo de padding para a classe .menu. Em seguida, ele mostra como importar a logo do Aluroni, criando uma pasta assets e colocando o arquivo logo.svg dentro dela. No entanto, ao atualizar a página, a imagem não é exibida corretamente. O instrutor menciona que irá abordar esse problema com mais detalhes no próximo vídeo.

### Aula 02 - Importando a logo - Vídeo 2

> npm run build  
> Este comando serve para gerar uma pasta com o projeto PRONTO, ou seja com o projeto pronto para fazer o DEPLOY(colocar no ar).

[npm run build](https://create-react-app.dev/docs/deployment/), cria um diretório BUILD com uma versão de produção do seu aplicativo.

Nesta aula, o instrutor aborda um problema em que o arquivo "logo.svg" não está sendo reconhecido durante a execução do projeto. Ele explica que o Webpack, responsável por gerar o "build", não reconhece que o caminho do arquivo é estático. Para resolver esse problema, o instrutor mostra duas soluções: importar o arquivo SVG no código e utilizar a variável de importação como o caminho do arquivo, ou utilizar o pacote SVGR para converter o SVG em um componente React. Ambas as soluções resolvem o problema e permitem que o projeto prossiga para a próxima etapa.

### Aula 02 - Absolute imports e reset do css - Vídeo 3

> Importação RELATIVA é quando usamos ../../../diretorio/arquivo.js (ou seja caminho relativo a arigem).  
> Importação ABSOLUTA é quando definimos (no caso do Typescript) no arquivo TSCONFIG.JSON, dentro de "compilerOptions": {..., "baseUrl": "src"}, ou seja definimos uma URL base para todas as importações.

Nesta aula, o instrutor aborda diversos arquivos relacionados ao projeto Aluroni. Ele menciona o arquivo "tsconfig.json" para configurar o TypeScript e define opções de compilação. Em seguida, destaca a importância de utilizar importação absoluta ao invés de relativa para evitar muitos "../". Também explica como configurar o "tsconfig.json" para definir uma URL base para importações.

O instrutor menciona a necessidade de utilizar um arquivo "reset.css" para resetar o CSS padrão do navegador e evitar problemas de estilos indesejados. Mostra como copiar o código de um arquivo "reset.css" padrão da internet e adicioná-lo ao arquivo "index.css" do projeto Aluroni.

Além disso, destaca a importância de definir um fundo adequado para a página, utilizando a cor "#f6f6f6" para criar um estilo mais agradável. Também menciona a propriedade "box-sizing: border-box" para calcular o tamanho do elemento considerando as bordas e o padding.

No próximo vídeo, será abordada a criação do header do projeto, incluindo a importação de uma foto e a mudança da fonte utilizada.

### Aula 02 - Nessa aula, você aprendeu como`:`

- Importar um svg;

Vimos como o webpack entende aquela string que fornecemos ao src da tag img e porque não funciona, então, aprendemos como importar um svg da forma correta.
Utilizar um svg como componente;

- Melhoramos a nossa logo alterando a tag img por um componente que se torna um svg no final.
Imports absolutos;

Aprendemos como configurar e utilizar os imports absolutos para evitar voltar muitas pastas ao importar um arquivo.
Utilizar a biblioteca reset css para resetar o css;

- Resetamos os estilos da nossa página utilizando uma biblioteca chamada reset.css que nos ajuda a limpar os estilos padrões de cada elemento de acordo com cada navegador.

## Aula 03 - Header e Buscador

### Aula 03 - Adicionando fontes e normalize - Vídeo 1

> A importação dentro do index.css via @import-normalize; Não funcionou como o prof explicou. então foi feito via comando: npm install normalize.css

Nesta aula, o instrutor abordou a importação de fontes e a atualização do arquivo "Reset.css" em uma aplicação React. Ele mostrou como importar uma fonte do Google e explicou duas formas de fazer isso: via link no HTML ou via @import no CSS. O instrutor também falou sobre a importância de utilizar o arquivo "index.css" para importar a fonte, pois assim ela estará disponível para todos os estilos do projeto. Além disso, ele mencionou o "Reset.css" e mostrou uma alternativa utilizando o "normalize.css", que normaliza os estilos entre diferentes navegadores.

### Aula 03 - Criando o header - Vídeo 2

Nesta aula, o instrutor mostra como criar o cabeçalho de um cardápio em um projeto React. Ele utiliza CSS Modules, o padrão BEM e boas práticas de organização de código. O instrutor também ensina como importar imagens e utilizar variáveis no Sass, aproveitando as funcionalidades do Create React App.

>"Então vou fazer o seguinte, dentro de “src”, eu vou criar uma nova pasta chamada “styles”, e dentro dessa pasta eu vou criar um novo arquivo chamado “_variaveis.scss”. Esse underline antes é só uma boa prática, em alguns compiladores funciona que permite que você ignore esses arquivos."

### Aula 03 - Criando o buscador - Vídeo 3

Nesta aula, o instrutor explica como criar a seção de cardápio em um projeto React. Ele mostra os arquivos relevantes que serão utilizados, como package-lock.json, package.json, Cardapio.module.scss, index.tsx, Buscador.module.scss, _breakpoints.scss e _variaveis.scss. O instrutor utiliza a prática do BEM para nomear as classes CSS e cria um componente de buscador em um novo arquivo chamado index.tsx. Ele explica como passar o estado de busca para o componente acima (Cardapio) para que ele possa ser reutilizado em outros lugares. O instrutor também mostra o código CSS necessário para estilizar o buscador, utilizando variáveis e breakpoints. Por fim, ele adiciona um ícone de busca ao componente de buscador. No próximo vídeo, serão criados os filtros para o cardápio.

### Aula 03 - Nessa aula, você aprendeu como`:`

- Importar fontes externas
  - Aprendemos como importar fontes externas no nosso projeto utilizando o google fonts.
- Utilizar o normalize.css
  - Utilizamos o normalize.css para padronizar os estilos da página html em cada navegador.
- Utilizar ícones
  - Aprendemos como é fácil utilizar ícones com a biblioteca react-icons.
- Ignorar arquivos para build
  - Vimos como ignorar arquivos no momentos de build para que sejam utilizados apenas quando os chamar.
- Criar variáveis css
  - Criamos variáveis css para nos auxiliar na padronização dos estilos da página, evitando repetição e facilitando na manutenção de código.
