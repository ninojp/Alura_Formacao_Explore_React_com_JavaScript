# Curso Alura React: gerencie estados globalmente com Context API

## Aula 01 - Entendendo a Context API

### Aula 01 - Apresentação - Video

Nesta aula de introdução ao curso de React, ministrado por Neilton Seguins, também conhecido como Nei, é apresentado o objetivo do curso, que é aprender a gerenciar estados globais de uma aplicação utilizando a Context API. Nei explica que o problema a ser resolvido é o "prop drilling", que ocorre quando os estados e funções são passados via props para outros componentes, gerando uma estrutura complexa e pouco eficiente. Serão utilizados hooks customizados e o hook useReducer para lidar com estados de forma mais personalizada. É necessário ter uma noção básica de React e conhecimento em JavaScript. Nei convida os espectadores a participarem da comunidade no Discord para interação com instrutores, monitores e outros estudantes.

### Aula 01 - Conhecendo a aplicação - Video 1

Nesta aula, o instrutor apresentou a aplicação Meteora, um e-commerce de moda casual. Ele mostrou a interface da aplicação, com a barra de navegação e os links para as diferentes páginas. No entanto, algumas páginas ainda não foram construídas e exibem um erro 404. O instrutor também destacou a funcionalidade de pesquisa e o ícone do carrinho de compras, que abre um modal com os produtos adicionados. Em seguida, ele explorou a estrutura do projeto no Visual Studio Code, mencionando as pastas e arquivos importantes. O arquivo "App.jsx" foi detalhado, mostrando os estados relacionados ao carrinho de compras e as funções para manipulá-los. O instrutor também abordou o problema do "prop drilling" e a necessidade de corrigi-lo. Na próxima aula, ele irá falar mais sobre o "prop drilling" e apresentar uma alternativa para lidar com esse problema.

### Aula 01 - Entendendo o prop drilling - Video 2

Nesta aula, foi discutido o problema do "prop drilling", que ocorre quando precisamos compartilhar estados entre componentes distantes. A solução para esse problema é a elevação de estado, onde definimos os estados no componente de nível mais alto e passamos para os componentes filhos via props. Foi apresentado um esquema exemplificando o prop drilling e comparado com a situação de pintar uma casa. A solução para esse problema é utilizar o Context API, que permite colocar as props em um lugar comum e torná-las acessíveis a todos os componentes. O próximo vídeo abordará mais sobre o Context API.

### Aula 01 - Funcionamento da Context API - Video 3

Nesta aula, o professor discute sobre o Context API, um recurso do React que permite compartilhar estados da aplicação entre componentes de forma mais eficiente. O Context API funciona como uma fonte de dados centralizada, onde os estados são definidos e podem ser acessados por todos os componentes. Para utilizar o Context API, é necessário definir um contexto e utilizar o componente Provider para compartilhar o contexto com os componentes filhos. O uso do Context API evita a necessidade de passar as propriedades manualmente para cada componente, tornando o código mais limpo e organizado.

### Aula 01 - Para saber mais: se aprofundando na Context API

Vamos pensar em um aplicativo de lista de tarefas, onde você tem diferentes seções para tarefas urgentes e não urgentes. Tem uma seção geral onde você consegue visualizar todas as tarefas mas tem também seções individuais onde você consegue ver as tarefas urgentes e não urgentes de forma separada. Porém, você deseja compartilhar a capacidade de marcar uma tarefa como concluída em ambas as seções.

Como garantir que, ao marcar uma tarefa como concluída em sua própria seção, ela também seja marcada como concluída na seção geral sem passar manualmente a informação entre os componentes?

Aqui entra a Context API do React. É como ter uma marcação global em suas tarefas, onde, ao marcar como concluída em um lugar, automaticamente afeta todos os outros lugares que exibem a mesma tarefa.

A Context API é uma maneira de compartilhar dados globalmente entre componentes sem a necessidade de passar propriedades manualmente. Ela ajuda a evitar a "prop drilling", tornando o compartilhamento de informações mais direto.

