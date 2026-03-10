import { useEffect, useState } from "react";
import Tarefa from "./components/tarefa";
import { useinput } from "./hooks/useInput";


//crudcrud
const API_URl = 'https://crudcrud.com/api/6d919fae8b29476ab063ef10e71e84e7/tarefas';


function App(){

  const [tarefas, setTarefas ]= useState([]);
  const tarefa = useinput();



 




  //Buscar os dados 

  useEffect(()=>{
    fetch(API_URl)
    .then(res => res.json())
    .then(dados => setTarefas(dados))
    .catch(error => console.error("Erro ao buscar tarefas:", error))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(tarefa.valor === "")return;

    const nova = {  texto: tarefa.valor};

    fetch(API_URl, {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify(nova)
  })   
    .then(res => res.json())
    .then(tarefasCriada =>{
        setTarefas([...tarefas, tarefasCriada]);
        tarefa.limpar();
  })
   
    .catch(error => console.error("Erro ao buscar tarefas:", error));

   
   
  };

  return (
  <main>
        <h1>To-De List App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Digite uma nova tarefa" 
          value={tarefa.valor}
          onChange={tarefa.onChange}
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          {tarefas.map(tarefa => (
          <Tarefa key={tarefa._id} texto={tarefa.texto} />
        ))}
        </ul>
  </main>
  )
}

export default App;
