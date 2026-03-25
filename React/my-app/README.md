# 📝 React To-Do List

Aplicação de lista de tarefas desenvolvida com **React + Recoil** para gerenciamento de estado global, com persistência de dados e autenticação simples por usuário.

---

## 📷 Preview

![Preview da aplicação](./src/assets/preview.png)

---

## 🚀 Funcionalidades

* ➕ Adicionar novas tarefas
* ✔️ Marcar tarefas como concluídas
* ❌ Remover tarefas
* 🔎 Filtrar tarefas:

  * Todas
  * Pendentes
  * Concluídas
* 👤 Sistema simples de login por usuário
* 💾 Persistência de tarefas por usuário (LocalStorage)
* 📊 Contador de tarefas dinâmico

---

## 🛠 Tecnologias utilizadas

* React
* Recoil (estado global)
* JavaScript
* Styled-components
* Custom Hooks
* LocalStorage
* Vite

---

## 🧠 Gerenciamento de Estado

A aplicação utiliza **Recoil** para gerenciamento global:

* 🧩 `atom` para:

  * usuário (`userState`)
  * tarefas (`tarefasState`)
  * filtro (`filtroState`)

* 🔄 `selector` para:

  * tarefas filtradas (`tarefasFiltradasState`)
  * contagem de tarefas (`tarefasCountSelector`)

---

## 📚 Conceitos aplicados

* useState
* useEffect
* useCallback
* React.memo
* Recoil (atom e selector)
* Hooks customizados
* Manipulação de listas com `map` e `filter`
* Persistência com LocalStorage
* Componentização

---

## ▶️ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Acesse a pasta:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---

## 📁 Estrutura do Projeto

```bash
src/
├── atomo/
│   ├── user.js
│   └── tarefas.js
│
├── selector/
│   ├── filter.js
│   ├── tarefasSelector.js
│   └── tarefasCount.js
│
├── components/
│   ├── ListaTarefas/
│   ├── Tarefa/
│   └── Login/
│
├── hooks/
│   └── useInput.js
│
├── App.jsx
└── main.jsx
```

---

## ✨ Diferenciais do Projeto

* 🔐 Separação de tarefas por usuário
* 🧠 Uso de estado global com Recoil
* 📊 Dados derivados com selectors
* ♻️ Componentes otimizados com `React.memo`
* 💾 Persistência automática no navegador
* 🧱 Estrutura organizada e escalável

---

## 👨‍💻 Autor

Desenvolvido por **John Lima**

🔗 LinkedIn: https://www.linkedin.com/in/john-fideles/

---

## 📌 Status

✅ Projeto finalizado
🚀 Pronto para portfólio
