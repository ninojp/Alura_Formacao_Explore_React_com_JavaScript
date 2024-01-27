# Alura Curso React: migrando para TypeScript

>Já dizia o Linus Torvalds, falar é fácil… eu quero ver é código!

## Aula 01 - TypeScript

## Aula 01 - Apresentação - Vídeo 1

Nesta aula do curso de React: migrando para TypeScript, os instrutores Paulo Silveira e Vinicios Neves apresentam o objetivo do curso, que é migrar um projeto em JavaScript para TypeScript. Eles discutem as vantagens e desvantagens dessa linguagem da Microsoft e desmistificam a ideia de que o TypeScript é difícil e improdutivo. Durante o curso, eles trabalharão com um projeto real, explorando os fundamentos de JavaScript, ferramentas, tipagem e computação, além de abordar o React em si. O curso oferece uma oportunidade de aprender sobre o TypeScript, aprimorar o conhecimento em JavaScript e React, e adquirir habilidades práticas ao trabalhar em um projeto real.

## Aula 01 - Revisando o Organo - Vídeo 2

Nesta aula, os instrutores Vinicios Neves e Paulo Silveira discutem sobre como iniciar o trabalho no projeto Organo utilizando o VSCode e TypeScript. Eles explicam como baixar o código do projeto do GitHub, renomear a pasta, abrir o projeto no VSCode e rodar o servidor localmente. Em seguida, eles instalam as dependências necessárias para adicionar o TypeScript ao projeto. Eles também mencionam a importância do TypeScript para ter uma tipagem mais estática e como instalar as definições de classes e tipos necessários para o projeto.

## Aula 01 - Instalando as dependências - Vídeo 3

Nesta aula, Vinicios Neves e Paulo Silveira discutem sobre a configuração do TypeScript em um projeto. Eles explicam que é necessário criar um arquivo de configuração chamado tsconfig.json para indicar o comportamento esperado do TypeScript. Vinicios mostra como gerar esse arquivo automaticamente usando o comando npx tsc --init. O tsconfig.json é um arquivo JSON com opções do compilador, como o target e o module. Com o projeto clonado, as dependências instaladas e o tsconfig.json gerado, eles estão prontos para fazer a primeira migração no projeto.

## Aula 01 - Gerando o tsconfig - Vídeo 4

Nesta aula do curso "React: migrando para TypeScript", os instrutores Vinicios Neves e Paulo Silveira discutem sobre a migração de um componente em JavaScript para TypeScript em um projeto React.

Eles explicam que o uso do TypeScript é uma escolha para lidar com a complexidade de projetos grandes em JavaScript, que não possui mecanismos de tipagem. O TypeScript é desenvolvido pela Microsoft como um "superconjunto" de JavaScript, permitindo utilizar o código já existente e aproveitar recursos adicionais da linguagem, tornando o sistema mais robusto e fácil de tratar erros.

Durante a aula, eles mostram o processo de migração de um componente chamado "Botao". Eles renomeiam o arquivo de "index.js" para "index.tsx" para indicar que o código é TypeScript. Em seguida, eles criam uma interface chamada "BotaoProps" para tipar as propriedades do componente. A interface espera uma propriedade chamada "children" do tipo "ReactElement". Eles também importam o módulo "React" para habilitar o uso de JSX.

Após ajustar as propriedades e configurar o arquivo "tsconfig.json" para habilitar o uso de JSX com React, eles conseguem compilar o código sem erros. A migração foi feita sem alterar a funcionalidade do componente, mas agora há uma maior previsibilidade e clareza sobre as propriedades que devem ser passadas.

Os instrutores ressaltam que o uso do TypeScript traz vantagens como maior previsibilidade de erros, melhor legibilidade de código e facilidade de manutenção em projetos grandes. A migração para TypeScript não resulta em perda de produtividade, mas sim em ganhos de qualidade e confiabilidade no código.

## Aula 01 - Primeira migração - Vídeo 5

Nesta aula, os instrutores continuam a migração de um projeto para TypeScript. Eles trabalham com o componente de banner, explicando como utilizá-lo e o que é necessário fazer para adicionar uma nova funcionalidade combinada com a migração. Eles mostram como definir a interface BannerProps, que especifica as propriedades que o componente Banner espera receber. Em seguida, eles refatoram o componente Banner para receber as propriedades via props. No geral, a aula aborda a migração de um projeto para TypeScript e a utilização do componente de banner, mostrando como definir contratos entre componentes e como passar propriedades via props.

## Aula 01 - Para saber mais: JSX.Element, ReactNode e ReactElement

Durante o nosso dia a dia de pessoa desenvolvedora front-end que trabalha com React nós vamos nos deparar, em algum momento, com esses três tipos de elementos.

Vamos entender, um pouquinho mais a fundo, qual a peculiaridade de cada um deles?

O ReactElement é um objeto com um tipo e props.

