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

## Aula 04 - Router DOM Hooks

## Aula 04 - Estilo tema - Vídeo 1

Nesta aula, o instrutor discute sobre a criação de um tema para reutilização de estilos em diferentes componentes de uma aplicação React. Ele propõe a criação de um módulo de estilos chamado "Tema.module.scss" e mostra como utilizá-lo nos componentes existentes. Com essas alterações, os estilos são reaproveitados corretamente e a aplicação funciona como esperado.

## Aula 04 - Terminando a tela Início - Vídeo 2

Nesta aula, o instrutor finaliza a tela inicial de um projeto utilizando React. Ele adiciona elementos HTML, como título, imagem e endereço, e explica como importar e utilizar a imagem no código. Em seguida, ele estiliza o título com uma classe CSS. Depois, o instrutor cria a página "Sobre", criando uma nova pasta e arquivos para ela. Ele adiciona uma rota para a página "Sobre" no arquivo de rotas e testa as funcionalidades no navegador. Com isso, ele finaliza a implementação da tela inicial e da página "Sobre" do projeto.

## Aula 04 - Terminando a tela Sobre - Vídeo 3

Nesta aula, aprendemos a finalizar a tela "Sobre" em um projeto React utilizando a biblioteca React Router. Foi apresentado o código CSS do arquivo Sobre.module.scss, que define estilos para os elementos da tela, como formatação de texto, espaçamento e tamanho de imagens. Também foram adicionados textos descritivos sobre o negócio Aluroni, uma seção vazia com o título "Sobre", uma imagem e um texto descritivo dentro de uma div, e duas imagens renderizadas utilizando um mapeamento do array imagens. Além disso, foi mencionado a importância de importar as imagens e a fonte "Josefin Sans" para o projeto.

## Aula 04 - Criando o NotFound - Vídeo 4

Nesta aula, o instrutor abordou a criação do rodapé (Footer) e da tela de "Not Found" em um projeto React. Ele mostrou como criar a pasta "Footer" dentro da pasta "components" e criar os arquivos necessários. Em seguida, ele escreveu o código para o componente Footer, importando o arquivo de estilos e a logo do projeto. O Footer foi incluído no arquivo "routes.js" para ser renderizado corretamente. Depois disso, o instrutor criou a tela de "Not Found", explicando como combinar classes de estilos usando a biblioteca classNames. Ele adicionou o componente NotFound no código do arquivo "routes.js" e fez ajustes para centralizá-lo na tela. Por fim, ele verificou no navegador se as alterações foram aplicadas corretamente.

## Aula 04 - Voltando para outra tela - Vídeo 5

Nesta aula, o instrutor aborda a resolução de dois problemas na tela "Not Found". O primeiro problema é relacionado ao posicionamento do footer, que não estava no final da página como desejado. Para resolver esse problema, o instrutor faz ajustes no código CSS utilizando a classe "container" com as propriedades "display: flex" e "flex-direction: column". Isso faz com que o menu seja posicionado no topo, seguido pelo container e, por fim, o footer. Além disso, é definida uma altura mínima para o container utilizando a unidade de medida "vh", garantindo que o footer fique no final da página.

O segundo problema a ser resolvido é a inclusão de um botão de voltar independente da página em que o usuário esteja. Para isso, é adicionado um código no arquivo "index.tsx" da tela "Not Found", criando uma div com a classe "voltar" e um botão com o texto "Voltar". É utilizado o react router para voltar para a página anterior, utilizando o hook "useNavigate" do pacote "react-router-dom". Ao testar a funcionalidade no navegador, é possível observar que o botão de voltar retorna para a página anterior, de acordo com o histórico de navegação.

## Aula 04 - Navegar entre rotas

useNavigate

useNavegate() Esse é o hook provido pelo react-router-dom e podemos utilizá-lo para navegar entre as rotas. O uso dele é bem simples, veja:

