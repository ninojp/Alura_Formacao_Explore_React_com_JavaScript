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

## Aula 02 -

### Aula 02 -  - Vídeo 1