O ReactNode é um ReactElement, um ReactFragment, uma string, um number ou uma lista de ReactNodes, ou null, undefined ou boolean.

O JSX.Element é um ReactElement com o tipo genérico para props e type sendo any. Ele existe para permitir que outras bibliotecas implementem o JSX de seu próprio jeito customizado.

Pra já é importante que você saiba da existência dos três para saber qual é o melhor momento para utilizar cada um.

## Aula 01 - De olho no tsconfig.json

Durante essa aula, nós criamos o arquivo tsconfig.json. Vamos relembrar algumas de suas responsabilidades? Marque a alternativa a seguir que é verdadeira.

Ele especifica opções do compilador necessárias para compilar o projeto.

Isso aí! Exatamente! Inclusive nós geramos o arquivo base utilizando um script npx:

>npx tsc --init

Assim, temos já uma base grande de regras e configurações que podemos ligar e desligar de acordo com a necessidade do projeto.

## Aula 01 - Nessa aula, você aprendeu como`:`

Instalar os pacotes necessários para iniciar a migração de um projeto React de JS para TS;
Gerar o tsconfig.json a partir do script npx;
Aplicar as configurações do jsx;
Diferenciar arquivos js, jsx, ts e tsx.

## Aula 02 - Migração Controlada

## Aula 02 - Migrar o Banner - Vídeo 1

Nesta aula do curso "React: migrando para TypeScript", os instrutores Paulo e Vinicios discutem sobre a importação e exportação de componentes no React utilizando TypeScript. Eles explicam a diferença entre export const e export default e como isso afeta a forma como os componentes são importados em outros arquivos. Além disso, eles destacam a importância de entender os mecanismos do React e os módulos de JavaScript. Também abordam a migração de campos de texto para TypeScript, mostrando como renomear arquivos e criar interfaces para tipar as propriedades dos componentes. No geral, a aula enfatiza a importância de dominar o React e aprofundar os conhecimentos em JavaScript para um desenvolvimento mais eficiente e livre de erros.

## Aula 02 - Conhecendo tipos diferentes - Vídeo 2

Nesta aula do curso "React: migrando para TypeScript", os instrutores discutem sobre a tipagem no TypeScript em um projeto React. Eles mostram como tipar diferentes propriedades de um componente chamado CampoTexto, como a propriedade aoAlterado, placeholder, label, valor e obrigatorio. Além disso, eles explicam como resolver erros relacionados ao uso do React e do TypeScript, como o erro de importação do React e a tipagem correta do evento onChange. No final, eles mostram o código final do componente CampoTexto, com todas as propriedades devidamente tipadas.

## Aula 02 - Desconstrução e tipos - Vídeo 3

Nesta aula, os instrutores discutem a importância de seguir um padrão ao utilizar props ou desconstruir as propriedades em um projeto utilizando TypeScript. Eles mostram como realizar a desconstrução de propriedades em um componente chamado CampoTexto e explicam que o VSCode combinado com TypeScript é capaz de inferir os tipos das propriedades ao realizar a desconstrução, facilitando o desenvolvimento. Eles também mencionam que o mecanismo de tipagem estática do TypeScript é mais eficiente do que o JavaScript puro. Após realizar a desconstrução, eles verificam se o compilador não apresentou erros e testam o componente CampoTexto no navegador. O próximo passo será abordar o assunto de times e como lidar com os membros, ainda dentro do contexto do TypeScript.

## Aula 02 - Para saber mais: sobre os pacotes @types

O que são pacotes @types?
Pacotes dentro do escopo @types nos permitem ter acesso uma tonelada de definições de tipo super úteis, como, por exemplo, as definições de tipo do node.js que nos permitem usar require.

Por exemplo, o pacote @types/node contém definições de tipo do próprio Node.js.

Quando usar @types?
Os pacotes @types contém definições dos tipos de muitas bibliotecas, como Express, Sequelize, React entre outras. Mas verifique se o pacote que você está usando já possui os tipos incluídos antes de instalar os tipos do @types.

## Aula 02 - De olho nos React Hooks

O que são os React Hooks e para que eles, de fato, servem?

Eles permitem que você possua estado local e outros recursos do React sem escrever componentes baseados em classes.

Isso aí! Exatamente! Essa veio direto da [documentação](https://legacy.reactjs.org/docs/hooks-overview.html), né? Eles resolvem vários problemas já conhecidos pelo time que mantém o projeto. Você pode entender mais a fundo sobre o assunto nesse [artigo oficial](https://legacy.reactjs.org/docs/hooks-intro.html#motivation).

## Aula 02 - Nessa aula, você aprendeu como`:`

Configurar o jsx no tsconfig.json;
Configurar a tipagem de funções;
Inferir os tipos de variáveis geradas pela desconstrução das props;
Para que servem pacotes dentro do escopo @types.

