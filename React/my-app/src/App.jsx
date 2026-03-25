import ListaTarefas from "./components/ListaTarefas";
import Login from "./components/Login";
import styles from './App.module.css';
import { useRecoilValue } from "recoil";
import { userState } from "./atomo/user";
import { tarefasCountSelector } from "./selector/tarefasCount";

function App(){

  const usuario = useRecoilValue(userState);  
  const tarefasCount = useRecoilValue(tarefasCountSelector);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        {usuario?.estaLogado
            ? `${usuario.nome} - To-Do List (${tarefasCount})`
            : "To-Do List App"}
        </h1>   

      {usuario.estaLogado ? <ListaTarefas/> : <Login/>}
    </main>
  );
}

export default App;