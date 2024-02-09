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

## Aula 04 - Ordenação e Filtros

### Aula 04 - Criando os filtros - Vídeo 1

Nesta aula, o instrutor explica como criar filtros para um cardápio em um projeto utilizando o VS Code. Ele mostra os arquivos utilizados para implementar os filtros, como o arquivo de estilos (.scss) e o arquivo de configuração dos filtros (.json). Em seguida, ele cria a estrutura básica para os filtros, utilizando uma div e um mapeamento dos filtros presentes no arquivo .json. O instrutor também explica a diferença entre utilizar o tipo "type" e a interface para definir o tipo das opções dos filtros. Ele mostra como utilizar o tipo "type" de forma mais simples e reutilizável, e também como utilizar uma interface para definir o tipo das opções. Por fim, ele mostra como aplicar estilos aos filtros utilizando classes CSS e o conceito de BEM (Block Element Modifier). No próximo vídeo, será abordado como criar o estado dos filtros e aplicar estilos quando um filtro estiver ativo.

### Aula 04 - Fazendo os filtros funcionarem - Vídeo 2

> Como javasript não aceita a sintaxe com -hifem para variaveis, foi usado: styles['filtros__filtro--ativo'] ao invés de: styles.filtros__filtro--ativo  
> Para podermos usar as classes condicionais do scss, vamos instalar o pacote: npm install classnames

Nesta aula, o instrutor trabalhou no desenvolvimento de filtros para um cardápio. Ele criou um estado de filtro dentro do componente "Cardapio" e definiu o estado inicial como nulo. Utilizou o useState para criar o estado de filtro, especificando que o tipo pode ser um número ou nulo. Passou o estado de filtro e a função setFiltro como props para o componente "Filtros". Para resolver um problema de reconhecimento de props pelo TypeScript, criou uma interface Props no arquivo "index.tsx" do componente "Filtros". Também mostrou como utilizar o classNames para aplicar classes condicionais no JSX, evitando a concatenação de strings. Utilizou o classNames para aplicar a classe "filtros__filtro--ativo" quando o filtro é igual ao ID da opção selecionada. Por fim, mencionou que no próximo vídeo será desenvolvido o ordenador.

### Aula 04 - Criando o ordenador - Vídeo 3

Nesta aula, o instrutor aborda a criação do componente "Ordenador" no projeto React. Ele explica que o objetivo desse componente é criar um seletor personalizado para ordenar os itens da lista. O instrutor utiliza HTML e CSS para criar a estrutura do componente e também cria um arquivo JSON com as opções de ordenação. Em seguida, ele importa as opções de ordenação no componente e utiliza a função map para renderizar cada opção como uma div. Após finalizar a implementação do componente, o instrutor adiciona-o na página do cardápio e disponibiliza o CSS para uso dos espectadores. No próximo vídeo, ele irá adicionar um estado interno para controlar a abertura e fechamento do seletor, além de implementar a funcionalidade de selecionar uma opção de ordenação.

### Aula 04 - Fazendo o ordenador funcionar - Vídeo 4

Nesta aula, o instrutor trabalhou na implementação da funcionalidade de ordenação em um cardápio. Ele criou um estado para controlar se as opções de ordenação estão visíveis ou não e adicionou eventos de clique e desfoco para abrir e fechar as opções. Também adicionou um ícone de seta e estilizou o botão de ordenação. Em seguida, implementou a funcionalidade de ordenação, criando um estado no componente pai e passando-o como prop para o componente de ordenação. Por fim, exibiu a opção de ordenação selecionada no botão. Agora ele seguirá para a próxima etapa, que é criar os itens do cardápio e fazer com que os filtros de ordenação funcionem nesses itens.

### Aula 04 - Para saber mais: Objetos em JavaScript

