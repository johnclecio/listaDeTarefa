import { useEffect, useState } from "react";
import Tarefa from "./components/tarefa";


//crudcrud
const API_URl = 'https://crudcrud.com/api/6b6c4edacc624b468d696a0036191004/tarefas';


function App(){

  const [tarefas, setTarefas ]= useState([]);

  const [novaTarefa, setNovaTarefa] = useState("");


  //Buscar os dados 

  useEffect(()=>{
    fetch(API_URl)
    .then(res => res.json())
    .then(dados => setTarefas(dados))
    .catch(error => console.error("Erro ao buscar tarefas:", error))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(novaTarefa.trim() === "")return;

    const nova = {  texto: novaTarefa.trim()};

    fetch(API_URl, {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify(nova)
  })   
    .then(res => res.json())
    .then(tarefasCriada =>{
        setTarefas([...tarefas, tarefasCriada]);
        setNovaTarefa('');
  })
   
    .catch(error => console.error("Erro ao buscar tarefas:", error));

   
   
  };

  return (
  <main>
        <h1>To-De List App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Digite uma nova tarefa" 
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
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
