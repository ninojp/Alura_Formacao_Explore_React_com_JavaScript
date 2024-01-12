# Curso Alura React: como os componentes funcionam

## Aula 01: React: como os componentes funcionam

### Aula 01: Apresentação - Video 1

Nesta aula, o instrutor Luiz Fernando dá as boas-vindas e introduz o conteúdo do curso. O objetivo é incrementar o projeto Organo, adicionando uma nova funcionalidade que permite criar um novo time. Será abordada a refatoração de componentes e explicado o uso de states e props no React. Também serão explicados conceitos como "one way data binding", declaratividade, biblioteca vs framework, e a diferença entre o DOM e o virtual DOM. O instrutor promete desenvolver o código ao longo do curso e se despede, prometendo encontrá-los nos próximos vídeos.

### Aula 01: Clonando o repositório - Video 2

Nesta aula, o instrutor dá as boas-vindas e explica que o objetivo principal do curso é entender como o React funciona. Ele destaca que irão explorar recursos como props e states, além de discutir por que nem tudo pode ser atualizado no próprio React e por que ele é considerado uma biblioteca. O instrutor também mostra como clonar um projeto utilizando o Git e o GitHub e como abrir a pasta do projeto no VS Code.

### Aula 01: Para saber mais: Git e Github

Git  
Git é a ferramenta utilizada pelos desenvolvedores para controlar as versões do seu código:
Ao invés de você ter pastas diferentes com códigos parecidos, você terá branches com códigos parecidos!

Branches seriam uma representação dessas pastas que você criaria sem o Git, e caso você queira ir para uma destas branches, você pode utilizar o comando git checkout:

Github  
O Github nada mais é do que um site que guarda projetos git! Estes projetos são chamados de repositórios, e você pode ter repositórios públicos ou privados.Todos os repositórios que você tem acesso podem ser clonados ou “forkados”. E o que significa clone ou fork?

clone  
Com o clone, você copia o código para a sua máquina, porém o remote permanece o da pessoa que você clonou, ou seja, se você copiar o código do React por exemplo, o remote é o link do código real, do React. Como você não tem permissão para enviar código para o repositório oficial do React, fazer isto seria negado.

fork  
Aí que entra o fork! O fork faz uma cópia daquele repositório no seu Github! Ele não copia o código para a sua máquina, mas após esta cópia, você poderá fazer um clone do seu repositório (o repositório copiado via fork) e agora o remote estará apontando para o seu Github, não mais para o Github oficial!

### Aula 01: Instalando dependências - Video 3

Nesta aula, o instrutor explica como importar um projeto do GitHub e instalar as dependências necessárias. Ele mostra como utilizar o Terminal no VSCode e o comando "npm start" para executar o projeto. No entanto, ocorre um erro relacionado ao "react-scripts". O instrutor mostra o arquivo "package.json" do projeto, onde estão as dependências. Ele explica que é necessário instalar todas as dependências para o projeto funcionar corretamente. O instrutor também menciona que o "npm" é o gerenciador de pacotes do Node e facilita a adição de dependências. Após a instalação, a pasta "node_module" é criada com todas as dependências. Por fim, o instrutor executa novamente o comando "npm start" e o projeto é exibido corretamente.

### Aula 01: Nessa aula, você aprendeu

Como clonar um projeto;
A diferença entre clone e fork;
Como instalar dependências de um projeto;
Como rodar um projeto.

## Aula 02: O Que são Componentes

### Aula 02: Biblioteca x Framework - Video 1

Nesta aula, o instrutor explica como o projeto está estruturado e como fazer alterações nele. Ele mostra os componentes importados no arquivo "App.js" e explica a diferença entre bibliotecas e frameworks. O instrutor também menciona o uso do DOM real e do Virtual DOM, além de mostrar como o componente App retorna uma estrutura semelhante a HTML. Ele destaca o uso do .map() para renderizar cada colaborador dentro de um time. No próximo vídeo, serão abordadas novas funcionalidades para o projeto.

### Aula 02: Criando aoDeletar - Video 2

Nesta aula, o instrutor explica como adicionar a funcionalidade de deletar um colaborador em um componente chamado "Colaborador". Ele mostra como renderizar o componente dentro de um loop utilizando a função map() e adiciona um bloco de código dentro do loop para verificar se o componente está sendo renderizado corretamente. Em seguida, ele explica como passar a propriedade "aoDeletar" para o componente "Colaborador" e como receber essa propriedade no componente "Time". As propriedades são como encaixes entre os componentes, permitindo a comunicação entre eles.

