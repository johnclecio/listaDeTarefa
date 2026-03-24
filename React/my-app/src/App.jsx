
import ListaTarefas from "./components/ListaTarefas";
import Login from "./components/Login";
import styles from './App.module.css';
import { useRecoilValue } from "recoil";
import userState from "./state/user";


function App(){

  
    const usuario = useRecoilValue(userState);  

  return (

      
          <main className ={styles.main}>
                <h1 className={styles.title}>{usuario.nome} To-De List App</h1>
                {usuario.estaLogado ? <ListaTarefas/> : <Login/>}
                
          </main>

     
  )
}

export default App;
