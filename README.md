<h1 align="center">Rentx API - Em Andamento</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-diagrama">Diagrama</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

 <img src="./src/images/screen.png" alt="" />
</p>

<br>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- []()
- []()
- []()
- []()

## 💻 Projeto

.

## 🔶 Diagrama

<img src="./src/images/diagrama.png" alt="Diagrama da aplicação" />

## 🚀 Como executar

- Clone o repositório
- Instale as dependências com `yarn`
- Inicie o servidor com `yarn dev`

A aplicação pode ser acessada em [`localhost:8080`](http://localhost:8080).

<br/>

## 📕 Requisitos e Regra de negocio

<br/>

### Cadastro de carro

**RF**

- Deve ser possível cadastrar um novo carro.

**RN**

- [x] - Não deve ser possível cadastrar um carro com uma placa já existente.
- [x] - O carro deve ser cadastrado, por padrão, com disponibilidade.
- [x] - O usuário responsável pelo cadastro deve ser um usuário administrador.

### Listagem de carros

**RF**

- [x] - Deve ser possível listar todos os carros disponíveis
- [x] - Deve ser possível listar todos os carros disponíveis pelo - nome da categoria
- [x] - Deve ser possível listar todos os carros disponíveis pelo - nome da marca
- [x] - Deve ser possível listar todos os carros disponíveis pelo - nome do carro

**RN**

- [x] - O usuário não precisar estar logado no sistema.

### Cadastro de Especificação no carro

**RF**

- [x] - Deve ser possível cadastrar uma especificação para um carro

**RN**

- [x] - Não deve ser possível cadastrar uma especificação para um - carro não cadastrado.
- [x] - Não deve ser possível cadastrar uma especificação já - existente para o mesmo carro.
- [x] - O usuário responsável pelo cadastro deve ser um usuário - administrador.

### Cadastro de imagens do carro

**RF**

- [x] - Deve ser possível cadastrar a imagem do carro

**RNF**

- [x] - Utilizar o multer para upload dos arquivos

**RN**

- [x] - O usuário deve poder cadastrar mais de uma imagem para o - mesmo carro
- [x] - O usuário responsável pelo cadastro deve ser um usuário - administrador.

### Aluguel de carro

**RF**

- [x] - Deve ser possível cadastrar um aluguel

**RN**

- [x] - O aluguel deve ter duração mínima de 24 horas.
- [x] - Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo usuário
- [x] - Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo carro
- [x] - O usuário deve estar logado na aplicação
- [x] - Ao realizar um aluguel, o status do carro deverá ser - alterado para indisponível

### Devolução de carro

**RF**

- [] - Deve ser possível realizar a devolução de um carro

**RN**

- [] - Se o carro for devolvido com menos de 24 horas, deverá - ser cobrado diária completa.
- [] - Ao realizar a devolução, o carro deverá ser liberado para - outro aluguel.
- [] - Ao realizar a devolução, o usuário deverá ser liberado - para outro aluguel.
- [] - Ao realizar a devolução, deverá ser calculado o total do - aluguel.
- [] - Caso o horário de devolução seja superior ao horário - previsto de entrega, deverá ser cobrado multa - proporcional aos dias de atraso.
- [] - Caso haja multa, deverá ser somado ao total do aluguel.
- [] - O usuário deve estar logado na aplicação

### Listagem de Alugueis para usuário

**RF**

- [] - Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**

- [x] - O usuário deve estar logado na aplicação

### Recuperar Senha

**RF**

- [x] - Deve ser possível o usuário recuperar a senha informando o e-mail
- [x] - O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
- [x] - O usuário deve conseguir inserir uma nova senha

**RN**

- [x] - O usuário precisa informar uma nova senha
- [] - O link enviado para a recuperação deve expirar em 3 horas
