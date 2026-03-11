import { memo } from "react";
import "./Tarefa.css";

function Tarefa({ texto, concluida, onToggle, onRemover }) {

  const handleClick = () => {
    if (concluida) {
      onRemover();
    } else {
      onToggle();
    }
  };

  return (
    <li>
      <input
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