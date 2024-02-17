# Curso Alura React: integrando seu projeto React com APIs

Já dizia o Linus Torvalds, criador do linux: “Falar é fácil, me mostre o código”.

## Aula 01 - Aquela sobre Alfood

### Aula 01 - Apresentação - Vídeo 1

Nesta aula, o instrutor propõe o desafio de transformar um site estático em um CMS (Sistema de Gerenciamento de Conteúdo) com uma área administrativa. O objetivo é permitir que o usuário cadastre e gerencie restaurantes e pratos de forma autônoma. Para isso, será utilizada uma API que estará rodando na porta 8000 e a biblioteca Axios para realizar requisições HTTP. O resultado final será um site dinâmico, onde o usuário poderá cadastrar novos restaurantes e pratos sem a necessidade de um desenvolvedor.

### Aula 01 - Iniciando o projeto - Vídeo 2

Nesta aula, o instrutor apresenta o projeto Alfood, uma aplicação estática que não possui conteúdo dinâmico. Ele mostra como executar a aplicação e analisa o código-fonte, destacando a necessidade de conectar a aplicação a uma API para permitir a interação dinâmica com os dados dos restaurantes e pratos. O instrutor também demonstra como adicionar um novo restaurante e um prato na lista, mas ressalta que esse processo manual seria trabalhoso e pouco prático. O objetivo é configurar e utilizar uma API para trazer dinamismo para a aplicação.

### Aula 01 - Iniciando a API - Vídeo 3

Precisamos ter o Docker instalado e rodando na máquina e rodar dois comandos. O primeiro deles é o:

> docker-compose build:  
Ele vai baixar as imagens do Docker que ele precisa, vai configurar todo o container da nossa aplicação e, quando eu terminar, ele vai estar disponível para fazermos um:
> docker-compose up.
Ele vai executar, rodar(subir) a nossa API que esta dentro do container que acabamos de contruir(build).  
> DEU UM ERRO ao executar o commando docker-compose build: Erro ao instalar o ruamel.yaml.clib 0.2.7
> Acabei resolvendo mudando a versão dentro do Dockerfile (resposta do forum alura)
> de
> FROM python:3
> pra
> FROM python:3.9.0

Nesta aula, o instrutor começa explicando como acessar a documentação do Axios e a API de restaurantes. Ele mostra como baixar a API e executá-la usando o Docker. Em seguida, ele acessa a documentação da API no navegador e demonstra como fazer uma simulação de requisição para obter informações sobre pratos e restaurantes.

O instrutor também menciona a necessidade de conectar o React com a API e mostra como instalar o Axios usando o npm. Ele faz uma breve introdução sobre o Axios, uma biblioteca muito utilizada para fazer requisições a APIs, e mostra um exemplo de como obter dados usando o Axios.

O instrutor explica que as requisições com Axios são assíncronas e podem levar diferentes tempos de resposta, além de poderem falhar. Ele mostra como tratar as respostas de sucesso e erro usando os métodos .then e .catch.

Por fim, o instrutor conclui que agora que a API está rodando e o Axios está instalado, eles estão prontos para começar a obter a lista de restaurantes dinamicamente.

Resumindo, nesta aula o instrutor ensina como acessar a documentação do Axios e da API de restaurantes, como instalar o Axios usando o npm, como fazer requisições assíncronas com o Axios e como tratar as respostas de sucesso e erro.

### Aula 01 - Obtendo restaurantes da API - Vídeo 4

Nesta aula, o instrutor ensina como implementar uma lista de restaurantes dinâmica em um aplicativo React. Ele explica como fazer uma requisição à API para obter os dados dos restaurantes e exibi-los no componente. O instrutor utiliza o hook useEffect para fazer a requisição quando o componente é montado. Ele utiliza o Axios para fazer a requisição à API e exibe a resposta no console. Em seguida, ele utiliza o useState para armazenar os dados dos restaurantes e atualizar o estado. Ao atualizar o estado, os dados dos restaurantes são exibidos na tela. O instrutor ressalta que ainda é necessário implementar a paginação para exibir os demais restaurantes.

### Aula 01 - Paginação devidamente tratada - Vídeo 5

Nesta aula, o instrutor aborda a implementação da paginação na exibição da lista de restaurantes em um aplicativo chamado Alfood. Ele explica como fazer requisições à API para obter as próximas páginas de dados, utilizando o campo "next" na resposta da API. O instrutor também mostra como criar uma interface chamada "IPaginacao" para representar a paginação e como utilizar essa interface ao fazer a requisição à API. Além disso, ele ensina como implementar a lógica de exibição do botão "ver mais" para carregar as próximas páginas de dados. Por fim, o instrutor destaca que a lógica de paginação implementada permite que a lista cresça como um scroll infinito, baseado na interação do usuário.