Quando Usar a Context API:  
Houver a necessidade de compartilhar informações ou estado entre componentes que estão distantes na árvore de componentes.
Evitar a "prop drilling" (passar propriedades através de vários níveis de componentes) se tornar impraticável ou confuso.

Dicas para Melhor Uso:  
Use a Context API para compartilhar dados que são verdadeiramente globais na aplicação.
Avalie a necessidade de re-renderização de componentes dependentes do contexto ao realizar atualizações.

Dê uma lida na [documentação](https://react.dev/learn/passing-data-deeply-with-context) para reforçar seus aprendizados.

Se você quiser dar um mergulho mais profundo nesses conceitos, recomendo que você acesse a [documentação do Context API](https://react.dev/learn/passing-data-deeply-with-context#before-you-use-context) clicando neste link e divirta-se!

### Aula 01 - Nessa aula, você aprendeu como`:`

Ocorre o problema de prop drilling em suas aplicações React.
O prop drilling pode ser prejudicial para seu código o tornando menos eficiente e difícil de manter.
Funciona a Context API do React.
A Context API ajuda a evitar o problema de prop drilling em suas aplicações.
Criar um contexto usando a Context API e como compartilhar ele por meio do Provider.

## Aula 02 - Explorando a Context API

### Aula 02 - Compartilhando o contexto - Video 1

Nesta aula, foi apresentada a Context API do React, uma alternativa para evitar o "prop drilling" em uma aplicação. Foi mostrado como criar um contexto utilizando a função createContext() do React e como definir o contexto em um local da aplicação que envolva o maior número de componentes possível. Também foi explicado como importar manualmente o Provider do contexto e como os componentes que são envolvidos pelo Provider têm acesso aos valores dos estados e funções definidos no contexto. Por fim, foi mencionado que os próximos passos serão definir os primeiros estados da aplicação dentro do contexto.

### Aula 02 - Lidando com estados - Video 2

Nesta aula, o instrutor explica como limpar o componente App.jsx, removendo os estados e funções que eram passados como props para as páginas Home e CarrinhoProvider. Em seguida, ele mostra como utilizar o BrowserRouter do React Router DOM para rotear as páginas e compartilhar o contexto com elas. O instrutor menciona que essa abordagem está relacionada ao princípio do SOLID, especificamente o princípio da responsabilidade única. Ele também menciona a ordem em que os componentes CarrinhoProvider e BrowserRouter devem ser utilizados. O instrutor mostra como definir os estados dentro do arquivo CarrinhoContext.jsx, utilizando o hook useState do React, e como compartilhar esses estados utilizando o Provider. Ele também mostra como consumir esses estados em outros componentes, removendo as props que eram passadas anteriormente. O instrutor menciona que os erros que surgirem serão abordados na próxima aula.

### Aula 02 - Consumindo o contexto - Video 3

Nesta aula, o instrutor aborda a correção de erros em um projeto React. Ele mostra como consumir um contexto em componentes, utilizando o hook useContext do React para recuperar os estados do contexto. Além disso, é ensinado como criar uma função para adicionar produtos ao carrinho, verificando se o produto já está no carrinho e incrementando a quantidade caso necessário. Também é mencionado que no próximo vídeo serão abordados erros relacionados aos componentes CarrinhoSuspenso e ListaProdutosCarrinho. Essas informações são úteis para solucionar problemas comuns em projetos React e utilizar o contexto para compartilhar estados entre componentes.

### Aula 02 - Resolvendo bugs - Video 4

Nesta aula, o instrutor aborda o problema do "Prop Drilling" durante a migração de uma aplicação. Ele mostra como remover as props não utilizadas em determinados componentes, utilizando o contexto para acessar o estado carrinho. Após algumas correções manuais, a aplicação passa a funcionar corretamente, exibindo os produtos no carrinho suspenso. O instrutor destaca o uso do contexto para recuperar o estado carrinho e a função adicionarProduto, eliminando a necessidade de passar props entre componentes. A função adicionarProduto será abordada nos próximos vídeos.

### Aula 02 - Para saber mais: Provider e Consumer

Você já ouviu falar em um jogo chamado Cities: Skylines? Um jogo de construção de cidades. Conforme sua cidade cresce, você deve cuidar dos prédios, distritos, linhas de transporte público, pistas e tudo o que for construído.

Agora Imagine, O Context API é como um centro de controle de tráfego, tornando a comunicação entre bairros mais suave e organizada.

Para compartilhar as informações do tráfego a gente cria um contexto com o createContext(). Este método cria um contexto e retorna dois componentes: o Provider e o Consumer. O Provider é como construir uma central de informações de tráfego no centro da cidade:

Para que as regiões da cidade possam acessar essa informação, usamos o Consumer. É como se cada rua tivesse uma tela que mostra a situação do tráfego:

Em termos teóricos, o createContext retorna um objeto com dois componentes: o Provider e o Consumer. O Provider é usado para envolver a parte da aplicação que fornece os dados, enquanto o Consumer é utilizado nos componentes que precisam acessar esses dados.

Agora, vimos que podemos usar o hook useContext nos componentes que precisam acessar esses dados. Imagine que o useContext é como um rádio para cada rua, sintonizado na frequência da central de informações de tráfego (Provider). Ambos servem para acessar o contexto, mas o useContext é mais conciso e pode tornar o código mais limpo, especialmente se tivermos muitas ruas para equipar. O Consumer pode criar um código mais aninhado, enquanto que o useContext não.

Em resumo, escolher entre o Consumer e o useContext depende do contexto (sem trocadilhos). Se a legibilidade é crucial, o useContext pode ser a escolha mais elegante, enquanto o Consumer é uma opção mais explícita em casos onde a clareza é prioritária.

Se você quiser se aprofundar mais no uso do useContext() eu recomendo que você acesse a [documentação do próprio React](https://react.dev/reference/react/useContext).

### Aula 02 - Para saber mais: SOLID no React

Primeiro que SOLID é um conceito de POO (Programação Orientada a Objetos) muito forte em linguagens orientadas a Objetos como Java e C#. Cada letra da sigla SOLID é a inicial de um dos princípio que regem a POO, para criarmos um código mais consistente, limpo e saudável a longo prazo. Se liga:

S — Single Responsiblity Principle (Princípio da responsabilidade única)
O — Open-Closed Principle (Princípio Aberto-Fechado)
L — Liskov Substitution Principle (Princípio da substituição de Liskov)
I — Interface Segregation Principle (Princípio da Segregação da Interface)
D — Dependency Inversion Principle (Princípio da inversão da dependência)

Calma que o nosso dev de boina favorito, Vinicius Neves, fez uma série de artigos em um blog muito popular na comunidade explicando cada princípio e como eles podem ser adaptados e usados no Front-end, principalmente em aplicações React. Confere aí:

[Princípio da responsabilidade única](https://marcosviniciosneves.medium.com/solid-em-react-entendendo-o-single-responsibility-principle-srp-4a2028b35c41)
[Princípio Aberto-Fechado](https://marcosviniciosneves.medium.com/solid-em-react-princ%C3%ADpio-do-aberto-fechado-ocp-dc7bdbfbc62c)
[Princípio da substituição de Liskov](https://marcosviniciosneves.medium.com/solid-em-react-de-olho-na-substitui%C3%A7%C3%A3o-de-liskov-180c9a3e9877)
[Princípio da Segregação da Interface](https://marcosviniciosneves.medium.com/solid-em-react-o-princ%C3%ADpio-da-segrega%C3%A7%C3%A3o-de-interface-979954315998)
[Princípio da inversão da dependência](https://marcosviniciosneves.medium.com/solid-em-react-explorando-a-invers%C3%A3o-de-depend%C3%AAncia-145131bb0ad6)

### Aula 02 - O que aprendemos?

Nessa aula, você aprendeu como:

Envolver os componentes e páginas com o Contexto de sua aplicação.
Aplicar um dos princípios do SOLID em suas aplicações React.
Criar e compartilhar os estados de dentro de seu contexto para fora dele através da prop value do Provider.
Consumir os estados de sua aplicação fora do contexto em outros componentes e páginas com o uso do hook useContext().
Criar a função de adicionarProduto ao carrinho.
Debugar seu código através de erros no console e entendeu mais um pouco sobre como a prop drilling é um grande problema.

## Aula 03 - Criando Funções do Carrinho API

### Aula 03 - Criando um hook customizado - Video 1

Nesta aula, aprendemos como criar um hook customizado no React. Um hook customizado é uma forma de reaproveitar lógicas complexas em diferentes componentes da nossa aplicação. Para criar um hook customizado, criamos um novo arquivo na pasta "hooks" chamado "useCarrinhoContext.js". Dentro desse arquivo, importamos o hook useContext do React e o CarrinhoContext que criamos anteriormente. Em seguida, definimos a função useCarrinhoContext que utiliza o useContext para acessar o carrinho e a função setCarrinho do CarrinhoContext. Também adicionamos a função adicionarProduto que já havíamos criado anteriormente. Por fim, exportamos as informações do carrinho, a função setCarrinho e a função adicionarProduto para que possam ser consumidas por outros componentes. Com o hook customizado criado, podemos agora utilizá-lo nos componentes que precisam das funcionalidades de adicionar e remover produtos do carrinho.

### Aula 03 - Melhorando a lógica das funções - Video 2

Nesta aula, o instrutor ensina como adicionar e remover produtos em um carrinho de compras em um aplicativo utilizando a Context API do React. Ele mostra como importar o hook useCarrinhoContext no componente de produtos e utiliza a função adicionarProduto para adicionar produtos ao carrinho. O instrutor identifica um problema na função adicionarProduto e na função removerProduto e decide abstrair essa lógica para uma nova função chamada mudarQuantidade. Ele utiliza o método map para percorrer o carrinho e alterar a quantidade do produto desejado. Após implementar essa nova função, ele verifica no navegador se as funções de adicionar e remover produto estão funcionando corretamente. Em resumo, nesta aula aprendemos como adicionar e remover produtos em um carrinho de compras e corrigir problemas relacionados à duplicação de produtos.

### Aula 03 - Utilizando o hook customizado - Video 3

Nesta aula, o instrutor discute um problema ao adicionar produtos em um carrinho suspenso em uma aplicação. Ele explica que as funções necessárias não estavam sendo utilizadas corretamente e que é preciso recuperá-las de um hook customizado. O instrutor mostra o código do componente ItemCarrinhoSuspenso e explica que as funções adicionarProduto e removerProduto serão recuperadas do hook useCarrinhoContext. Ele faz a modificação no código, corrige um erro na função mudarQuantidade e testa novamente a adição de produtos no carrinho suspenso. O instrutor menciona que a função para remover produtos do carrinho será abordada no próximo vídeo.

### Aula 03 - Deletando produtos - Video 4

Nesta aula do curso "React: gerencie estados globalmente com Context API", o instrutor aborda a implementação da função de remover produtos do carrinho de compras em um aplicativo utilizando React e Context API. Ele explica como criar a função removerProdutoCarrinho(), que utiliza o método filter() para criar uma nova lista de produtos do carrinho, excluindo o produto com o ID especificado. A função é exportada para que outros componentes possam utilizá-la. No componente ItemCarrinhoSuspenso, a função é importada juntamente com as funções adicionarProduto e removerProduto. O instrutor demonstra o funcionamento da função no aplicativo, onde ao clicar no ícone de lixeira ao lado de um item, o item é removido do carrinho e a atualização é refletida automaticamente. Ele também menciona que ainda falta implementar a exibição do valor total e da quantidade total de produtos no carrinho, que será abordado na próxima aula.

### Aula 03 - Para saber mais: contextos aninhados

Exemplo Biblioteca...  
Às vezes, a biblioteca precisa compartilhar informações globais, como a política de empréstimo, enquanto cada prateleira precisa saber sobre informações específicas dos livros que contém. Usar um único contexto para tudo pode tornar o código confuso e menos modular.

Aqui, o Livro tem acesso tanto às informações globais da biblioteca quanto às informações específicas da prateleira onde está localizado. Essa abordagem modulariza o código, facilitando a manutenção e compreensão.

Só que para que o nosso componente Book conheça o contexto da Biblioteca e o contexto de Prateleira ele deve estar envolvo nos componentes que provem esses contextos da seguinte maneira:

```jsx
function App() {
  return (
    <BibliotecaProvider>
      <PrateleiraProvider>
        <Book/>
      </PrateleiraProvider>
    </BibliotecaProvider>
  );
}
```

Note que os contextos da nossa aplicação estão aninhados, e para eu conhecer o contexto de prateleira eu devo conhecer também o de biblioteca, já que ele é mais geral/global.

Quando usar contextos aninhados:
Quando há diferentes níveis de hierarquia: Use contextos aninhados quando a hierarquia dos componentes reflete a necessidade de compartilhar dados em diferentes níveis de escopo.
Quando existem dados globais e locais: Se você tem dados que são relevantes para toda a aplicação (global) e dados mais específicos para certas partes (local), contextos aninhados oferecem uma maneira organizada de gerenciar essas informações.
Em resumo, usar contextos aninhados no React com a Context API é uma prática eficaz para lidar com diferentes níveis de escopo de dados em sua aplicação, proporcionando organização e modularidade. Isso é especialmente útil quando você tem informações globais e locais que precisam ser compartilhadas entre diferentes partes do seu aplicativo.

Se quiser se aprofundar mais nesse assunto, recomendo ler a antiga [documentação do React](https://pt-br.legacy.reactjs.org/docs/context.html#consuming-multiple-contexts) sobre Contextos Aninhados.

### Aula 03 - Para saber mais: quando criar hooks customizados?

Quando usar Hooks Customizados:
Quando a lógica é reutilizável: Use Hooks Customizados quando tiver lógica específica que pode ser compartilhada entre vários componentes. Isso promove a reutilização de código.
Quando você precisa de mais controle: Se a lógica envolve estados, efeitos ou outras funcionalidades complexas, os Hooks Customizados oferecem maior controle e modularidade.
Quando você quer manter seus componentes simples: Use Hooks Customizados para manter seus componentes mais limpos e focados, delegando lógica específica para funções especializadas.
Em resumo, use Hooks Customizados no React quando precisar encapsular e reutilizar lógica específica em diferentes partes da sua aplicação. Eles são como ferramentas especializadas que facilitam a gestão de funcionalidades específicas, tornando seu código mais limpo, modular e fácil de manter. Se quiser saber mais, já sabe onde mergulhar né? A [documentação do React](https://react.dev/learn/reusing-logic-with-custom-hooks#) tá repleta de exemplos, casos de uso e mais conceitos sobre hooks customizados.

### Aula 03 - Nessa aula, você aprendeu como`:`

Criar um hook customizado para isolar a lógica complexa das funções que manipulam o estado do carrinho.
Criar as funções de remover e deletar produtos no carrinho. E ainda descobriu como refatorar seu código isolando ainda mais as responsabilidades ao criar a função de mudarQuantidade.

## Aula 04 - Exibindo total e quantidade no Carrinho API

### Aula 04 - React Context Dev Tools - Video 1

Nesta aula, o instrutor aborda a implementação de funcionalidades relacionadas ao carrinho de compras em uma aplicação chamada Meteora. Ele apresenta a extensão React Context DevTools, que permite visualizar os contextos da aplicação, os estados definidos e a lógica. O instrutor mostra como adicionar a extensão ao navegador e como utilizá-la para visualizar o contexto do carrinho. Além disso, ele explica como personalizar o nome do contexto do carrinho no código da aplicação. Com a extensão, é possível ver os dados do carrinho, como ID, título, descrição, preço e quantidade dos produtos. O instrutor também demonstra como adicionar um novo produto ao carrinho e como a extensão já mostra a atualização da quantidade de itens. No próximo vídeo, será abordada a criação dos estados de quantidade e valor total para exibir essas informações dentro do carrinho e na página de carrinho.

### Aula 04 - Adicionando dois novos estados - Video 2

