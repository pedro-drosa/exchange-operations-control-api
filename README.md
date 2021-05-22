# [API] Controle de operações
Desafio 02: Jornada Labs - Havan 2021

### **🚀 Sobre este projeto**

Esta api fornece o que é necessário para criar e organizar operações de câmbio.</br>

Os usuários podem converter valores, adicionar novas moedas ou alterar seu valor, visualizar  todas as operações feitas ou filtrar as operações feitas por data ou nome de um usuário específico.

### **🛠 Tecnologias:**

- [Express](https://expressjs.com/pt-br/)
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

# 💻 Começando

### **Pré-requisitos**

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: 

[Git](https://git-scm.com/), 

[NodeJS](https://nodejs.org/), 

[NPM](https://nodejs.org/) ou [Yarn](https://classic.yarnpkg.com/)

Uma instância do [MySQL](https://www.mysql.com/)

### **🏁 Execute o projeto localmente:**

```bash
# Clone este repositório
$ git clone https://github.com/pedro-drosa/exchange-operations-control-api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd operations-management-system-api

# Instale as dependências
$ yarn

# certifique-se de ter uma instancia de MySQL ativa!

#crie o banco de dados
$ yarn sequelize db:create

# rode as migrações
$ yarn sequelize db:migrate

# Inicie o servidor
$ yarn dev:server

```

# Guia da API

# **Introdução**

Esta documentação deve ajudá-lo a se familiarizar com os recursos disponíveis e como consumi-los com solicitações HTTP. 

**URL base**

O **URL base** é o URL raiz de toda a API, se você fizer uma solicitação para API e receber de volta uma resposta **404 NOT FOUND** , verifique o URL base primeiro.

O URL base é:

[`https://localhost:3333/`](https:/localhost:3333/)

# **Autenticação**

É uma **API totalmente aberta** . Nenhuma autenticação é necessária para consultar e cadastrar os dados.

## Codificações

### **JSON**

JSON é o formato de dados padrão fornecido pela API por padrão.

## **Limitação de taxa**

A API não possui limitação de taxa.

# Recursos

## **Raiz**

O recurso Root fornece informações sobre todos os recursos disponíveis na API.

**Solicitação de exemplo:**

```jsx
http https://localhos:3333/
```

**Resposta de exemplo:**

```json
HTTP/1.0 200 OK
Content-Type: application/json
{
   "currencies": "http://localhost:3333/currencies",
   "operations": "http://localhost:3333/operations",
}
```

**Atributos:**

`currencies` *string* - A raiz do URL para recursos de moedas

`operations` *string* - A raiz do URL para recursos de operações

# **Currencies**

 Moedas disponíveis

**Endpoints**

`GET` `/currencies/` -  obtenha todas as moedas disponíveis para conversão.

`GET` `/currencies/:id` -  obtenha os  dados de uma moeda específica.

`POST` `/currencies/` - cadastre uma nova moeda.

`PUT` `/currencies/:id` -  altere o  valor de uma moeda específica.

`DELETE` `/currencies/:id` -  exclua todos os dados de uma moeda específica.

**Solicitação de exemplo:**

```
GET http://localhost:3333/currencies/
```

**Resposta de exemplo:**

```json
HTTP/1.0 200 OK
Content-Type: application/json
[
  {
    "id": 1,
    "code": "USD",
    "name": "Dólar",
    "price": "3.35",
    "createdAt": "2021-05-20T23:56:05.000Z",
    "updatedAt": "2021-05-20T23:56:05.000Z"
  },
  {
    "id": 2,
    "code": "BRL",
    "name": "Real",
    "price": "1.00",
    "createdAt": "2021-05-20T23:56:31.000Z",
    "updatedAt": "2021-05-21T00:02:07.000Z"
  }
]
```
**Solicitação de exemplo:**

```
POST http://localhost:3333/currencies/
```
**Corpo da requisição:**
```json
{
  "code": "BRL",
  "name":"Real",
  "price": "1"
}
```

**Resposta de exemplo:**
```json
HTTP/1.0 200 OK
Content-Type: application/json
{
  "id": 2,
  "code": "BRL",
  "name": "Real",
  "price": "1",
  "updatedAt": "2021-05-20T23:56:31.398Z",
  "createdAt": "2021-05-20T23:56:31.398Z"
}
```
**Solicitação de exemplo:**

```
PUT http://localhost:3333/currencies/1
```
**Corpo da requisição:**
```json
{
  "price": 6.50
}
```

**Resposta de exemplo:**
```json
HTTP/1.0 200 OK
Content-Type: application/json
{
  "id": 1,
  "code": "USD",
  "name": "Dólar",
  "price": "6.50",
  "createdAt": "2021-05-20T23:56:05.000Z",
  "updatedAt": "2021-05-21T23:13:09.000Z"
}
```

# **Operations**

 Operações realizadas

**Endpoints**

`GET` `/operations/` -  obtenha todas as operações feitas.

`GET` `/operations/?name=client_name` -  obtenha todas as operações feitas por um usuário especifico.

`GET` `/operations/?date=date_operation` -  obtenha todas as operações feitas em uma data especifica.

`GET` `/operations/?name=client_name&date=date_operation` -  obtenha todas as operações feitas por um usuário especifico em uma data específica.

**Solicitação de exemplo:**

```
GET http://localhost:3333/operations/
```

**Resposta de exemplo:**

```json
HTTP/1.0 200 OK
Content-Type: application/json
[
  {
    "id": 1,
    "name": "Pedro",
    "source": "Dólar",
    "target": "Real",
    "exchange": "335.00",
    "total": "372.19",
    "iof": "3.69",
    "standardRat": "33.50",
    "date": "2021-05-20",
    "createdAt": "2021-05-21T00:03:34.000Z",
    "updatedAt": "2021-05-21T00:03:34.000Z"
  },
  {
    "id": 2,
    "name": "Daiane",
    "source": "Dólar",
    "target": "Real",
    "exchange": "1005.00",
    "total": "1116.56",
    "iof": "11.06",
    "standardRat": "100.50",
    "date": "2021-05-20",
    "createdAt": "2021-05-21T00:12:31.000Z",
    "updatedAt": "2021-05-21T00:12:31.000Z"
  },
]
```

**Solicitação de exemplo:**

```
POST http://localhost:3333/operations/
```

**Corpo da requisição:**
```json
{
	"name":"Pedro",
	"quantity": 60,
	"source":"Dólar", 
	"target":"Real"
}
```

**Resposta de exemplo:**

```json
HTTP/1.0 200 OK
Content-Type: application/json
{
  "id": 4,
  "name": "Pedro",
  "source": "Dólar",
  "target": "Real",
  "exchange": 375,
  "total": 416.63,
  "iof": 4.13,
  "standardRat": 37.5,
  "updatedAt": "2021-05-21T23:26:31.303Z",
  "createdAt": "2021-05-21T23:26:31.303Z"
}
```

**Solicitação de exemplo:**

```
GET http://localhost:3333/operations/?name=Pedro
```

**Resposta de exemplo:**

```json
HTTP/1.0 200 OK
Content-Type: application/json
[
  {
    "id": 1,
    "name": "Pedro",
    "source": "Dólar",
    "target": "Real",
    "exchange": "335.00",
    "total": "372.19",
    "iof": "3.69",
    "standardRat": "33.50",
    "date": "2021-05-20",
    "createdAt": "2021-05-21T00:03:34.000Z",
    "updatedAt": "2021-05-21T00:03:34.000Z"
  },
  {
    "id": 4,
    "name": "Pedro",
    "source": "Dólar",
    "target": "Real",
    "exchange": "375.00",
    "total": "416.63",
    "iof": "4.13",
    "standardRat": "37.50",
    "date": "2021-05-20",
    "createdAt": "2021-05-21T23:26:31.000Z",
    "updatedAt": "2021-05-21T23:26:31.000Z"
  }
]
```
**Solicitação de exemplo:**

```
GET http://localhost:3333/operations/?date=2021-05-22
```

**Resposta de exemplo:**

```json
HTTP/1.0 200 OK
Content-Type: application/json
[
  {
    "id": 1,
    "name": "Pedro",
    "source": "Dólar",
    "target": "Real",
    "exchange": "5.37",
    "total": "5.97",
    "iof": "0.06",
    "standardRat": "0.54",
    "date": "2021-05-22",
    "createdAt": "2021-05-22T01:23:25.000Z",
    "updatedAt": "2021-05-22T01:23:25.000Z"
  },
  {
    "id": 2,
    "name": "Daiane",
    "source": "Dólar",
    "target": "Real",
    "exchange": "10.74",
    "total": "11.93",
    "iof": "0.12",
    "standardRat": "1.07",
    "date": "2021-05-22",
    "createdAt": "2021-05-22T01:23:54.000Z",
    "updatedAt": "2021-05-22T01:23:54.000Z"
  }
]
```

**Solicitação de exemplo:**

```
GET http://localhost:3333/operations/?name=Pedro&date=2021-05-22
```

**Resposta de exemplo:**

```json
HTTP/1.0 200 OK
Content-Type: application/json
[
  {
    "id": 2,
    "name": "Daiane",
    "source": "Dólar",
    "target": "Real",
    "exchange": "10.74",
    "total": "11.93",
    "iof": "0.12",
    "standardRat": "1.07",
    "date": "2021-05-22",
    "createdAt": "2021-05-22T01:23:54.000Z",
    "updatedAt": "2021-05-22T01:23:54.000Z"
  }
]
```

## **📝 Licença**

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/pedro-drosa/operations-management-system-api/blob/master/LICENSE) para mais detalhes.

done with 💙 by Pedro Mascarenhas 👋  [Stay in touch!](https://www.linkedin.com/in/pedrojuraci/)