No vídeo anterior, vimos como manipular objetos de maneira complexa em conjunto com a biblioteca classnames. Acesse a [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#objetos_e_propriedades) para entender melhor sobre objetos e suas propriedades.

- Adição condicional de classes de forma facilitada.
  - Alternativa correta! A adição condicional de classes pode ser facilmente feita por você mesmo com operadores ternários, porém é possível que a parte do código responsável pela estilização contenha mais lógica do que a estilização em si. O classnames fornece uma maneira simples de realizar esse processo através de objetos JavaScript.

[documentação do classnames](https://github.com/JedWatson/classnames)

- Formatação automática.
  - Alternativa correta! Além de lidar com a lógica de adição de classes CSS, também precisamos nos preocupar em adicionar um espaço entre cada condição. A utilização do classnames não é mais necessária, pois ele realiza essa etapa por você.

### Aula 04 - Nessa aula, você aprendeu como`:`

- Inferir o tipo de um objeto
  - O operador typeof nos permite inferir a tipagem de um objeto sem a necessidade de criar uma interface.
- Manipulação de objetos
  - Utilizamos [] em volta do nome da chave de um objeto quando o valor da chave é dinâmico.
- Biblioteca classnames
  - Essa biblioteca nos permite concatenar classes CSS utilizando sintaxe de objetos.

## Aula 05 - Lista de Itens

### Aula 05 - Criando os itens - Vídeo 1

Nesta aula, o instrutor finaliza um projeto criando os itens do cardápio. Ele cria a pasta "itens" e dentro dela um arquivo "index.tsx". Em seguida, exporta a função "Itens" que mapeia os itens do cardápio. Um arquivo JSON chamado "itens.json" é criado com as informações dos itens e importado no arquivo "index.tsx". O instrutor também cria o componente "Item" para renderizar cada item do cardápio. São criados arquivos CSS para estilizar os componentes e o HTML é estruturado para exibir as informações dos itens. Nos próximos vídeos, serão abordados como popular os itens com os dados do JSON e importar as imagens de forma dinâmica.

### Aula 05 - Populando cada item - Vídeo 2

Nesta aula, o instrutor discute sobre a população dos itens do cardápio. Ele mostra como passar os itens via props, utilizando uma chave diretamente no item e fazendo um spread. Além disso, ele ensina como tipar as props do componente Item e utiliza o destructuring para extrair as propriedades necessárias. No final, ele menciona que ainda é necessário mudar a cor de acordo com o tipo do item e importar as imagens, tarefas que serão abordadas no próximo vídeo.

### Aula 05 - Atualizando os tipos - Vídeo 3

Nesta aula, o instrutor aborda a importância de adicionar estilos e imagens dinamicamente em um projeto React. Ele mostra como alterar as cores dos itens de um cardápio, utilizando o arquivo item.module.scss para definir as cores de cada tipo de item. Além disso, ele utiliza a biblioteca classnames para facilitar a adição dinâmica de classes CSS no componente Item. O instrutor também menciona a necessidade de ajustar as categorias dos itens para que sejam exibidas corretamente, em letras minúsculas, e mostra como fazer isso utilizando o arquivo Itens.json. Por fim, ele demonstra como importar imagens de forma dinâmica em um componente React, ressaltando a necessidade de resolver um problema relacionado ao caminho das imagens durante o processo de build. Essas técnicas são importantes para estilizar componentes e proporcionar uma melhor experiência visual para o usuário.

### Aula 05 - Imports dinâmicos - Vídeo 4

Nesta aula, o instrutor discute sobre como importar imagens de forma dinâmica em um projeto React. Ele menciona que é possível utilizar a pasta "public" para esse propósito e explica como mover a pasta de imagens para lá. O instrutor também destaca a importância de utilizar o comando npm run build para verificar se os arquivos estão sendo corretamente incluídos na pasta "build". Por fim, ele menciona que ainda falta implementar a funcionalidade dos filtros no projeto.

### Aula 05 - Nessa aula você aprendeu a`:`

Renderizar uma lista de componentes
Podemos utilizar o spread operator para não precisar passar as props manualmente quando temos total controle do componente.
Utilizar a pasta public
Arquivos estáticos que devem ser referenciados dinamicamente precisam estar dentro dessa pasta.
Gerar os arquivos utilizados em produção
Com o comando ***npm run build*** podemos verificar quais arquivos estarão presentes no ambiente de produção.

## Aula 06 - Finalizando o Projeto

### Aula 06 - Buscador e filtros - Vídeo 1

Nesta aula, o instrutor finaliza o design do projeto e aborda a correção dos filtros aplicados aos itens do cardápio. Ele mostra como passar os filtros como props para o componente "Itens" e utiliza o useState para criar um estado interno. O useEffect é utilizado para atualizar a lista de itens sempre que os filtros são modificados. O instrutor também explica como criar funções de teste para a busca e o filtro, utilizando expressões regulares e comparando os valores com os itens do cardápio. No próximo vídeo, será abordada a implementação do ordenador.

### Aula 06 - Ordenador - Vídeo 2

Nesta aula, o instrutor está finalizando um projeto e focando na funcionalidade do ordenador. Ele mostra o código do arquivo "Itens" e explica como implementar a ordenação da lista de itens de acordo com diferentes critérios, como porção, quantidade de pessoas e preço.

O instrutor utiliza a estrutura de controle switch case para determinar o tipo de ordenação e utiliza o método sort para realizar a ordenação. Ele também menciona a importância de atualizar a lista sempre que o ordenador for alterado.

Ao final, o instrutor testa a funcionalidade do ordenador no navegador e verifica se a ordenação está funcionando corretamente.

Além disso, o projeto abordado no vídeo é uma tela com vários filtros e importação de imagens SVG.

Espero que esse resumo seja útil! Se você tiver mais alguma dúvida, estou aqui para ajudar.

### Aula 06 - Nessa aula você aprendeu a`:`

- Buscar com expressão regular
  - Utilizar expressões regulares em buscas de textos.
- Manipular elementos de uma lista
  - Alterar a quantidade ou ordenar os elementos de uma lista com métodos filter e sort.
- Tipar o useState
  - Escrever useState`<Tipo>` para tipar o state e o setState.

### Aula 06 - Conclusão - Vídeo 2

Nesta aula de React com TypeScript, aprendemos sobre o conceito de "normalize" para redefinir o CSS padrão dos navegadores, como fazer "absolute imports" com TypeScript, o uso de arquivos estáticos no React, o propósito da pasta "public" e como utilizá-la, o pacote "classnames" para facilitar a manipulação de classes CSS, a importância de realizar os exercícios propostos e explorar os materiais extras, e a importância de fornecer feedback ao final do curso.
