# Curso Alura React: conhecendo a biblioteca React Router

## Aula 01 - O que é SPA

## Aula 01 - Apresentação - Vídeo 1

Nesta aula do curso "React: conhecendo a biblioteca React Router", o instrutor Luiz Fernando da Alura aborda a criação de rotas em uma aplicação React. Serão criadas outras rotas, como a página de Início e a página de Sobre, e será implementada a funcionalidade de redirecionamento para a tela de detalhes do prato ao clicar em "Ver mais" no cardápio. Além disso, será ensinado como utilizar o react-router-dom, como o browser router, routes, route e link, e também as hooks useNavigate, useLocation e useParams. O objetivo é criar um código mais eficiente e escalável, refatorando o código anterior para que ele faça sentido em um projeto com múltiplas rotas.

## Aula 01 - Criando o ESLint - Vídeo 2

> npm init @eslint/config

Nesta aula, aprendemos sobre o ESLint, uma ferramenta que ajuda a melhorar a qualidade do código JavaScript. Configuramos o ESLint no Visual Studio Code e criamos um arquivo de configuração. Durante a configuração, respondemos perguntas sobre o estilo de código desejado. O ESLint foi executado no código-fonte e mostrou os erros encontrados. Corrigimos os erros manualmente ou usamos o comando "--fix" para corrigi-los automaticamente. O uso do ESLint é recomendado para melhorar a legibilidade, consistência e qualidade do código JavaScript.

> npx eslint ./src --fix

## Aula 01 - ESLint

ESLint é uma junção de 2 palavras, ES (abreviação de EcmaScript) e Lint (Fiapo em inglês), e o que são essas 2 palavras?

- EcmaScript é a linguagem de programação que inspirou o Javascript, então é a “forma genérica” do Javascript. Outras linguagens baseadas em EcmaScript são o ActionScript (que tem como uma das implementação o falecido Flash) e o JScript.

- Lint é um termo que foi popularizado de um utilitário Unix para examinar o código fonte da linguagem C. A partir daí o Lint começou a ser criado sempre como uma ferramenta para analisar códigos e estabelecer padrões / encontrar bugs.

O ESLint é uma ferramenta que analisa o código e aponta quaisquer problemas que encontrar. Ele pode encontrar bugs, áreas potencialmente problemáticas, estilos de codificação ruins e questões de estilo.

## Aula 01 - Criando o início - Vídeo 3

Nesta aula, o instrutor abordou a configuração do ESLint para evitar erros e warnings no código. Ele explicou como desativar a regra "react/react-in-jsx-scope" no arquivo de configuração do ESLint para permitir o uso de JSX sem a importação do React. Em seguida, o instrutor criou uma nova rota e um novo componente chamado "Inicio" para representar uma nova página. Ele adicionou um título e uma div para exibir recomendações do cardápio. O instrutor também mencionou a importância da refatoração para melhorar a organização do código.

## Aula 01 - Erro de importação do React

Levando em consideração que estamos usando as mesmas configurações do ESLint do vídeo, qual das opções abaixo melhor explica e resolve o problema em questão?

Esse erro é devido à configuração de estilo que escolhemos, em que nos obriga a importar o React no topo do código. Podemos resolvê-lo navegando até o arquivo de configuração do ESLint chamado .eslintrc.json, e adicionarmos na propriedade rules a seguinte regra:

“react/react-in-jsx-scope”: “off”,

Isso mesmo! Quando utilizamos um estilo de código, ele nos obriga a seguir alguns padrões e é isso que o estilo que escolhemos faz. Uma das regras dele é que devemos sempre declarar o React no topo do código, mas isso não é tão necessário hoje em dia com as atualizações da biblioteca, então podemos desativar essa regra indo até o arquivo .eslintrc.json que é responsável pelas configurações do ESLint. Após isso, acrescentamos a seguinte regra na propriedade rules:

## Aula 01 - Nessa aula, você aprendeu`:`

- ESLint;
  - O que é e como configurar o ESLint.
- Como corrigir erros de código seguindo as regras da configuração;
- Criar a página de início da aplicação.

## Aula 02 - Estrutura Básica do Router DOM

## Aula 02 - Pratos recomendados - Vídeo 1

Nesta aula, o instrutor explica como refatorar um projeto para melhorar a organização e reutilização de dados. Ele mostra como mover um arquivo chamado "itens.json" para uma nova pasta chamada "data" e renomeá-lo para "cardapio.json". Em seguida, ele ensina como importar esse arquivo em diferentes componentes, substituindo o caminho antigo pelo novo caminho. O instrutor também cria um arquivo de estilos específicos para a página inicial e utiliza variáveis de estilo para definir cores e propriedades. Ele mostra como selecionar aleatoriamente três itens do cardápio e exibi-los como recomendações na página inicial. Por fim, ele menciona que nos próximos vídeos serão implementadas mais funcionalidades na página inicial e mostrado como reutilizar código do componente de cardápio.

