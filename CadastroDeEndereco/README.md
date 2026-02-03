# 📍 Consulta de CEP com ViaCEP

Projeto simples em **HTML, CSS e JavaScript** que realiza a **integração com a API ViaCEP** para auto preenchimento de endereço a partir do CEP informado pelo usuário, além de **persistir os dados do formulário utilizando a Web Storage API**.

## 🚀 Funcionalidades

- Consulta de CEP utilizando a API pública **ViaCEP**
- Preenchimento automático dos campos:
  - Logradouro
  - Bairro
  - Cidade
  - Estado
- Validação básica do CEP (8 dígitos)
- Mensagem de erro para CEP inexistente
- Requisição feita via `fetch`
- Salvamento automático dos dados do formulário no **localStorage**
- Restauração dos dados ao recarregar a página

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- API ViaCEP
- Web Storage API (`localStorage`)

## 📌 Como funciona

1. O usuário digita o CEP no campo correspondente
2. Ao sair do campo (`blur`), o sistema valida o CEP
3. A aplicação consome a API ViaCEP
4. Os dados de endereço são preenchidos automaticamente no formulário
5. As informações são salvas automaticamente no `localStorage`
6. Ao recarregar a página, os dados são restaurados

## 📂 Estrutura do Projeto

📁 projeto  
┣ 📄 index.html  
┗ 📁 src  
&nbsp;&nbsp;┣ 📁 css  
&nbsp;&nbsp;┃ ┗ 📄 style.css  
&nbsp;&nbsp;┗ 📁 js  
&nbsp;&nbsp;&nbsp;&nbsp;┗ 📄 script.js  
