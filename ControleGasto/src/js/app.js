import { Categoria, ListaGastosPorCategoria } from "./class.js";
import { valorNegativo, atualizarInterface } from "./utils.js";


const gastosPorCategoria =  new ListaGastosPorCategoria(
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros"),

)
  





const formulario = document.querySelector("form");

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault();

    const valorInformado = formulario.elements.valor.value;
    const categoriaInformado = formulario.elements.categoria.value;


    if(valorNegativo(valorInformado)){
        alert("Valor Inválido. O valor não pode ser negativo.");
        return;
    }

    const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformado);
    categoria.adicionarValor(valorInformado);

   
    atualizarInterface(gastosPorCategoria);
    formulario.reset();



})


   