### Aula 02: Criando o botão deletar - Video 3

Nesta aula, o instrutor explica como adicionar a funcionalidade de exclusão de colaboradores em um aplicativo React. Ele mostra como passar a função "deletarColaborador" como propriedade para o componente "Colaborador" e como essa função é chamada quando o botão "deletar" é clicado. O instrutor também demonstra boas práticas de organização de código e a importância de garantir que as propriedades sejam passadas corretamente entre os componentes.

### Aula 02: Importando ícone de deletar - Video 4

Nesta aula, o instrutor explica como adicionar um ícone de exclusão ao botão de deletar um colaborador em um aplicativo React. Ele utiliza a biblioteca React Icons para importar o ícone desejado no componente Colaborador. O instrutor também mostra como aumentar o tamanho do ícone e como adicionar a funcionalidade de deletar o colaborador ao clicar no ícone. Ele destaca a importância de utilizar as chaves no import para tornar o código mais semântico e fácil de ler. No final, o resultado é um botão de deletar com um ícone de exclusão maior e a função de deletar colaborador funcionando corretamente.

### Aula 02: Nessa aula, você aprendeu

Como criar uma nova prop;
Como passar esta prop para inúmeros componentes;
O que é uma closure e como utilizá-la a seu favor;
Como instalar novas dependências na sua aplicação;
Diferença entre export e export default.

## Aula 03: Como o React vê um componente

### Aula 03: Criando input de cor - Video 1

Nesta aula, o instrutor discute a implementação de uma funcionalidade em um projeto utilizando React. Ele mostra como adicionar um input de cor em um componente chamado "Time" e explica a diferença entre as propriedades className e class no React. O instrutor também ensina como criar uma classe CSS para o input de cor e torná-lo controlado, utilizando as propriedades value e onChange. Além disso, ele destaca a importância de utilizar o estado (State) para controlar a cor do time e mostra como transformar a constante "times" em um estado para refletir corretamente a mudança de cor no componente.

### Aula 03: Criando o state times - Video 2

Nesta aula, o instrutor aborda a necessidade de criar um State para lidar com mudanças em um componente React. Ele explica como transformar o time em um estado utilizando o useState do React. Além disso, ele mostra como criar uma função específica para mudar a cor do time e utiliza o método map para percorrer todos os times e atualizar a cor secundária do time selecionado. Por fim, ele mostra como utilizar o estado controlado pelo React para atualizar a cor dos cards do time ao selecionar uma cor no input.

### Aula 03: Mudando o background - Video 3

Nesta aula, o instrutor aborda a necessidade de alterar a cor de fundo da área dos times em um aplicativo React. Ele mostra como selecionar todas as ocorrências da corPrimaria e corSecundaria no código e deletá-las. Em seguida, ele explica como utilizar a propriedade mudarCorDoTime para alterar as cores dos times. Por fim, ele utiliza o pacote hex-to-rgba para alterar a opacidade do fundo dos times. O instrutor menciona que o React utiliza o Virtual DOM para atualizar apenas as partes específicas que foram alteradas, tornando o aplicativo mais performático.

### Aula 03: Para saber mais: Virtual DOM

Virtual DOM é algo vital dentro do React, e é uma das coisas que fez o React ser tão famoso.Você provavelmente deve ter percebido como o React é inteligente e com rapidez ele atualiza o DOM? Então, isto tem tudo a ver com Virtual DOM!

Lembra que os componentes são vistos como objetos no React? O Virtual DOM armazena estes objetos, e quando algo muda dentro desta árvore de objetos, o React compara o DOM real com o que a gente quer que mude (que a gente chama de candidato) e atualiza apenas o que for mudado!

Neste momento o React tem uma “cópia” da árvore antes do evento e o “candidato”, que é a árvore com as mudanças após o evento, e compara o que deve ser atualizado por causa do evento, e a partir daí ocorre as mudanças!

### Aula 03: Nessa aula, você aprendeu

O que é Virtual DOM;
Como o React escuta uma mudança e porque precisamos de um state para isto;
Diferença de imperatividade e declaratividade.

## Aula 04: Criando Funcionalidades

### Aula 04: Criando ids - Video 1

