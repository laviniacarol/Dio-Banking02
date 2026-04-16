# Dio Banking

Interface de um banco fictício desenvolvida como desafio do curso TypeScript Fullstack da Digital Innovation One (DIO).

O projeto consiste em uma aplicação React com TypeScript integrada a um backend Node.js, com autenticação JWT, cadastro e visualização de conta bancária.

---

## Tecnologias Utilizadas

- React 19
- TypeScript
- Chakra UI
- Axios
- React Router DOM
- Jest (testes unitários)

---

## Funcionalidades

- Cadastro de usuário
- Login com autenticação JWT
- Tela de conta com dados do usuário
- Tela de informações da conta
- Logout com limpeza de sessão
- Persistência de sessão via localStorage
- Testes unitários dos serviços

---

## Pré-requisitos

- Node.js instalado
- Backend [node-ts-backend](https://github.com/carolinac22/node-ts-backend) rodando na porta `5000`

---

## Configuração

1. Clone o repositório:
```bash
git clone https://github.com/carolinac22/Dio-Banking02.git
cd Dio-Banking02
```

2. Instale as dependências:
```bash
npm install
```

3. Crie o arquivo `.env` na raiz com base no `.env.example`:
```bash
cp .env.example .env
```

Conteúdo do `.env`:
```
REACT_APP_API_URL=http://localhost:5000
```

4. Inicie o frontend:
```bash
npm start
```

> Certifique-se de que o backend está rodando antes de testar o login.

---

## Como usar

1. Acesse `http://localhost:3000`
2. Na aba **Cadastrar**, crie uma conta com nome, email e senha
3. Na aba **Login**, entre com as mesmas credenciais
4. Visualize os dados da sua conta

---

## Rodando os testes

```bash
npm test
```

---

## Fotos do projeto

![trash](https://github.com/user-attachments/assets/9ffb4c5c-6bf1-4924-83c5-22cd1266f7a0)
<br>
![tr](https://github.com/user-attachments/assets/ddf23d13-0b0d-40c6-94d5-bb26aec72182)

