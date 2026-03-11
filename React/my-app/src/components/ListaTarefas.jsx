import { useContext, useEffect, useState } from "react";
import Tarefa from "./tarefa";
import { useinput } from "../hooks/useInput";
import { UserContext } from "../contexts/UserContext";


//crudcrud
const API_URl = 'https://crudcrud.com/api/b8cd6e157e634816a3eefc86cc7cc3e1/tarefas';


function ListaTarefas(){
  //estado que controla o filtro de exibição das tarefas (todas, pendentes, concluídas)
  const [filtro, setFiltro] = useState("todas");

  // estado que armazena a lista de tarefas
  const [tarefas, setTarefas ]= useState([]);

  // hook customizado que controla o valor do input da tarefa
  const tarefa = useinput();
  
  // acessa o usuário logado através do Context API
  const {usuario} = useContext(UserContext);
  
  // remove a tarefa da API e atualiza o estado da lista
  const removerTarefa = (id) => {
  fetch(`${API_URl}/${id}`, {
    method: "DELETE"
  })
  .then(() => {
    setTarefas((prev) => prev.filter((t) => t._id !== id));
  })
  .catch(error => console.error("Erro ao remover tarefa:", error));

};
// alterna o status da tarefa entre concluída e pendente
const alternarStatus = (id) => {
  setTarefas((prev) =>
    prev.map((t) =>
      t._id === id ? { ...t, concluida: !t.concluida } : t
    )
  );
};

   // carregar tarefas do localStorage
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");

    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  // salvar tarefas no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);



  // busca as tarefas salvas na API quando o componente carrega

  useEffect(()=>{
    fetch(API_URl)
    .then(res => res.json())
    .then(dados => setTarefas(dados))
    .catch(error => console.error("Erro ao buscar tarefas:", error))
  }, [])
  // função chamada ao enviar o formulário para adicionar uma nova tarefa
  const handleSubmit = (e) => {
    e.preventDefault();

    if(tarefa.valor === "")return;
    // objeto da nova tarefa que será enviado para a API
    const nova = {
          usuario: usuario.nome,
          texto: tarefa.valor,
          concluida: false
          };

    fetch(API_URl, {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify(nova)
  })   
    .then(res => res.json())
    .then(tarefaCriada =>{
        setTarefas((prev) => [...prev, tarefaCriada]);
        tarefa.limpar();
        
  }
)   
   
   
    .catch(error => console.error("Erro ao buscar tarefas:", error));

   
   
  };

  

return (
  <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={tarefa.valor}
        onChange={tarefa.onChange}
      />
      <button type="submit">Adicionar</button>
    </form>
    <div>
      <button className="btn" onClick={() => setFiltro("todas")}>Todas</button>
      <button className="btn" onClick={() => setFiltro("pendentes")}>Pendentes</button>
      <button className="btn" onClick={() => setFiltro("concluidas")}>Concluídas</button>
    </div>

    <ul>
      
      {tarefas 
        // mostra apenas tarefas do usuário logado
        .filter((tarefa) => tarefa.usuario === usuario.nome)
        .filter((tarefa) => {
        // aplica o filtro selecionado (todas, pendentes ou concluídas)  
          if (filtro === "pendentes") return !tarefa.concluida;
          if (filtro === "concluidas") return tarefa.concluida;
          return true;
        })
        .map((tarefa) => (
          <Tarefa 
              key={tarefa._id}
              texto={tarefa.texto}
              concluida={tarefa.concluida}
              onToggle={() => alternarStatus(tarefa._id)}
              onRemover={() => removerTarefa(tarefa._id)}
            />
        ))}
    </ul>
  </>
);
}

export default ListaTarefas;
