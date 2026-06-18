# 🌍 Portal de Destinos Turísticos

## 📖 Sobre o Projeto

O Portal de Destinos Turísticos é uma aplicação desenvolvida com Next.js e TypeScript que permite aos usuários explorar destinos turísticos ao redor do mundo.

O sistema apresenta informações sobre diferentes cidades, organizadas por continentes, permitindo uma navegação intuitiva entre as páginas e a visualização de detalhes de cada destino.

Este projeto foi desenvolvido com o objetivo de praticar conceitos modernos de desenvolvimento Front-End utilizando React, Next.js, TypeScript e CSS Modules.

---

## 🚀 Tecnologias Utilizadas

* Next.js
* React
* TypeScript
* CSS Modules
* HTML5
* JavaScript ES6+

---

## 📂 Estrutura do Projeto

```text
app/
├── components/
│   ├── Card/
│   ├── Grid/
│   ├── Title/
│   └── Continente/
│
├── destinos/
│   ├── page.tsx
│   └── [id]/
│       └── page.tsx
│
├── asia/
├── europa/
├── america/
│
├── lib/
│   └── destino.ts
│
├── types/
│   └── types.ts
│
└── page.tsx
```

---

## ✨ Funcionalidades

### Página Inicial

* Exibição dos continentes disponíveis.
* Navegação para páginas específicas de cada continente.

### Listagem de Destinos

* Exibição de destinos filtrados por continente.
* Informações resumidas:

  * Nome
  * País
  * Continente
  * Preço médio
  * Descrição

### Página de Detalhes

* Utilização de rotas dinâmicas do Next.js.
* Exibição completa dos dados do destino selecionado.

Exemplos:

```text
/destinos/1
/destinos/2
/destinos/3
/destinos/4
```

### Componentização

O projeto foi estruturado utilizando componentes reutilizáveis:

#### Title

Responsável pelos títulos das páginas.

#### Card

Exibe as informações resumidas de cada destino.

#### Grid

Organiza os cards em formato responsivo.

#### Continente

Realiza a filtragem dos destinos por continente e reutiliza os componentes Title e Grid.

---

## 🗂️ Modelo dos Dados

Cada destino possui a seguinte estrutura:

```typescript
{
  id: number;
  nome: string;
  pais: string;
  continente: string;
  imagem: string;
  descricao: string;
  precoMedio: number;
}
```

---

## 🎯 Conceitos Aplicados

* Componentização
* Props
* Tipagem com TypeScript
* CSS Modules
* Renderização de listas com map()
* Filtragem de dados com filter()
* Rotas estáticas
* Rotas dinâmicas
* Organização de código
* Reutilização de componentes
* Responsividade

---

## ⚙️ Como Executar o Projeto

### Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### Entrar na pasta

```bash
cd portal-destinos
```

### Instalar dependências

```bash
npm install
```

### Executar o projeto

```bash
npm run dev
```

### Acessar

```text
http://localhost:3000
```

---

## 📸 Telas do Sistema

Sugestão:

* Página Inicial
* Página de Continentes
* Página de Destinos
* Página de Detalhes

Adicione capturas de tela nesta seção.

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos fundamentais do ecossistema React e Next.js, incluindo componentização, tipagem com TypeScript, rotas dinâmicas, reutilização de código e organização de aplicações modernas.

---

## 👨‍💻 Autor

John Lima

Estudante de Engenharia de Software e desenvolvedor em formação.