const navigate = useNavigate()
E então, no componente devemos substituir “?” pela função que o hook retorna, e passar como parâmetro o valor -1 que como mostrado na aula, representa voltar para a página anterior:

```JavaScript
function BotaoVoltar() {
 const navigate = useNavigate()
 return (
   <button onClick={() => navigate(-1)}>{'< Voltar'}</button>
 )
}
```

## Aula 04 - Nessa aula, você aprendeu`:`

Desenvolver um tema para a aplicação;
Aplicar o componente Outlet do react-router-dom;
Utilizar o hook useNavigate para navegar entre rotas;
Criar uma tela not found para páginas não encontradas.

## Aula 05 - Finalizando o Projeto

## Aula 05 - Criando a rota Prato - Vídeo 1

> useParams()

Nesta aula, o instrutor aborda o uso do pacote react-router-dom no projeto em React. Ele explica o conceito de pilha de navegação e como o hook useNavigate funciona. O useNavigate permite navegar entre as páginas utilizando números negativos para voltar para páginas anteriores. Em seguida, o instrutor mostra como criar uma nova página chamada "Prato" utilizando o react-router-dom. Ele também mostra como adicionar a rota para a página Prato no arquivo routes.js. Ele apresenta duas soluções para lidar com rotas dinâmicas: utilizar um asterisco (*) no path da rota ou utilizar um parâmetro nomeado na rota. No próximo vídeo, será abordado o uso do hook useLocation e mais detalhes sobre o histórico da pilha do react-router-dom.

## Aula 05 - useLocation e state - Vídeo 2

> useLocation()

Nesta aula, o instrutor abordou o uso do hook "useLocation" no React Router. Ele explicou que o "useLocation" é utilizado para obter informações sobre a localização atual da página, como o pathname, hash, key e search (query params). O instrutor também mostrou como utilizar o hook "useNavigate" para navegar entre as telas. Ele criou uma função chamada "redirecionarParaDetalhes" que recebe um prato como parâmetro e utilizou o "navigate" para redirecionar para a tela de detalhes do prato, passando o ID do prato como parâmetro na URL. Além disso, ele utilizou o "state" para passar informações adicionais sobre o prato. O instrutor também explicou o conceito de "replace" no "navigate", que é utilizado para substituir a entrada atual no histórico do navegador. Por fim, destacou a colaboração entre o React Router e o navegador, mostrando que é possível utilizar os botões de "Ir" e "Voltar" do navegador para navegar entre as rotas definidas no React Router.

> useNavigate({state: {objeto}, replace: true|false})  
> replace: true  
> Substituir a última rota do histórico pela rota passada como primeiro parâmetro para a função.

## Aula 05 - Detalhes do Prato - Vídeo 3

Nesta aula, o instrutor finaliza o projeto desenvolvendo a funcionalidade de exibir os detalhes de um prato. Ele importa o arquivo de estilos do prato, faz modificações no arquivo "index.tsx" e adiciona o HTML para exibir os detalhes do prato. O instrutor também utiliza classes de estilo importadas e a biblioteca classNames para estilizar os elementos condicionalmente. Ele menciona um problema relacionado ao tipo do prato e importa o arquivo "cardapio.json" para resolver esse problema. No final, o instrutor menciona um erro que ocorre ao acessar diretamente a página de detalhes de um prato e propõe uma solução utilizando o ID do prato através do hook useParams.

## Aula 05 - Usando o useParams - Vídeo 4

Nesta aula, o instrutor abordou a resolução de um problema relacionado à exibição de detalhes de um prato em uma página independente da sua origem. Foi feita uma alteração no código para buscar o prato pelo seu ID, utilizando a função find() do array cardapio. Também foi adicionada uma verificação para o caso em que o prato não é encontrado, retornando uma string vazia.

O instrutor também mencionou a necessidade de corrigir o botão de "Voltar", que não estava funcionando corretamente. Para isso, foi utilizado o hook useNavigate para obter a função de navegação, que é chamada no evento onClick do botão para voltar para a tela anterior.

