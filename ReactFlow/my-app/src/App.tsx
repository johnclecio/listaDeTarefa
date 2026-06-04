import { useEffect, useState } from 'react';
import FormularioReclamacao from './components/FormularioReclamacao'
import type { Reclamacao } from './tipos/Reclamacao';
import ListaReclamacoes from './components/ListaRecalamacoes';
import axios from 'axios';


const API_URl = "https://crudcrud.com/api/1371b6b7a2ef4463bbb24db4702ebef4/reclamacoes"

function App() {

  const [reclamacoes, setReclamacoes] = useState<Reclamacao[]>([]);

  const adicionarReclamacao = (dados: Reclamacao ) => {
    
    axios
    .post<Reclamacao>(API_URl, dados)
    .then(resposta => setReclamacoes(prev => [...prev, resposta.data]));

  }

  useEffect(() =>{
    //fetch
    axios
    .get<Reclamacao[]>(API_URl)
    .then(resposta => setReclamacoes(resposta.data));
  },[])


  return (
    <>
     <FormularioReclamacao  aoEnviar={adicionarReclamacao}/>
     <ListaReclamacoes reclamacoes={reclamacoes}/>
    </>
  )
}

export default App;
