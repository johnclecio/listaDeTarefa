import { useEffect, useState } from "react";
import Lista from "../components/ProdutoCard";
import '../components/Lista.css';

function Home() {

  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // states do formulário
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  //Simular API
  useEffect(() => {

    setTimeout(() => {

      const produtosMock = [
        {
          id: 1,
          nome: "Notebook",
          preco: 3500,
          imagem: "https://i.pinimg.com/736x/bd/8c/c9/bd8cc91f0dbab90de8cc3a9bfa078960.jpg",
          descricao: "Notebook para desenvolvimento"
        },
        {
          id: 2,
          nome: "Mouse Gamer",
          preco: 120,
          imagem: "https://i.pinimg.com/736x/78/d7/b1/78d7b1a156b56055a2efd35bd7029553.jpg",
          descricao: "Mouse com RGB"
        },
        {
          id: 3,
          nome: "Teclado Mecânico",
          preco: 250,
          imagem: "https://i.pinimg.com/736x/e8/5e/ef/e85eef47b93ed18ea6a2e38e975f3ecf.jpg",
          descricao: "Teclado para programadores"
        }
      ];

      setProdutos(produtosMock);
      setCarregando(false);

    }, 2000);

  }, []);

  // adicionar produto
  const handleSubmit = (e) => {

    e.preventDefault();

    const novoProduto = {
      id: Date.now(),
      nome,
      preco,
      descricao,
      imagem
    };

    setProdutos([...produtos, novoProduto]);

    // limpar formulário
    setNome("");
    setPreco("");
    setDescricao("");
    setImagem("");
  };

  if (carregando) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div className="listaContainer">

      <h1>Catálogo de Produtos</h1>

      {/* FORMULÁRIO */}
      <form className="listaForm" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="URL da imagem"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />

        <button type="submit">Adicionar Produto</button>

      </form>

      <ul>

        {produtos.map((produto) => (
          <Lista
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
            descricao={produto.descricao}
          />
        ))}

      </ul>

    </div>
  );
}

export default Home;