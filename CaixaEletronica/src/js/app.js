

import { ContaBancaria, CaixaEletronica } from "./class.js";


const conta = new ContaBancaria();
const caixaEletronica = new CaixaEletronica(conta);

window.caixaEletronica = caixaEletronica;