Nesta aula, o professor aborda a necessidade de criar identificadores únicos para os times e colaboradores em um projeto React. Ele explica que o atributo "nome" não é único o suficiente e pode causar problemas no futuro. Para resolver esse problema, o professor sugere a utilização do pacote externo UUID, que gera identificadores únicos. Ele mostra como instalar o pacote através do NPM e como importá-lo no código. Em seguida, o professor ensina a utilizar o UUID para gerar identificadores únicos para os times e colaboradores, substituindo o atributo "nome" pelo "id". Ele também mostra como utilizar o UUID na função "mudarCorDoTime" para validar a mudança de cor do time. O professor explica que o React utiliza o conceito de "one way data binding", ou seja, a troca de informações entre componentes acontece apenas do componente-pai para o componente-filho. Ele justifica essa abordagem como sendo mais eficiente em termos de performance. Por fim, o professor ressalta a importância de compreender os conceitos abordados para finalizar a funcionalidade de "deletar" e aplicá-los na prática.

> Alguns outros frameworks, como Angular por exemplo, utilizam o two way data binding, ou "ligação de mão-dupla entre dados", que literalmente significa a troca de informação entre componentes, também chamados de módulos.  
> Porém o React não trabalha desta forma, e é one way data binding, ou "ligação de mão-única entre dados" em que só envia de pai para filho.

### Aula 04: Deletando um colaborador - Video 2

Nesta aula, o instrutor aborda a implementação da funcionalidade de deletar colaboradores em um aplicativo React. Ele explica como verificar se a lista de colaboradores é um estado (State) para poder alterá-la no navegador. Em seguida, mostra a função deletarColaborador() que, por enquanto, apenas exibe uma mensagem no console. O instrutor também mostra como os colaboradores são renderizados na tela, utilizando os componentes Time e Colaborador. Destaca que o componente Colaborador recebe uma propriedade aoDeletar, que será utilizada para deletar o colaborador quando o botão "deletar" for clicado. Mostra o código do componente Colaborador e explica que o onClick do botão "deletar" está chamando a função aoDeletar passando o id do colaborador como parâmetro. Em seguida, volta para o componente App e mostra como a função deletarColaborador() recebe o id como parâmetro e utiliza o setColaboradores() para filtrar a lista de colaboradores e excluir o colaborador com o id informado. Destaca a necessidade de utilizar uma arrow function no onClick do botão "deletar" para que a função aoDeletar seja executada apenas quando o botão for clicado. Por fim, mostra o resultado no navegador, onde é possível deletar os colaboradores individualmente.

### Aula 04: Para saber mais, alternativas para passar parâmetros

No vídeo anterior, tivemos que transformar um evento em uma arrow function para poder passar o 'id' do colaborador como parâmetro, mas por que precisamos fazer isto? não posso simplesmente fazer onClick={aoDeletar(id)}?

No caso acima, o aoDeletar será executado assim que o componente renderizar (pode tentar!) e isto não é o que esperamos! O onClick espera uma função, e ele recebe a execução dessa função, por isto ele executa assim que renderizado!

Para resolver este problema, temos duas formas mais comuns, com a arrow function ou criando uma função no seu componente!

Arrow Function  
const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (<AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />)
}
Criando uma função  
const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    function deletarColaborador() {
      aoDeletar(colaborador.id);
    }
    return (<AiFillCloseCircle size={25} className="deletar" onClick={deletarColaborador} />)
}

### Aula 04: Criando um time - Video 3

Nesta aula do curso "React: como os componentes funcionam", foram desenvolvidas duas features em um projeto. A primeira permite a mudança da cor do time de colaboradores, enquanto a segunda permite a exclusão dos colaboradores. Em seguida, foi trabalhado o desenvolvimento de uma nova feature para criar um novo time, aplicando os conceitos aprendidos anteriormente. No código apresentado, foram feitas alterações nos arquivos "App.js" e "index.js" do componente "Formulario" para adicionar o formulário de criação de um novo time. Também foi criada a função "cadastrarTime" para adicionar o novo time ao array de times existente. Ao criar um novo time e selecioná-lo ao adicionar um colaborador, o colaborador foi adicionado ao time corretamente.

### Aula 04: Nessa aula, você aprendeu

A diferença entre two-way data binding e one-way data binding;
Por que o React utiliza one-way data binding;
Por que utilizar id é importante no React.

## Aula 05: 

### Aula 05:  - Video 1

