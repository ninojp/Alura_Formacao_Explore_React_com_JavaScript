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