Outro ponto abordado foi a organização do código, destacando a importância de manter as pastas e arquivos bem organizados. Foi sugerida a criação de uma pasta "types" para armazenar os tipos utilizados no projeto, centralizando a definição dos tipos em um único local. Além disso, o instrutor mostrou como reutilizar o código das tags e do header em diferentes partes do projeto, tornando o código mais limpo e legível.

No próximo vídeo, será abordado o reaproveitamento do código do header.

## Aula 05 - Refatorando tags - Vídeo 4

Nesta aula, o professor abordou duas pendências do site. A primeira é a falta de reutilização do header nos detalhes do prato, e a segunda é a semelhança da parte de tags com o cardápio. Para resolver essas questões, foram realizados os seguintes passos:

Foi criado um novo componente chamado "TagsPrato" dentro da pasta "components", onde foi colado o código referente às tags e feitas as devidas alterações para utilizar as props.

O componente "Item" foi substituído pelo componente "TagsPrato" nos arquivos "Item/index.tsx" e "Prato/index.tsx", passando as props do prato via spread operator.

Foram feitas alterações nos arquivos de estilos para remover as classes referentes às tags.

Após essas alterações, o site passou a reutilizar o header nos detalhes do prato e as tags foram estilizadas corretamente. No entanto, surgiram dois problemas: a falta da tela de "Not Found" quando um prato inexistente é acessado e a persistência do header mesmo nos detalhes do prato. Esses problemas serão abordados no próximo vídeo.

## Aula 05 - Nessa aula, você aprendeu como`:`

- Criar a rota pratos;
- Passar parâmetros na rota;
- Criar detalhes do prato;
- Utilizar o hook useLocation;
- Passar estados entre rotas;
- Refatorar tags.

## Aula 06 - Ajustes NotFound e Header

## Aula 06 - NotFound na tela de detalhes - Vídeo 1

Nesta aula, o instrutor discute o código CSS utilizado para estilizar o componente "Item" na tela de detalhes de um prato. Ele mostra como corrigir a lógica de exibição da página "Not Found" e explica a diferença entre os componentes "Navigate" e "NotFound" para redirecionar o usuário quando não há um prato válido. O instrutor também adiciona estilos ao componente "Item" na página de cardápio, explicando as alterações feitas no código CSS. Por fim, ele mostra como adicionar um evento de clique ao componente "Item" para navegar para a página de detalhes do prato correspondente.

## Aula 06 - Resolvendo o Header - Vídeo 2

Nesta aula, o instrutor aborda um problema em que o cabeçalho está aparecendo na página "not found" nos detalhes do prato. Ele apresenta duas formas de resolver esse problema, uma utilizando o react-router-dom e outra sem utilizá-lo. A primeira forma é movendo a rota da página padrão para a parte inferior, removendo-a do route principal. A segunda forma é utilizando o conceito de high order component e o children do React. Após realizar as alterações, o instrutor verifica que o cabeçalho não aparece mais na página "not found" e que o problema foi resolvido tanto com o react-router-dom quanto sem utilizá-lo.

## Aula 06 - Nessa aula, você aprendeu como`:`

- Acrescentar a tela NotFound na tela de detalhes;
- Utilizar o componente Navigate;
- Resolver o header.

## Aula 06 - Conclusão - Vídeo 3

Nesta aula do curso de React: conhecendo a biblioteca React Router, foram feitos ajustes nas páginas NotFound e Header. Foi ensinado como criar rotas em uma aplicação utilizando o react-router-dom, além de utilizar links e o hook useNavigate para navegar entre as páginas. Também foi abordado o uso do ESLint para garantir um código mais conciso e foram realizadas algumas refatorações. No final, foi recomendado explorar as atividades propostas e utilizar o fórum do curso para tirar dúvidas.
