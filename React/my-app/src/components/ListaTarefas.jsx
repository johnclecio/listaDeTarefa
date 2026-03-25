
import { useEffect, useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import Tarefa from "./tarefa";
import { useInput } from "../hooks/useInput";
import styles from './ListaTarefa.module.css';

import { userState } from "../atomo/user";
import { tarefasState } from "../atomo/tarefas";

import { filtroState } from "../selector/filter";
import { tarefasFiltradasState } from "../selector/tarefasSelector";





function ListaTarefas(){
  //estado que controla o filtro de exibição das tarefas (todas, pendentes, concluídas)
  const [filtro, setFiltro] = useRecoilState(filtroState);
  const tarefasFiltradas = useRecoilValue(tarefasFiltradasState);

  

  // estado que armazena a lista de tarefas
  const [tarefas, setTarefas ]= useRecoilState(tarefasState);

  // hook customizado que controla o valor do input da tarefa
  const inputTarefa = useInput();
  
  // acessa o usuário logado através do Context API
  const usuario = useRecoilValue(userState);
  

// alterna o status da tarefa entre concluída e pendente
const alternarStatus = useCallback((id) => {
  setTarefas((prev) =>
    prev.map((t) =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    )
  );
}, [setTarefas]);
// remove Tarefa 
const removerTarefa = useCallback((id) => {
  setTarefas((prev) => prev.filter((t) => t.id !== id));
}, [setTarefas]);




   // carregar tarefas do localStorage
    useEffect(() => {
      if (!usuario?.nome) {
        setTarefas([]);
        return;
      }

      const tarefasSalvas = localStorage.getItem(`tarefas_${usuario.nome}`);

      if (tarefasSalvas) {
        setTarefas(JSON.parse(tarefasSalvas));
      } else {
        setTarefas([]);
      }
    }, [usuario, setTarefas]);

  // salvar tarefas no localStorage sempre que mudar
  useEffect(() => {
  if (!usuario?.nome) return;

  localStorage.setItem(
    `tarefas_${usuario.nome}`,
    JSON.stringify(tarefas)
  );
}, [tarefas, usuario]);

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!inputTarefa.valor.trim()) return;

  const nova = {
    id: Date.now(),
    usuario: usuario?.nome,
    texto: inputTarefa.valor,
    concluida: false
  };

  setTarefas((prev) => [...prev, nova]);
  inputTarefa.limpar();
};



 

  

return (
  <>
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Digite uma nova tarefa"
        value={inputTarefa.valor}
        onChange={inputTarefa.onChange}
      />
      <button className={styles.button} type="submit">Adicionar</button>
    </form>
    <div>
      <button className={styles.button} onClick={() => setFiltro("todas")}>Todas</button>
      <button className={styles.button} onClick={() => setFiltro("pendentes")}>Pendentes</button>
      <button className={styles.button} onClick={() => setFiltro("concluidas")}>Concluídas</button>
    </div>

    <ul className={styles.list}>
      {tarefasFiltradas.map((tarefa) => (
        <Tarefa 
          key={tarefa.id}
          texto={tarefa.texto}
          concluida={tarefa.concluida}
          onToggle={() => alternarStatus(tarefa.id)}  
          onRemover={() => removerTarefa(tarefa.id)}
        />
      ))}
    </ul>
  </>
);
}

export default ListaTarefas;