### Aula 01 - useEffect e requisições HTTP

O useEffect é um hook do React que geralmente utilizamos para executar requisições para outras aplicações.  
O useEffect é executado no início do ciclo de vida do componente quando não recebe nenhuma dependência. Dessa forma, podemos executar requisições uma vez, mesmo que o componente seja renderizado novamente.

Componentes são funções JavaScript e, por isso, quando um componente é atualizado, a função é executada. Com o useEffect, podemos deixar para que o React gerencie as execuções, tornando possível executar a requisição apenas uma vez.

### Aula 01 - O que aprendemos nesta aula?

- Baixamos e configuramos as dependências do Alfood;
- Utilizamos o swagger para entender como a nova API funciona;
- Instalamos e preparamos o axios;
- Fizemos requisições GET, para listar pratos e restaurantes.

## Aula 02 - Aquela sobre o Admin Alfood

### Aula 02 - Preparando a administração - Vídeo 1

Comando para instalação da biblioteca [MUI](https://mui.com/material-ui/getting-started/) (Material UI):

> npm install @mui/material @emotion/react @emotion/styled

Nesta aula, o instrutor explica sobre a necessidade de desenvolver uma área administrativa para o projeto Alfood, onde o usuário poderá cadastrar, editar e deletar restaurantes e pratos. Ele sugere o uso da biblioteca MUI para facilitar o desenvolvimento da interface do usuário e fornece as instruções para instalação e configuração do MUI no projeto.

### Aula 02 - Listando restaurantes - Vídeo 2

Nesta aula, o instrutor ensina como construir uma área administrativa para um aplicativo utilizando o MUI (Material-UI) no VS Code. Ele cria um novo caminho e um novo componente chamado "AdministracaoRestaurantes.tsx". Utilizando os componentes do MUI, ele cria uma tabela de restaurantes com os componentes TableContainer, Table, TableHead, TableBody, TableRow e TableCell. Ele também faz uma requisição utilizando o axios para obter a lista de restaurantes da API e exibe essa lista na tabela. O próximo passo será adicionar a opção de editar ou excluir um restaurante existente e permitir a adição de novos restaurantes.

### Aula 02 - Cadastrando restaurantes - Vídeo 3

Nesta aula, o instrutor ensina como criar um formulário para cadastrar restaurantes em uma lista. Ele mostra como capturar o evento de submissão do formulário, utilizar o hook useState para armazenar o valor digitado no campo de texto e fazer uma requisição POST para uma API utilizando a biblioteca axios. Além disso, ele menciona a necessidade de implementar as operações de edição e exclusão dos restaurantes.

### Aula 02 O que aprendemos nesta aula`:`

- Instalamos e utilizamos a biblioteca MUI;
- Implementamos a listagem de restaurantes realizando uma requisição GET;
- Criamos a rotina de cadastro de restaurantes com o verbo HTTP POST.

## Aula 03 - Aquela sobre PUT e DELETE

### Aula 03 - Editando restaurantes - Vídeo 1

Nesta aula, o instrutor ensina como implementar a funcionalidade de edição de restaurantes em um sistema utilizando React. Ele mostra como criar um link para um formulário específico de um restaurante, com base no seu ID, utilizando a biblioteca react-router-dom. O instrutor também explica como capturar o ID da URL usando o useParams e fazer uma requisição GET para obter os dados do restaurante correspondente utilizando o Axios. Em seguida, ele mostra como implementar a funcionalidade de atualização do restaurante utilizando o método PUT da API, verificando se o ID está presente nos parâmetros da URL. Ele também ensina como enviar os dados do restaurante no corpo da requisição e exibir uma mensagem de sucesso após a atualização.

### Aula 03 - Deletando restaurantesa - Vídeo 2

Nesta aula, o instrutor ensina como implementar a funcionalidade de exclusão de restaurantes em uma API utilizando React. Ele mostra como adicionar um botão "Excluir" em uma tabela, fazer a requisição de exclusão utilizando o Axios e atualizar a lista de restaurantes após a exclusão. O instrutor também menciona que ocorreu um erro de CORS, mas foi corrigido. Além disso, ele destaca que o ciclo completo do CRUD de restaurantes foi implementado e que serão feitas melhorias no formulário de cadastro.

### Aula 03 - Para saber mais: verbos HTTP

Agora, nós fechamos o ciclo da administração de restaurantes:

LISTA (GET)
DETALHE (GET por id)
CADASTRO (POST)
EDIÇÃO (PUT)
DELEÇÃO (DELETE)
Tudo isso usando o protocolo HTTP, que é uma das bases para internet como a gente conhece. Pensando no perfil Dev em T e em mergulhos mais profundos, fica aqui o link para o [curso sobre HTTP](https://cursos.alura.com.br/course/http-fundamentos).

Se você já conhece o protocolo e quer saber ainda mais, estou contigo porque eu também sou muito curioso! Fica [aqui um link](https://www.alura.com.br/artigos/rest-principios-e-boas-praticas) para um artigo sobre o padrão REST, que é o utilizado na API atual.

E não é só isso! Nós fizemos a leitura da API utilizando o [Swagger, e aqui](https://cursos.alura.com.br/course/swagger-documentando-apis) você consegue entender como ele funciona por debaixo dos panos.

### Aula 03 - Para saber mais: parâmetros em requisições GET

Quando cadastramos ou editamos um restaurante, enviamos dados do front-end para o back-end dessa forma:

```JavaScript
...codigo omitido
if (parametros.id) {
    axios.put(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`, {
        nome: nomeRestaurante
    })
```

O axios recebe como primeiro parâmetro o endereço para onde faremos a requisição. Já o segundo argumento é um objeto literal que será transformado em json e enviado no corpo da requisição.

Na listagem de restaurantes (v1), podemos passar como parâmetro um campo chamado search, para realizar uma busca e um outro campo chamado ordering para indicarmos qual propriedade queremos utilizar para ordenar a lista (no caso de restaurantes, podemos fazer isto utilizando o campo id ou o campo nome).

E como fazer isso com o axios?

Bom, podemos fazer isso de duas formas. Podemos concatenar direto na url, dessa forma;

```JavaScript
axios.get<IPaginacao<IRestaurante>>('http://localhost:8000/api/v1/restaurantes/?ordering=nome&search=neo')

Ou, de uma forma mais elegante:

axios.get<IPaginacao<IRestaurante>>('http://localhost:8000/api/v1/restaurantes/', {
    params: {
    ordering: 'nome',
    search: 'neo'
    }
})
```

### Aula 03 - O que aprendemos nesta aula`:`

- Realizamos requisições utilizando os verbos PUT e DELETE;
- Enviamos parâmetros em requisições GET;
- Montamos um formulário de busca de restaurantes.

## Aula 04 - Aquela sobre Refatoração

### Aula 04 - Layout na régua - Vídeo 1

Nesta aula, o instrutor ensina como melhorar o layout de um formulário utilizando o VS Code e o Material-UI. Ele utiliza o componente Typography para adicionar um título ao formulário e o componente Box para criar um layout mais agradável, alinhando os elementos no centro da página. O instrutor também menciona a utilização do componente Box como um formulário, permitindo a captura do evento Submit. Ele faz alterações nos componentes input e button, adicionando propriedades como fullWidth e sx. O instrutor destaca a importância da validação HTML, marcando o TextField como required. Por fim, ele menciona a repetição de URLs ao utilizar o pacote Axios e propõe refatorar o código para configurar uma instância do Axios com as configurações comuns a todas as requisições.

### Aula 04 - Refatorando o axios - Vídeo 2

Nesta aula, o instrutor discute a importância de melhorar a experiência do usuário e dos desenvolvedores front-end. Ele implementa a validação do formulário para evitar o cadastro de restaurantes com nome em branco. Além disso, ele refatora o código do Axios, criando uma instância única com configurações padrão em um arquivo separado. Essa refatoração permite que a URL base seja facilmente alterada no futuro, sem a necessidade de corrigir em vários lugares diferentes. O instrutor destaca que ainda há muito mais a ser feito em relação à área administrativa do projeto.

### Aula 04 - Para saber mais: componentes MUI

Existem vários componentes incríveis disponíveis no [MUI](https://mui.com/material-ui/all-components/), e vamos olhar alguns mais de perto para matar a curiosidade de como eles funcionam:

Tipografia
A tipografia apresenta o seu conteúdo da forma mais clara e eficiente possível.

Links
O componente Link nos permite personalizar elementos de âncora (tags a). E até mesmo podemos utilizar em conjunto com o do react-router-dom.

Paper
Nesse componente do Material Design, as propriedades físicas de um papel são traduzidas para a tela.

Container
É o elemento de layout mais básico, que centraliza seu conteúdo horizontalmente.

Box
O componente Box serve como um componente encapsulador (wrapper) para auxiliar na maioria das necessidades de uso com CSS.

### Aula 04 - O que aprendemos nesta aula`:`

- Organizamos o layout com elementos do MUI;
- Organizamos o nosso código, centralizando a criação de um cliente do axios;
- Utilizamos a ordenação de restaurantes da API.

## Aula 05 - Aquela sobre layout

### Aula 05 - Upgrade na administração - Vídeo 1

Nesta aula, o instrutor discute sobre a melhoria da experiência do usuário em um sistema de administração de restaurantes. Ele propõe a criação de uma barra de navegação e um container para o conteúdo da página. Utilizando componentes do Material-UI e do react-router-dom, ele implementa essas melhorias e verifica se estão funcionando corretamente no navegador. Além disso, o instrutor menciona a possibilidade de criar uma view base para reaproveitar o código em todas as páginas do sistema.

### Aula 05 - Extraindo o layout base - Vídeo 2

Nesta aula, o instrutor ensina como organizar a página base da área administrativa de um projeto React utilizando o VS Code e o react-router-dom. Ele sugere agrupar todas as rotas relacionadas à administração em uma única rota e cria um elemento chamado "PaginaBaseAdmin" para ser comum a todas as rotas filhas. O instrutor também utiliza o componente "Outlet" do react-router-dom para indicar onde as rotas filhas devem ser renderizadas. Após fazer algumas alterações nos arquivos para remover conteúdo duplicado, ele verifica no navegador se a página está funcionando corretamente. Ele destaca a vantagem de ter um código reaproveitável e menciona que o próximo passo é implementar a administração dos restaurantes.

### Aula 05 - O que aprendemos nesta aula`:`

- Aninhamos as rotas da área administrativa;
- Organizamos o layout utilizando o `<Outlet />`;
- Descobrimos que podemos usar async e await para trabalhar com promessas.

## Aula 06 - Aquela sobre o FormData

### Aula 06 - Exibindo os pratos - Vídeo 1

Nesta aula, o instrutor discute sobre a administração dos pratos em um sistema de restaurantes. Ele mostra como implementar a funcionalidade de listagem de pratos, substituindo as referências a "restaurantes" por "pratos". Além disso, ele menciona a possibilidade de adicionar campos adicionais na tabela de pratos, como nome, descrição, tag e imagem. O instrutor também mostra como criar um link para abrir a imagem do prato em uma nova aba. Por fim, ele menciona a necessidade de criar um formulário para cadastrar novos pratos.

### Aula 06 - Formulário de pratos - Vídeo 2

Nesta aula, o instrutor ensina como criar um formulário para adicionar pratos em um sistema de administração de restaurantes. Ele mostra como adicionar campos de texto para o nome e descrição do prato, utilizando o estado para armazenar os valores. Em seguida, ele adiciona campos de seleção para a tag e o restaurante do prato, utilizando a API para obter as opções disponíveis. O instrutor também adiciona um campo de arquivo para a imagem do prato, utilizando o estado para armazenar o arquivo selecionado pelo usuário. No próximo vídeo, será ensinado como enviar os dados do formulário para a API.

### Aula 06 - Enviando pratos para a API - Vídeo 3

Nesta aula, o instrutor aborda o envio de um formulário para uma API, com destaque para o envio de um arquivo binário. Ele explica como montar o objeto FormData, realizar o POST para enviar o formulário e tratar a resposta da requisição. O instrutor também demonstra como corrigir um erro relacionado à tag do prato e como limpar o formulário após o envio bem-sucedido.

### Aula 06 - JSON e upload de arquivos

- Quando enviamos a imagem do prato para a API, utilizamos o [FormData](https://developer.mozilla.org/pt-BR/docs/Web/API/FormData).

- Outra forma de se enviar o arquivo para a API, por exemplo, [base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64).

### Aula 06 - O que aprendemos nesta aula`:`

- Enviamos um arquivo para a api utilizando o FormData;
- Utilizamos inputs mais complexos do MUI, como por exemplo o Select;
- Fizemos requisições adicionais necessárias para o formulário de pratos.

### Aula 06 - Conclusão - Vídeo 4

Nesta aula, o palestrante discute o desenvolvimento de um site estático para um site dinâmico com um mini CMS. Agora, o próprio usuário pode fazer a administração do site. O site obtém os dados de uma API usando o Axios para fazer uma requisição GET. Além disso, foi criada uma área administrativa com links de navegação e um formulário para adicionar pratos, que incluiu uma lista de tags de restaurantes e um input para selecionar uma imagem. O palestrante também aborda a obtenção da lista de restaurantes, a exclusão de um restaurante por ID e a atualização do estado local. O site Alfood passou de estático para dinâmico, com um mini CMS que permite ao proprietário alimentar a base de dados.