## Aula 02 - Resolvendo rotas com js - Vídeo 2

Nesta aula, o instrutor discute sobre a implementação de rotas no React. Ele explica que o React utiliza uma arquitetura chamada SPA, onde há apenas um arquivo HTML e as alterações de página são feitas através do JavaScript. O instrutor mostra um exemplo de como implementar rotas utilizando JavaScript puro, criando uma constante que verifica a URL atual e renderiza o componente correspondente. No entanto, ele menciona que essa implementação manual pode ser trabalhosa e difícil de reutilizar o código. Por isso, ele menciona a existência do pacote React Router Dom, que facilita a implementação de rotas no React.

## Aula 02 - Usando react-router-dom - Vídeo 3

Nesta aula, o instrutor aborda o uso do React Router Dom para resolver problemas de rotas em aplicações React. Ele explica como instalar o pacote, criar as rotas utilizando o Router, Routes e Route, e demonstra o funcionamento da mudança de rota na aplicação. O React Router Dom é uma solução mais eficiente do que resolver problemas de rotas diretamente com JavaScript, utilizando o path name. O instrutor utiliza o BrowserRouter para acessar o window.location.pathname e define duas rotas: uma para a rota "/" que renderiza o componente Inicio e outra para a rota "/cardapio" que renderiza o componente Cardapio. Ao iniciar a aplicação, a mudança de rota está funcionando corretamente, redirecionando para o componente correspondente de acordo com a rota especificada.

## Aula 02 - Nessa aula, você aprendeu`:`

Separar os dados do cardápio para uma pasta separada;
BrowserRouter e HashRouter;
Diferença entre BrowserRouter e HashRouter.
Routes;
Utilizar o routes para alternar entre rotas.

## Aula 03 - Criando as Rotas

## Aula 03 - Reaproveitando o Menu - Vídeo 1

Nesta aula, o instrutor ensina como reaproveitar componentes em um projeto React. Ele mostra como criar uma pasta "components" para armazenar componentes que serão utilizados em várias páginas. Em seguida, ele cria a pasta "Menu" dentro de "components" e define a função Menu que retorna o código HTML do menu. Ele também importa a logo e os estilos do menu. Por fim, ele mostra como importar o menu nas páginas "Cardapio" e "Inicio" para evitar duplicação de código.

## Aula 03 - Reaproveitando com react-router - Vídeo 2

Nesta aula, o instrutor discute sobre a reutilização do componente de menu em diferentes rotas de um aplicativo React. Ele explica como remover o componente de menu dos elementos main e section das rotas e colocá-lo entre as tags Router e Routes no arquivo routes.js. Além disso, o instrutor mostra como implementar links para as diferentes rotas no componente de menu e como estilizar o menu utilizando classes CSS. No próximo vídeo, ele abordará como evitar o recarregamento da página ao clicar nos links do menu.

## Aula 03 - Trocando a Tag a - Vídeo 3

Nesta aula, o instrutor aborda o problema de atualização completa da página ao mudar as rotas em uma aplicação React utilizando a tag `<a>`. Ele recomenda a instalação da extensão "React Developer Tools" para facilitar a identificação de problemas no código React. O instrutor mostra como ativar a opção "Highlight updates when components render" para visualizar os componentes renderizados novamente. Em seguida, ele substitui a tag `<a>` por `<Link>` do react-router-dom, explicando como fazer essa alteração. Agora, ao clicar nas rotas, os componentes são reaproveitados e a página não é atualizada completamente. No próximo vídeo, será abordado como reaproveitar o Header e construir a página "Início".

## Aula 03 - Reaproveitando o Header - Vídeo 4

Nesta aula, o instrutor aborda a reutilização do componente Header em diferentes rotas do aplicativo. Ele mostra como mover o código do Header para o componente Routes, menciona a criação de um arquivo de estilos e identifica dois problemas que precisam ser resolvidos: o Header sendo renderizado em rotas inexistentes e o estilo do Header não estar no componente correto. O instrutor finaliza mencionando que no próximo vídeo será feita uma refatoração para resolver esses problemas adequadamente.

## Aula 03 - Página padrão - Vídeo 5

Nesta aula, o instrutor aborda a criação de rotas no React Router. Para resolver problemas de reaproveitamento de componentes e evitar código repetido, é criado um novo componente chamado "PaginaPadrao". Esse componente é utilizado como uma página padrão, onde o componente "Header" é extraído do componente "Routes". Além disso, é explicado o conceito de "children" do React e como utilizá-lo no componente "PaginaPadrao". Também é abordado o uso de rotas absolutas e relativas no React Router. Com essas modificações, é possível reaproveitar o componente Header em diferentes rotas e evitar a repetição de código.

## Aula 03 - Nessa aula, você aprendeu`:`

- Reutilizar o menu;
  - Reaproveitar o header utilizando o react-router-dom;
- Utilizar o componente Link;
  - Fazer a página padrão.
