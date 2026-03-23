import { useState } from 'react';
import styled from 'styled-components';

// --- ESTILOS ---

const Header = styled.header`
  position: sticky;
  top: 0;
  background: #1e272e;
  color: white;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
`;

const CarrinhoIcone = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  
  .icone { font-size: 22px; }
  .total-valor { color: #2ecc71; font-weight: bold; font-size: 18px; }
`;

// 1. No PageContainer, adicione align-items: flex-start
const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;                              /* Impede que os cards estiquem verticalmente */
  padding: 40px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 12px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  
  /* --- ADICIONE ESTAS DUAS LINHAS ABAIXO --- */
  transition: all 0.3s ease;                                  /* Cria uma animação suave para qualquer mudança */
  cursor: pointer;                                           /* Muda o cursor para "mãozinha" */

  /* --- ADICIONE ESTE BLOCO DE HOVER ABAIXO --- */
  &:hover {
    transform: translateY(-8px);                            /* Levanta o card 8px para cima */
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);             /* Adiciona uma sombra mais forte e suave */
    border-color: #55efc4;                              /* (Opcional) Muda a cor da borda para um verde claro */
  }
`;

// 3. FORCE uma altura na imagem para o card não esticar
const ImagemProduto = styled.img`
  width: 100%;
  height: 400px;                                        /* Altura fixa para a imagem */
  object-fit: cover;                                   /* Faz a imagem preencher o espaço sem distorcer */
  border-radius: 8px;
`;  

const Button = styled.button`
  background-color: ${props => props.$adicionado ? '#198754' : '#2f3542'};
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  transition: 0.3s;

  &:hover { filter: brightness(1.2); }
`;

// --- COMPONENTE AUXILIAR (ITEM) ---
function Item({ dados, qtd, onAdd, onRemove }) {
  const temItens = qtd > 0;

  return (
    <CardWrapper>
      <ImagemProduto src={dados.img} alt={dados.nome} />
      <h3 style={{ fontSize: '16px', margin: '10px 0 5px 0' }}>{dados.nome}</h3>
      <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}> 
        R$ {dados.preco.toFixed(2).replace('.', ',')}
      </p>

      <Button $adicionado={temItens} onClick={() => onAdd(dados.id)}>
        {temItens ? `No Carrinho (${qtd})` : 'Adicionar ao carrinho'}
      </Button>

      {temItens && (
        <button 
          onClick={() => onRemove(dados.id)} 
          style={{marginTop: '12px', background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', fontSize: '12px', fontWeight: '600'}}
        >
          Limpar item
        </button>
      )}
    </CardWrapper>
  );
}

// --- COMPONENTE PRINCIPAL (EXPORTADO) ---
export default function CardProduto() {
  const [carrinho, setCarrinho] = useState({}); 

  const produtos = [
    { id: 1, nome: "Kit John Style", preco: 299.90, img: "https://i.pinimg.com/200x/6c/2f/8b/6c2f8b80e4ee2ffd85130a4655ba9dac.jpg" },
    { id: 2, nome: "Combo Premium", preco: 450.00, img: "https://i.pinimg.com/200x/1b/2a/f0/1b2af09e3e14db807595ed8b1723b951.jpg" },
    { id: 3, nome: "Kit Iniciante", preco: 120.00, img: "https://i.pinimg.com/200x/07/08/d8/0708d81bdd3c152b6e1f1a38f6c96be8.jpg" },
    { id: 4, nome: "Super Pack", preco: 599.00, img: "https://i.pinimg.com/200x/84/69/92/8469928784fe80931ea1474ac0e2cb56.jpg" },
  ];

  const handleAdd = (id) => {
    setCarrinho(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleRemove = (id) => {
    setCarrinho(prev => ({ ...prev, [id]: 0 }));
  };

  // Cálculos
  const totalGeralItens = Object.values(carrinho).reduce((acc, val) => acc + val, 0);
  const valorTotalGeral = produtos.reduce((acc, p) => acc + (p.preco * (carrinho[p.id] || 0)), 0);

  return (
    <>
      <Header>
        <h2 style={{ margin: 0, letterSpacing: '1px' }}>JOHN STORE</h2>
        <CarrinhoIcone>
          <span className="icone">🛒</span>
          <span>Itens: <strong>{totalGeralItens}</strong></span>
          <span className="total-valor">R$ {valorTotalGeral.toFixed(2).replace('.', ',')}</span>
        </CarrinhoIcone>
      </Header>

      <PageContainer>
        {produtos.map((p) => (
          <Item 
            key={p.id} 
            dados={p}
            qtd={carrinho[p.id] || 0}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        ))}
      </PageContainer>
    </>
  );
}