# Boas-vindas ao repositório do Desafio XP Inc !

# Introdução :iphone:

Desafio BackEnd para desenvolvimento de uma aplicação de investimentos em ações, com funcionalidades de conta digital.

Foi necessário a construção de requisições específicas como exemplo, a simulação de uma compra/ venda de ações, saldo da carteira, ações possuídas por cliente, valores de cada ação, depósito e saque em uma determinada conta.

# Instruções 📕

Você pode rodar o projeto via Docker ou localmente

# Docker

Antes de começar a desenvolver:

```bash
git clone git@github.com:ingridrcs/desafio-tecnico-xp-inc.git
cd desafio-tecnico-xp-inc
```

Rode os serviços `node` e `db` com o comando `docker-compose up -d`.

Parar o mysql com o comando `sudo service mysql stop`caso esteja utilizando a porta(3306).

Rodar o container com o `comando docker exec -it desafio_xp bash`.

Instale as depedências com `npm install`

Rodar `npm run dev`

# Local

```bash
git clone git@github.com:ingridrcs/desafio-tecnico-xp-inc.git
cd desafio-tecnico-xp-inc
npm install
```
# Tecnologias Utilizadas

- Docker
- JavaScript
- SQL
- Node.js

