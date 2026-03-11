import { useEffect, useState } from "react";
import Tarefa from "./components/tarefa";
import ListaTarefas from "./components/ListaTarefas";
import Login from "./components/Login";
import { UserContext } from "./contexts/UserContext";
import './components/Tarefa.css';


function App(){

  const [usuario, setUsuario] = useState({nome: null, estaLogado: false })


  return (

      <UserContext.Provider value={{usuario, setUsuario}}>
          <main className="container">
                <h1>{usuario.nome} To-De List App</h1>
                {usuario.estaLogado ? <ListaTarefas/> : <Login/>}
                
          </main>

      </UserContext.Provider>
  )
}

export default App;
