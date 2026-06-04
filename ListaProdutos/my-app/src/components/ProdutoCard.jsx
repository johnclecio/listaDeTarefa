import { useState } from "react";
import "./Lista.css";

function Lista({ nome, preco, imagem, descricao }) {

  const [concluida, setConcluida] = useState(false);

  const alternarConcluida = () => {
    setConcluida(!concluida);
  };

  return (
    <li className="listaProdutos">
      <input type="checkbox" onChange={alternarConcluida} />

      <span className={concluida ? "concluida" : ""}>
        {nome} - {preco} - {descricao}
      </span>

      <br/>

      <img src={imagem} alt={nome} width="100" />
    </li>
  );
}

export default Lista;