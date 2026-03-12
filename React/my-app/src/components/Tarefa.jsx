import { memo } from "react";
import styles from './Tarefa.module.css';

function Tarefa({ texto, concluida, onToggle, onRemover }) {

  const handleClick = () => {
    if (concluida) {
      onRemover();
    } else {
      onToggle();
    }
  };

  return (
    <li className={styles.item}>
      <input 
        type="checkbox"
        checked={concluida}
        onChange={onToggle}
      />

      <span className={concluida ? styles.concluida : ""}>
        {texto}
      </span>

      <button className={styles.alerta} onClick={handleClick}>
        {concluida ? "Remover" : "Concluída"}
      </button>
    </li>
  );
}

export default memo(Tarefa);