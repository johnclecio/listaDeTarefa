# 🎨 Agência Criativa Web

Projeto institucional fictício desenvolvido para simular o site de uma agência digital localizada em Pacatuba - CE, com foco em arquitetura escalável com SASS, organização modular e boas práticas de desenvolvimento front-end.

## 📌 Sobre o Projeto

A Agência Criativa Web é um site institucional completo contendo:

### 🏠 Home

### 👥 Sobre Nós

### 💼 Serviços

### ⭐ Depoimentos

### 📩 Contato com formulário

### 📱 Menu responsivo (hambúrguer)

### 🖼 Imagens adaptativas com srcset

## 🎯 Estrutura organizada com metodologia BEM

O projeto foi desenvolvido com foco em separação de responsabilidades e organização profissional de código.

## 🚀 Tecnologias Utilizadas

HTML5 (estrutura semântica)

    CSS3
    
    JavaScript
    
    SASS (SCSS)
    
    CSS Grid
    
    Flexbox
    
    Responsividade com Media Queries
    
    Imagens responsivas (srcset)

## 🧠 Arquitetura SASS (Modular)

O projeto utiliza SASS com partials, permitindo melhor organização, manutenção e escalabilidade.

    📂 Estrutura SASS
    sass/
    │
    ├── _variaveis.scss
    ├── _mixins.scss
    ├── _base.scss
    ├── _layout.scss
    ├── _componentes.scss
    └── estilos.scss
    🔹 _variaveis.scss

#### Arquivo responsável por centralizar:

Paleta de cores

Espaçamentos

Fontes

Breakpoints

Valores reutilizáveis

Exemplo:

    $cor-primaria: #5c3a21;
    $cor-secundaria: #ffffff;
    $breakpoint-mobile: 768px;
    🔹 _mixins.scss

Contém:

Mixins reutilizáveis

Media queries padronizadas

Helpers de centralização

Padrões de layout

Exemplo:

    @mixin flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
### 🔹 _base.scss

Define:

Reset global

Tipografia base

Estilos padrões do body

Configurações iniciais

### 🔹 _layout.scss

Responsável pela estrutura macro:

Grid principal

Header

Nav

Main

Section

Aside

Footer

### 🔹 _componentes.scss

Contém estilos específicos de:

Botões

Cards

Menu hambúrguer

Formulário

Elementos reutilizáveis

## 🎯 Funcionalidades Implementadas

✔ Layout estruturado com CSS Grid

✔ Menu hambúrguer com JavaScript

✔ Navegação interna dinâmica  

✔ Imagens responsivas com srcset

✔ Organização seguindo padrão BEM

✔ Uso de variáveis e mixins

✔ Estrutura semântica completa

## 📱 Responsividade

O projeto foi desenvolvido com:

Mobile First

Media Queries via mixins

Grid responsivo

Imagens adaptativas

## 🛠 Como Executar o Projeto
    1️⃣ Clonar o repositório
    git clone https://github.com/seu-usuario/agencia-criativa-web.git
    2️⃣ Compilar o SASS
    sass sass/estilos.scss src/css/estilos.css
    3️⃣ Modo automático (watch)
    sass --watch sass/estilos.scss:src/css/estilos.css
    4️⃣ Abrir no navegador

Abra o arquivo index.html.

## 📚 Conceitos Trabalhados

Estruturação semântica HTML

Arquitetura modular com SASS

Organização por responsabilidade

Boas práticas de front-end

Separação entre estrutura, estilo e comportamento

Responsividade profissional

Experiência do usuário (UX)

# 👨‍💻 Autor

    John Lima
    Estudante de Engenharia de Software
    Foco em Back-end Java e evolução para Full Stack 🚀
