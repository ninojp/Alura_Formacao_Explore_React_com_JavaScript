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

## Aula 03 - Tipos Complexos

## Aula 03 - Migrando o Time - Vídeo 1

Nesta aula, os instrutores discutem a refatoração do componente "Time" em um projeto React migrado para TypeScript. Eles renomeiam o arquivo para "index.tsx" e criam a interface "TimeProps" para definir as propriedades esperadas pelo componente. Além disso, eles criam uma nova pasta chamada "compartilhado/interfaces" e um arquivo "IColaborador.ts" para definir a interface "IColaborador" com as propriedades necessárias. Eles também mencionam a importância de nomear as interfaces com o padrão "I" no início e destacam os benefícios do TypeScript na detecção de erros e na manutenibilidade do código.

## Aula 03 - Refatorando a Lista Suspensa - Vídeo 2

Nesta aula, os instrutores Vinicios e Paulo discutem sobre a refatoração de um componente de Lista Suspensa em um projeto React migrado para TypeScript. Eles renomeiam o arquivo para index.tsx e criam uma interface chamada ListaSuspensaProps para tipar as propriedades do componente. Eles destacam a importância de utilizar TypeScript para melhorar a legibilidade do código e ajudar as pessoas que estão entrando no projeto. Em seguida, eles verificam se as propriedades estão sendo passadas corretamente para o componente e mostram o código do componente ListaSuspensa, onde é renderizado um select com as opções dos times. Por fim, eles testam o componente e mencionam que agora podem continuar com a refatoração e adição de novas funcionalidades no projeto.

## Aula 03 - Refatorando o Formulário - Vídeo 3

Nesta aula, os instrutores Vinicios e Paulo discutem a refatoração de um formulário em um projeto React migrado para TypeScript. Eles lidam com problemas de tipagem implícita, ajustam interfaces e corrigem erros de propriedades ausentes nos componentes ListaSuspensa, CampoTexto e Botao. No final, eles testam o formulário no navegador e corrigem um bug relacionado ao evento onSubmit.

## Aula 03 - Para saber mais: Interface vs Types

Existem dois tipos principais para declarar a forma de um objeto: interfaces e tipos.

Eles são bem parecidos e para a maioria dos casos funcionam da mesma forma.

Ambos suportam a extensão de outras interfaces e tipos.

Os tipos fazem isso através da interseção de tipos, enquanto interfaces possuem uma palavra-chave reservada.

A equipe da Microsoft recomenda o uso de interfaces ao invés de tipos.

Uma das maiores diferenças entre tipos e interfaces é que interfaces são abertas e tipos são fechados.

Isso significa que você pode extender interfaces declarando uma segunda vez.  
interface Cachorro {
  adestrado: boolean;
}
interface Cachorro {
  cor: string;
}
// isso funciona

Por outro lado, esses tipos não podem ser alterados fora da própria declaração.  
type Filhote = {
  cor: string;
};
type Filhote = {
  brinquedos: number;
};
// isso não funcionaCOPIAR CÓDIGO

Dependendo dos seus objetivos essa diferença pode ser positiva ou negativa.

Como um dos melhores recursos para ver todos os casos de uso de tipos vs interfaces, vale a pena dar uma lida nessa [thread do Stackoverflow](https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript/52682220#52682220).

## Aula 03 - De olho no JSX

Utilizamos JSX nos nossos componentes, mas será que sabemos descrever precisamente o que ele é?

Marque a alternativa que melhor descreve o JSX:

É uma extensão de sintaxe para JS utilizada para descrever como a interface do usuário deve ser.

Isso aí! Exatamente! Sua memória tá afiadinha. O JSX é bastante parecido com o HTML, então o processo de escrever a estrutura dos elementos é bem mais tranquilo para pessoas desenvolvedoras que possuem uma boa base em HTML.

## Aula 03 - Nessa aula, você aprendeu como`:`

Criar interfaces;
Entender a diferença entre type e Interface;
Configurar propriedades opcionais nas interfaces;
Tipar funções;
Configurar o jsx no tsconfig.json.

## Aula 04 - 

## Aula 04 -  - Vídeo 1
