import { useEffect, memo } from "react";
import './Tarefa.css';

function Tarefa({ texto, concluida, onToggle, onRemover }) {

  useEffect(() => {
    console.log("Componente tarefa executada", texto);
  }, []);

  const handleClick = () => {
    if (concluida) {
      onRemover();   // remove tarefa
    } else {
      onToggle();    // marca como concluída
    }
  };

  return (
    <li>
      <input className="btn"
        type="checkbox"
        checked={concluida}
        onChange={onToggle}
      />

      <span className={concluida ? "concluida" : ""}>
        {texto}
      </span>

      <button onClick={handleClick}>
        {concluida ? "Remover" : "Concluída"}
      </button>
    </li>
  );
}

export default memo(Tarefa);