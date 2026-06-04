# 📚 Catálogo de Livros

Aplicação desenvolvida em React + TypeScript para gerenciamento de um catálogo de livros, permitindo listar, cadastrar e remover livros através de uma API REST utilizando o serviço CrudCrud.

---

## 🎯 Objetivo

O objetivo deste projeto é demonstrar conhecimentos em:

- React
- TypeScript
- Componentização
- Styled Components
- Consumo de APIs REST
- Axios
- Manipulação de eventos
- Gerenciamento de estado com Hooks
- Tipagem de Props e Estados
- Operações CRUD

---

## 🚀 Funcionalidades

### 📖 Listagem de Livros

Ao iniciar a aplicação, os livros cadastrados são carregados automaticamente da API.

### ➕ Cadastro de Livros

O usuário pode cadastrar um novo livro informando:

- Título
- Autor
- Status
  - Lido
  - Não lido

### 🗑️ Remoção de Livros

Cada livro possui um botão para remoção.

A exclusão é realizada diretamente na API através de uma requisição DELETE.

### ⚠️ Tratamento de Erros

As operações de API utilizam:

- async/await
- try/catch

para capturar possíveis falhas de comunicação.

---

## 🛠️ Tecnologias Utilizadas

### Front-end

- React
- TypeScript
- Vite

### Estilização

- Styled Components

### Comunicação HTTP

- Axios

### API

- CrudCrud

---

## 📂 Estrutura do Projeto

```text
src/
│
├── components/
│   ├── BookForm.tsx
│   ├── BookItem.tsx
│   └── BookList.tsx
│
├── tipos/
│   └── Livro.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🧩 Componentes

### BookForm

Responsável pelo cadastro de novos livros.

Campos:

- Título
- Autor
- Status

Ao enviar o formulário:

- Valida os dados
- Envia para a API
- Atualiza a lista

---

### BookItem

Representa um único livro.

Exibe:

- Título
- Autor
- Status

Ações:

- Remover livro

---

### BookList

Responsável por:

- Renderizar a lista de livros
- Exibir mensagem quando não houver livros cadastrados

---

## 📝 Tipagem

### Livro

```ts
export type Livro = {
  _id?: string;
  titulo: string;
  autor: string;
  status: "Lido" | "Não lido";
};
```

---

## 🔗 API

O projeto utiliza o serviço:

https://crudcrud.com

Exemplo de endpoint:

```ts
const API_URL =
"https://crudcrud.com/api/SEU_ENDPOINT/livros";
```

---

## 📡 Requisições Utilizadas

### GET

Carregar livros

```ts
axios.get(API_URL)
```

---

### POST

Cadastrar livro

```ts
axios.post(API_URL, dados)
```

---

### DELETE

Remover livro

```ts
axios.delete(`${API_URL}/${id}`)
```

---

## ⚙️ Instalação

### Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

---

### Entrar na pasta

```bash
cd catalogo-livros
```

---

### Instalar dependências

```bash
npm install
```

---

### Executar projeto

```bash
npm run dev
```

---

## 📦 Dependências

```bash
npm install axios
npm install styled-components
npm install -D @types/styled-components
```

---

## 💡 Conceitos Aplicados

- Componentização
- Props
- State
- Hooks
- useEffect
- useState
- Eventos de Formulário
- Styled Components
- TypeScript
- Axios
- CRUD
- API REST
- Programação Assíncrona
- Tratamento de Erros

---

## 🎓 Projeto Acadêmico

Projeto desenvolvido para prática de:

- React
- TypeScript
- Consumo de APIs
- Operações CRUD
- Boas práticas de desenvolvimento Front-end

---

## 👨‍💻 Autor

John Lima

Estudante de Engenharia de Software

Desenvolvido utilizando React, TypeScript, Axios e Styled Components.