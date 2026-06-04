

const obterElemento = (id) => document.getElementById(id);

const formataMoeda = (valor) => valor.toFixed(2).replace('.' , ',');

export const valorNegativo = (valor) => valor < 0;




export const atualizarInterface = (gastosPorCategoria) => {
  gastosPorCategoria.categorias
    .map(({ nome, valor }) => ({
      elemento: document.getElementById(nome),
      texto: `${nome}: R$ ${formataMoeda(valor)}`
    }))
    .forEach(({ elemento, texto }) => {
      if (elemento) {
        elemento.textContent = texto;
      }
    });

  const elementoTotal = document.getElementById("Total");
  elementoTotal.textContent =
    `Total: R$ ${formataMoeda(gastosPorCategoria.obterTotal())}`;
};

