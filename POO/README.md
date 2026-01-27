# 🚗 Sistema de Veículos em JavaScript

Este projeto é um exemplo prático de **Programação Orientada a Objetos (POO)** em JavaScript, utilizando **classes**, **herança**, **encapsulamento** e **polimorfismo**.

## 📌 Objetivo
Demonstrar como criar uma classe base (`Veiculo`) e estendê-la para classes específicas como `Carro` e `Moto`, reaproveitando código e organizando melhor a lógica da aplicação.

---

## 🧱 Estrutura do Projeto

- **Veiculo**
  - Atributos: `marca`, `modelo`, `ano`
  - Controle de estado: ligar e desligar o veículo
- **Carro**
  - Herda de `Veiculo`
  - Possui atributo adicional `numeroPortas`
  - Método específico `abrirPortas()`
- **Moto**
  - Herda de `Veiculo`

---

## ⚙️ Funcionalidades

- Ligar e desligar veículos
- Verificar se o veículo está ligado
- Criar veículos específicos (carro e moto)
- Uso de `super()` para reaproveitamento do construtor da classe base

---

## ▶️ Exemplo de Uso

```javascript
const carro = new Carro("Honda", "Civic", 2025, 4);
const moto = new Moto("Yamaha", "Fazer 160", 2025);

carro.ligar();
carro.abrirPortas();
carro.desligar();



🛠️ Tecnologias Utilizadas

JavaScript (ES6+)

Node.js (opcional para execução)

📚 Conceitos Aplicados

Classes e Objetos

Herança (extends)

Encapsulamento

Getter

Reutilização de código



👤 Autor

John Lima
Estudante de Engenharia de Software, em transição para a área de tecnologia,
com foco em desenvolvimento Full Stack e arquitetura de microsserviços.




