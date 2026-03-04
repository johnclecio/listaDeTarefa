import Tarefa from "./components/tarefa";




function App(){

  const tarefas = [
    {id: 1, texto: "Estuadar React " },
    {id: 2, texto: "Fazer compras " },
    {id: 3, texto: "Responder e-mails " }
  ];

  return (
  <main>
        <h1>To-De List App</h1>
        <ul>
          {tarefas.map((tarefa => <Tarefa key={tarefa.id} texto={tarefa.texto}/>))}
        </ul>
  </main>
  )
}

export default App;
