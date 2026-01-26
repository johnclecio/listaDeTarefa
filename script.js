

const matrizGastos = [
    ["Alimentação", 0],
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total", 0],
]

const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;
const limparCampos = () => obterElemento('valor').value = '';
const formataMoeda = (valor) => valor.toFixed(2).replace('.' , ',');


const obterValorInformado = () => parseFloat(obterElemento('valor').value);
const obterCategoriaInformada = () => obterElemento('categoria').value;

const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria); 


const atualizarValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);


const atualizarInterface = () => {
    matrizGastos.forEach(([nome, valor]) => {
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`;
    });
};
function adicionarGastos(){


    const valorInformado = obterValorInformado();
    const categoriaInformado = obterCategoriaInformada();


    if(valorNegativo(valorInformado)){
        alert("Valor Inválido. O valor não pode ser negativo.");
        return;
    }

    const categoria = obterCategoria(matrizGastos, categoriaInformado);
    const total =obterCategoria(matrizGastos, 'Total');

    atualizarValorCategoria(categoria, valorInformado);
    atualizarValorCategoria(total, valorInformado);
    atualizarInterface();
    limparCampos();


}