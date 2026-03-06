import { useEffect, useState } from "react";
import Lista from "../components/ProdutoCard";

function Home() {

  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

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

    }, 2000); // simula 2 segundos de requisição

  }, []);

  if (carregando) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <ul className="listaContainer">

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
  );
}

export default Home;