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
<img width="1918" height="892" alt="image" src="https://github.com/user-attachments/assets/6183a701-1619-4e81-be04-6bedde0e3826" />
<br>
<img width="1917" height="897" alt="image" src="https://github.com/user-attachments/assets/71771a32-c045-4950-9847-96afcc160923" />


